import { createApp } from 'vue';

// Root App
import App from './App.vue';

// Base App
import BaseCard from './components/UI/BaseCard.vue'; 
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);

// Add Global Components
app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.component('BaseDialog', BaseDialog);

app.mount('#app');