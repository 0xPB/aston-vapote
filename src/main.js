import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 🔁 Gère la redirection du fichier 404.html (SPA fallback GitHub Pages)
const redirect = sessionStorage.redirect;
if (redirect) {
    sessionStorage.removeItem('redirect');
    router.replace(redirect);
}

createApp(App)
    .use(router)
    .mount('#app');
