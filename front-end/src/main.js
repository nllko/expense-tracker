import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/tailwind.css'
import './assets/theme.css'
import router from "@/router";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import PrimeVue from 'primevue/config';
import PrimeVueConfig from "@/plugins/primevue"

library.add(fas);

const pinia = createPinia()
const app = createApp(App)

app.component('fa-icon', FontAwesomeIcon)
app.use(pinia)
app.use(PrimeVue, PrimeVueConfig)
app.use(router)
app.mount('#app')
