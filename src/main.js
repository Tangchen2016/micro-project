import {
  createApp
} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import './assets/style/index.less'
import {
  loadMicroApp,
  start
} from 'qiankun'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')

loadMicroApp([{
  name: 'vue-project',
  entry: '//localhost:3001',
  container: '#app',
}])

start()