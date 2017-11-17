<template>
  <div class="login">
    <h2>Please enter your login infomation</h2>
    <input type="email" v-model="email" placeholder="E-Mail"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="logIn">Login</button><br>
    <p>Need an account. <router-link to="/sign-up">Create account here</router-link>.</p>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Login',
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    logIn: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('Hello');
        },
        (err) => {
          alert('Opps: ' + err.message)
        }
      )
    }
  }
}
</script>

<style scoped>
</style>
