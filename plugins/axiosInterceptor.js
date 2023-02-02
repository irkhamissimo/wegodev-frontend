export default function ({ $axios, redirect, store }) {
  $axios.onRequest((config) => {
    if (store.state.auth.accessToken) {
      config.headers[
        'Authorization'
      ] = `Bearer ${store.state.auth.accessToken}`;
    }
  });

  $axios.onResponseError(async (error) => {
    try {
      if (
        error.response.message === 'REFRESH_TOKEN_EXPIRED' ||
        error.response.message === 'INVALID_REFRESH_TOKEN'
      ) {
        throw new Error('LOGOUT');
      }

      if (
        error.response.status === 401 &&
        error.response.message === 'ACCESS_TOKEN_EXPIRED'
      ) {
        let refreshToken = store.state.auth.refreshToken;

        const response = await $axios.$post('/refresh-token', {
          refreshToken: refreshToken,
        });
        if (!response) throw new Error('LOGOUT');

        // menyimpan token baru ke store/auth
        store.commit('auth/setAccessToken', response.accessToken);
        store.commit('auth/setRefreshToken', response.refreshToken);

        // request ulang
        let originalRequest = error.config;
        originalRequest.headers[
          'Authorization'
        ] = `Bearer ${store.state.auth.accessToken}`;

        return $axios(originalRequest);
      } else {
        return Promise.reject(error)
      }
    } catch (err) {
      if (error.message === 'LOGOUT') return redirect('/logout');
    }
  });
}
