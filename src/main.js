import { createApp } from 'vue'
import App from './App.vue'
import VueOverflowScroll from 'vue-overflow-scroll'
import router from './router'

createApp(App).use(VueOverflowScroll).use(router).mount('#app')
