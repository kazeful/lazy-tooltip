import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
app.use(ElementPlus).mount('#app')
