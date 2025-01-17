import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar';
import router from './router'

import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass'

const app = createApp(App)

app.use(router);
app.mount('#app');
app.use(Quasar, {
    plugins: {},
  });
