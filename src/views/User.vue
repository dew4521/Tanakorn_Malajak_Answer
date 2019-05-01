<template>
	<div class="wrapper d-block d-md-flex">
		<UserMenu class="d-none d-md-block" :userId="userId" :nameUser="user.name"></UserMenu>
		<Navbar class="d-md-none" :userId="userId" :nameUser="user.name"></Navbar>
		<div class="container">
			<div class="row py-5">
				<div class="col-12 mb-3" v-for="(post, index) in posts" :key="post.id" :index="index" style="transition: all 0.3s">
					<div class="card shadow-sm">
						<div class="card-header">
							{{post.title}}
						</div>
						<div class="card-body">
							<p class="card-text">{{post.body}}</p>
							<div class="row mb-3 collapse multi-collapse" :id="'comment'+post.id" v-for="(comment, commentIndex) in comments[index]" :key="comment.id" :index="commentIndex">
								<div class="col-12 col-md-10" v-if="(commentIndex % 2) == 0">
									<div class="card shadow-sm">
										<div class="card-header">
											{{comment.name}}
										</div>
										<div class="card-body">
											<p class="card-text">{{comment.body}}</p>
											<footer class="blockquote-footer text-right">{{comment.email}}</footer>
										</div>
									</div>
								</div>
								<div class="col-12 col-md-10 offset-md-2" v-else>
									<div class="card shadow-sm">
										<div class="card-header">
											{{comment.name}}
										</div>
										<div class="card-body">
											<p class="card-text">{{comment.body}}</p>
										</div>
									</div>
								</div>
							</div>
							<p class="card-text text-center showcomment" data-toggle="collapse" :href="'#comment'+post.id">Show/Hide Comment</p>
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
				posts: {},
				comments: [],
			}
		},
		mounted() {
			this.getUser()
			this.getAllUserPosts()
		},
		methods: {
			getAllUserPosts(){
				window.axios.get(window.RestAPI + 'posts/?userId=' + this.userId)
				.then((response) => {
					if(response.status == 200) {
						this.posts = response.data
						for(let i = 0; i <this. posts.length; i++){
							this.getAllComments(this.posts[i].id)
						}
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
			getAllComments(postId){
				window.axios.get(window.RestAPI + 'comments/?postId=' + postId)
				.then((response) => {
					if(response.status == 200) {
						this.comments.push(response.data)
					}
				})
			}
		},
		components:{
			UserMenu,
			Navbar
		}
	}
</script>