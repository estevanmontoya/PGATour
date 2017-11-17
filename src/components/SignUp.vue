<template>
  <div class="signIn">
    <h2>Create new account</h2>
    <input type="email" v-model="email" placeholder="E-Mail"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="signUp">Create New Account</button><br>
    <p>Already have an account? <router-link to="/login">Login here</router-link>.</p>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'SignUp',
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function(user) {
          alert('Your account has been created!')
        },
        function(err) {
          alert('Opps: ' + err.message)
        }
      );
    }
  }
}
</script>

<style scoped>
</style>
