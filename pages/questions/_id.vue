<template>
  <div>
    <v-container fluid class="pa-0">
      <Toolbar />
    </v-container>

    <v-container>
      <v-row>
        <v-col md="8" offset-md="2" sm="10" offset-sm="1">
          <v-card>
            <v-card-text>
              question1
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="8" offset-md="2" sm="10" offset-sm="1">
          <v-card>
            <v-card-text>
              question2
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>

export default ({
  async asyncData({ params, redirect }) {
    try {
      if (!params.id) throw { message: 'FORM_ID_EMPTY' }

      return { formId: params.id }
    } catch (error) {
      redirect('/404')
      return false;
    }
  },
  methods: {
    async fetch() {
      try {
        const response = await this.$store.dispatch('forms/show', this.formId)
     
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.fetch();
  }
})

</script>