<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-navbar">
		<div class="navbar-toggler px-0" style="border: unset;">
			<button class="btn px-0 text-white" @click="$router.push('/')"><i class="fas fa-chevron-left mr-3"></i></button>
			<button class="btn" type="button" data-toggle="collapse" data-target="#toggleNavbar" style="border: 1px solid #0091ea;">
				<span class="navbar-toggler-icon"></span>
			</button>
		</div>
		<a class="navbar-brand text-white" href="#" @click="$router.push('/profile/' + userId)">{{nameUser}}</a>

		<div class="collapse navbar-collapse" id="toggleNavbar">
			<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
				<li :class="'nav-item ' + getActive('user')">
					<a class="nav-link" href="" @click="$router.push('/user/' + userId)">Post</a>
				</li>
				<li :class="'nav-item ' + getActive('profile')">
					<a class="nav-link" href="" @click="$router.push('/profile/' + userId)">Profile</a>
				</li>
				<li :class="'nav-item ' + getActive('todo')">
					<a class="nav-link" href="" @click="$router.push('/todo/' + userId)">Todo</a>
				</li>
				<li class="nav-item active" v-if="pathname == 'photos'">
					<a class="nav-link" href="" @click="$router.push('/albums/' + userId)">Albums</a>
				</li>
				<li :class="'nav-item ' + getActive('albums')" v-else>
					<a class="nav-link" href="" @click="$router.push('/albums/' + userId)">Albums</a>
				</li>
			</ul>
		</div>
	</nav>
</template>
<script>
	export default {
		data() {
			return {
				pathname: this.$route.name,
			}
		},
		methods:{
			getActive(menuname){
				if(menuname == this.pathname){
					return 'active'
				}
			}
		},
		props: {
			nameUser: String,
			userId: String,
		}
	}
</script>