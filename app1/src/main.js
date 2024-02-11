import { createApp } from 'vue'
import './style.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import PrimeVue from 'primevue/config';
import App from './App.vue'

const app = createApp(App);
app.use(PrimeVue, {
});
app.mount('#app')
