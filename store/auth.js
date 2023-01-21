export const state = () => ({
  accessToken: null,
  refreshToken: null,
  fullname: null,
});

export const getters = {
  authenticated(state) {
    if (state.accessToken) {
      return true;
    }
    return false;
  },
};
export const mutations = {
  setFullName(state, fullname) {
    state.fullname = fullname;
  },
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken;
  },
  setRefreshToken(state, refreshToken) {
    state.refreshToken = refreshToken;
  },
  logout(state) {
    state.fullname = null,
    state.accessToken = null,
    state.refreshToken = null;
  }
};

export const actions = {
  async login({ commit }, payload) {
    const response = await this.$axios.$post(
      'http://localhost:5000/login',
      payload
    );
    if (!response) return false;

    commit('setAccessToken', response.accessToken);
    commit('setRefreshToken', response.refreshToken);
    commit('setFullName', response.fullname);

    return response;
  },
};
