<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="logout">Logout</button>
    <h2>Create a new form action:</h2>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'PGA Tour Superstore Form Actions'
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
