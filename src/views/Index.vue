<template>
	<div class="container">
		<div class="row mb-3">
			<div class="col-12">
				<h1 class="text-center">Json Placeholder</h1>
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-12 col-sm-6 col-md-4 col-xl-3" v-for="user in users" :key="user.id">
				<div class="shadow-sm card mb-3">
					<img class="card-img-top" src="../assets/user.svg">
					<div class="card-body">
						<strong class="card-text">Name</strong>
						<p class="card-text">{{user.name}}</p>
						<strong class="card-text">E-mail</strong>
						<p class="card-text">{{user.email}}</p>
						<strong class="card-text">Website</strong>
						<p class="card-text">{{user.website}}</p>
					</div>
					<div class="card-footer text-right bg-transparent">
						<button class="btn btn-sm btn-success" @click="$router.push('user/' + user.id)">see more</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				users: {},
			}
		},
		mounted() {
			this.getAllUsers()
		},
		methods: {
			getAllUsers(){
				window.axios.get(window.RestAPI + 'users')
				.then((response) => {
					if(response.status == 200) {
						this.users = response.data
					}
				})
			}
		},
	}
</script>