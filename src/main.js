import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-regular-svg-icons'

library.add(faClock)
// import './style.css'

// Make BootstrapVue available throughout your project

const app = createApp(App)
// app.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// app.use(IconsPlugin)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
