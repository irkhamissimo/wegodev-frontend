<template>
  <v-btn :loading="isLoading" color="primary" @click="createNewForm">
    New Form
    <v-icon>mdi-plus</v-icon>

  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    async createNewForm() {
      try {
        this.isLoading = true
        const forms = await this.$axios.$post('/forms')
        const questions = await this.$axios.$post(`/forms/${forms.form._id}/question`)
        this.$router.push(`/questions/${forms.form._id}`)
      } catch (error) {
        console.log(error.response)
        this.isLoading = true
      }
    }
  }
}
</script>