<template>
  <v-row>
    <v-col cols="10" offset="1" md="4" offset-md="4">
      <v-card>
        <v-toolbar dark color="primary">Login</v-toolbar>

        <v-card-text>

          <v-alert color="red lighten-2" dark v-if="isError">
            {{ $t(message) }}
          </v-alert>

          <v-form ref="form">

            <v-text-field label="Email" :rules="rules.email" v-model="form.email" required>
            </v-text-field>

            <v-text-field label="Password" :rules="rules.password" v-model="form.password" type="password" required>
            </v-text-field>


          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :loading="isLoading" color="primary" @click="onSubmit">Login</v-btn>
        </v-card-actions>
      </v-card>
      <div class="d-flex align-baseline">
        <p>Belum punya akun?</p>
        <v-btn text plain to="/register" :ripple="false" color="primary" class="pl-1">REGISTER</v-btn>
      </div>

    </v-col>
  </v-row>
</template>

<script>
export default {
  middleware: ['unauthenticated'],
  layout: 'auth',
  data() {
    return {
      emailExist: false,
      isError: false,
      isLoading: false,
      message: null,
      form: {

        email: '',
        password: '',

      },
      rules: {

        email: [
          (v) => !!v || this.$t('FIELD_REQUIRED', {field: 'email'}),
          (v) => /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(v) || this.$t('INVALID_EMAIL'),
        ],
        password: [
          (v) => !!v || this.$t('FIELD_REQUIRED', {field: 'password'}),
          (v) => v.length >= 6 || this.$t('FIELD_MIN', {field: 'password', min: 6}),
        ],

      }
    }
  },
  methods: {
    async onSubmit() {
      try {
        this.isLoading = true;

        const user = await this.$store.dispatch('auth/login', this.form)

        this.$router.push({name: 'index___' + this.$i18n.locale})
        this.isLoading = false;
      } catch (error) {
        
        this.isError = true;
        this.message = error.response ? error.response.data.message : "INTERNAL_SERVER_ERROR";

        this.isLoading = false;

      }
    }
  }

}
</script>
