import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import CardItem from '@/components/card-item/CardItem.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('card-item', CardItem)

app.mount('#app')
