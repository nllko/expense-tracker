import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import router from './router'
import PrimeVue from 'primevue/config';
import locale from '../configs/primeVueLocale';

import './assets/tailwind.css'
import './assets/theme.css';
import 'primeicons/primeicons.css'

library.add(fas)

createApp(App)
.component('fa', FontAwesomeIcon)
.use(router)
.use(PrimeVue, {
    locale: locale
})
.mount('#app')
