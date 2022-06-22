import '@babel/polyfill'
import 'mutationobserver-shim'
import { createApp } from 'vue'
import router from "./router"
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')
