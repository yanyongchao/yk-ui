import { createApp } from 'vue'
import App from './App.vue'
// import { Button } from '../../lib/main.js'
import './index.css'

const arr: Array<number> = [1]

createApp(App)
  // .use(Button)
  .mount('#app')
