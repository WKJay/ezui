import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.scss'
import './lib/ez.scss'
import './assets/iconfont.js'
import 'github-markdown-css'
import MarkDown from './components/markdown.vue'



const app = createApp(App)
app.use(router)
app.mount('#app')
app.component("MarkDown", MarkDown)
