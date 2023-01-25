<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
    </v-col>
  </v-row>
</template>

<script>
export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: 'Home'
    }
  },
  methods: {
    async fetchForms() {
      try {
        const response = await this.$axios.$get('/forms', {
          headers: {
            Authorization: `Bearer ${this.$store.state.auth.accessToken}`
          }
        })
        console.log((response))

      } catch (error) {
        console.error(error)
      }
    }
  },
  mounted() {
    this.fetchForms()
  }
}
</script>
