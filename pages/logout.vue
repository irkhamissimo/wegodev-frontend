<script>
import * as Cookies from 'js-cookie';

export default {
  middleware: ['authenticated'],
  mounted() {
    // pilih salah satu
    
    // hapus cookies permanen
    // Cookies.remove('vuex');
    // window.location.href = '/login';

    // set cookies = null
    this.$store.commit('auth/logout'),
    this.$router.push({name: 'index___' + this.$i18n.locale})
  }
}
</script>
