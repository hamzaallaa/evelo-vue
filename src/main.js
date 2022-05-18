import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import "@/assets/css/main.css"
import "../src/assets/index.css"
import * as featherIcons from "@zhuowenli/vue-feather-icons";

const app=createApp(App).use(store).use(router)
for (const [key, icon] of Object.entries(featherIcons)) {
  icon.props.size.default = "24";
  app.component(key, icon);
}
app.mount('#app')