import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App.vue'
import './assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import Index from './views/Index'
import User from './views/User'
import Profile from './views/Profile'
import Todo from './views/Todo'
import Albums from './views/Albums'
import Photos from './views/Photos'

Vue.use(VueRouter)
Vue.config.productionTip = false
window.axios = axios
window.RestAPI = 'https://jsonplaceholder.typicode.com/'

Vue.mixin({
	methods: {
	}
})

const routes = [
	{
		path: '/',
		name: 'index',
		component: Index,
	},
	{
		path: '/user/:id',
		name: 'user',
		component: User,
	},
	{
		path: '/profile/:id',
		name: 'profile',
		component: Profile,
	},
	{
		path: '/todo/:id',
		name: 'todo',
		component: Todo,
	},
	{
		path: '/albums/:id',
		name: 'albums',
		component: Albums,
	},
	{
		path: '/albums/photos/:id',
		name:'photos',
		component: Photos,
	}

]

const router = new VueRouter({ 
	mode: 'history',
	routes
})

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
