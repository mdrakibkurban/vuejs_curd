import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/routes.js'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//sweetalert2
import Swal from 'sweetalert2'
window.Swal = Swal
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
window.Toast = Toast
//sweetalert2

createApp(App).use(router).mount('#app')
