import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueFire, VueFireFirestoreOptionsAPI } from 'vuefire'
import { firebaseApp } from './firebase/firebase'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
//css propio
import './assets/css/main.css'

const app = createApp(App)

app.use(router)

app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireFirestoreOptionsAPI()
    ]
})

app.mount('#app')
