// Style
import './assets/main.css'
import 'vuetify/styles'

// Modules
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Config
const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    display: {
        mobileBreakpoint: 'md',
        thresholds: {
            xs: 0,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
        },
    },
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
