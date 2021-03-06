import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/icons'

import VCharts from 'v-charts'

import { handleTree } from './util/util'
Vue.prototype.handleTree = handleTree

Vue.use(VCharts)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
