import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import AlertComponent from './components/Shared/Alert.vue'

Vue.config.productionTip = false
Vue.component('app-alert', AlertComponent)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyDKYyoAdkuKtDyajGZ8K4NBA1KgwJMljj4",
      authDomain: "mhckv4wz8lb18307ig6f.firebaseapp.com",
      databaseURL: "https://chatkne.firebaseio.com",
      projectId: "mhckv4wz8lb18307ig6f",
      storageBucket: "mhckv4wz8lb18307ig6f.appspot.com",
      messagingSenderId: "356951179120",
      appId: "1:356951179120:web:478e5c01cda283cadf99b5"
    })
  }
}).$mount('#app')
