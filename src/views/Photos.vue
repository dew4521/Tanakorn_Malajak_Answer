<template>
	<div class="wrapper d-block d-md-flex">
		<UserMenu class="d-none d-md-block" :userId="userId" :nameUser="user.name"></UserMenu>
		<Navbar class="d-md-none" :userId="userId" :nameUser="user.name"></Navbar>
		<div class="container py-5">
			<div aria-label="breadcrumb">
				<ol class="breadcrumb bg-transparent">
					<li class="breadcrumb-item"><a href="" @click="$router.push('/albums/' + user.id)">Albums</a></li>
					<li class="breadcrumb-item active" aria-current="page">{{album.title}}</li>
				</ol>
			</div>
			<div class="row">
				<div class="col-12 col-sm-6 col-lg-4 mb-3" v-for="photo in photos" :key="photo.id">
					<div class="card shadow-sm">
						<img class="card-img-top" :src="photo.thumbnailUrl">
						<div class="card-body">
							<p class="card-text">{{photo.title}}</p>
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
				albumId: this.$route.params.id,
				album: {},
				user: {},
				photos: {},
			}
		},
		mounted() {
			this.getAlbum()
			this.getAllUserPosts()
		},
		methods: {
			getAllUserPosts(){
				window.axios.get(window.RestAPI + 'photos/?albumId=' + this.albumId)
				.then((response) => {
					if(response.status == 200) {
						this.photos = response.data
					}
				})
			},
			getUser(){
				window.axios.get(window.RestAPI + 'users/' + this.album.userId)
				.then((response) => {
					if(response.status == 200) {
						this.user = response.data
					}
				})
			},
			getAlbum(){
				window.axios.get(window.RestAPI + 'albums/' + this.albumId)
				.then((response) => {
					if(response.status == 200) {
						this.album = response.data
						this.getUser()
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