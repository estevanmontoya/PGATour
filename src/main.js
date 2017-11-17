// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDw9p7igytzl8-U2_hNLUJpBXvPctNHgvM",
  authDomain: "pga-tour-superstore.firebaseapp.com",
  databaseURL: "https://pga-tour-superstore.firebaseio.com",
  projectId: "pga-tour-superstore",
  storageBucket: "pga-tour-superstore.appspot.com",
  messagingSenderId: "367811437778"
};
firebase.initializeApp(config);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
