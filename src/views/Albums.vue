<template>
	<div class="wrapper d-block d-md-flex">
		<UserMenu class="d-none d-md-block" :userId="userId" :nameUser="user.name"></UserMenu>
		<Navbar class="d-md-none" :userId="userId" :nameUser="user.name"></Navbar>
		<div class="container py-5">
			<div class="row align-items-center">
				<div class="col-12 col-sm-6 col-xl-4 mb-3" v-for="album in albums" :key="album.id">
					<div class="card shadow-sm" style="cursor: pointer;" @click="$router.push('photos/' + album.id)">
						<div class="card-body bg-folder d-flex justify-content-between align-items-center">
							<i class="fas fa-folder mr-3"></i><p class="card-text mr-3 mb-0">{{album.title}}</p><i class="fas fa-chevron-right"></i>
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
				albums: {},
			}
		},
		mounted() {
			this.getUser()
			this.getAllUserAlums()
		},
		methods: {
			getAllUserAlums(){
				window.axios.get(window.RestAPI + 'albums/?userId=' + this.userId)
				.then((response) => {
					if(response.status == 200) {
						this.albums = response.data
					}
				})
			},
			getUser(){
				window.axios.get(window.RestAPI + 'users/' + this.userId)
				.then((response) => {
					if(response.status == 200) {
						this.user = response.data
					}
				})
			},
		},
		components:{
			UserMenu,
			Navbar
		}
	}
</script>