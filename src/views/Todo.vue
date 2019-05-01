<template>
	<div class="wrapper d-block d-md-flex">
		<UserMenu class="d-none d-md-block" :userId="userId" :nameUser="user.name"></UserMenu>
		<Navbar class="d-md-none" :userId="userId" :nameUser="user.name"></Navbar>
		<div class="container py-5">
			<div class="row align-items-stretch">
				<div class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
					<div class="crad shadow-sm">
						<div class="card-header card-green">
							Todo List
						</div>
						<div class="card-body p-0">
							<ul class="todos">
								<li class="todo d-flex align-items-center" @click="updateTodo(todo.id)" v-for="todo in todos" :key="todo.id">
									<p class="todo-title mb-0 checked" :id="'todo' + todo.id" v-if="todo.completed">{{todo.title}}</p>
									<p class="todo-title mb-0" :id="'todo' + todo.id" v-else>{{todo.title}}</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import UserMenu from '../components/UserMenu'
	import Navbar from '../components/Navbar'
	export default {
		data() {
			return {
				userId: this.$route.params.id,
				user: {},
				todos: {},
			}
		},
		mounted() {
			this.getUser()
			this.getAllUserTodo()
		},
		methods:{
			getUser(){
				window.axios.get(window.RestAPI + 'users/' + this.userId)
				.then((response) => {
					if(response.status == 200) {
						this.user = response.data
					}
				})
			},
			getAllUserTodo(){
				window.axios.get(window.RestAPI + 'todos/?userId=' + this.userId)
				.then((response) => {
					if(response.status == 200) {
						this.todos = response.data
					}
				})
			},
			updateTodo(todoId){
				if(document.getElementById('todo' + todoId).classList.value.indexOf('checked') != -1){
					document.getElementById('todo' + todoId).classList.remove('checked')
				}else{
					document.getElementById('todo' + todoId).classList.add('checked')
				}
			}
		},
		components: {
			UserMenu,
			Navbar
		}
	}
</script>