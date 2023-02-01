<template>
  <v-container class="mt-3">
    <v-row>
    <v-col cols="12" class="text-right">
      <BtnCreateForm/>
    </v-col>
  </v-row>
  </v-container>
  
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
