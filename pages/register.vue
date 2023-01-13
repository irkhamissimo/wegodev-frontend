<template>
  <v-row>
    <v-col cols="10" offset="1" md="4" offset-md="4">
      <v-card>
        <v-toolbar dark color="primary">Register</v-toolbar>

        <v-card-text>
          <v-form ref="form">
            <v-text-field label="Name" :rules="rules.fullname" v-model="form.fullname" required>
            </v-text-field>

            <v-text-field label="Email" :rules="rules.email" v-model="form.email" @keydown="resetEmailExistMessage"
              required>
            </v-text-field>

            <v-text-field label="Password" :rules="rules.password" v-model="form.password" type="password" required>
            </v-text-field>

            <v-text-field label="Confirm Password" :rules="rules.password_confirmation"
              v-model="form.password_confirmation" type="password" required>
            </v-text-field>

          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :loading="isLoading" color="primary" @click="onSubmit">Register</v-btn>
        </v-card-actions>
      </v-card>
      <div class="d-flex align-baseline">
        <p>Sudah punya akun?</p>
        <v-btn text plain to="/login" :ripple="false" color="primary" class="pl-1">LOGIN</v-btn>
      </div>

    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      emailExist: false,
      isLoading: false,
      form: {
        fullname: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      rules: {
        fullname: [
          (v) => !!v || 'Fullname is required',
        ],
        email: [
          (v) => !!v || 'Email is required',
          (v) => /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(v) || 'Email must be valid',
          (v) => !this.emailExist || 'Email already exist',

        ],
        password: [
          (v) => !!v || 'Password is required',
          (v) => v.length >= 6 || 'Password must be at least 6 characters',
        ],
        password_confirmation: [
          (v) => !!v || 'Password confirmation is required',
          (v) => v === this.form.password || 'Password confirmation must be same with password'
        ]
      }
    }
  },
  methods: {
    resetEmailExistMessage() {
      this.emailExist = false
    },
    async onSubmit() {
      try {
        if (this.$refs.form.validate()) {
          this.isLoading = true;
          const response = await this.$axios.$post('/api/register', this.form);
          
          if(response.message === 'user is created succesfully') {
            alert(response.message);
          }
          this.isLoading = false;
        }
      } catch (error) {
        console.log(error.response);
        if (error.response.data.message === 'Email is already registered') {
          this.emailExist = true;
          this.$refs.form.validate();
        }
      }
    }
  }
}
</script>
