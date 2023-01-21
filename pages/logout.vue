<template>
  <v-row>
    <v-col cols="10" offset="1" md="4" offset-md="4">
      <v-card>
        <v-card-text class="d-flex align-center">
          <h2>Logout</h2>
          <v-progress-circular class="ml-3" color="primary" indeterminate></v-progress-circular>
        </v-card-text>
      </v-card>

    </v-col>
  </v-row>
</template>

<script>
// uncomment import cookies kalau pakai metode pertama
// import * as Cookies from 'js-cookie';

export default {
  middleware: ['authenticated'],
  layout: 'auth',
  mounted() {
    setTimeout(() => {
      // pilih salah satu

      // hapus cookies permanen
      // Cookies.remove('vuex');
      // window.location.href = '/login';

      // set cookies = null
      this.$store.commit('auth/logout'),
      this.$router.push({name: 'index___' + this.$i18n.locale})
    }, 2000)
  }
}
</script>
