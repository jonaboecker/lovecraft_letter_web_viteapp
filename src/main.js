import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const seenAllowed = false;

const app = createApp(App, {
  card1: 1,
  card2: 2,
  card3: 3,
})

app.mount('#app')
