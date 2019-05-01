<template>
	<nav id="sidebar">
		<div class="sidebar-header">
			<h5 @click="$router.push('/')" style="cursor: pointer;"><i class="fas fa-chevron-left mr-3"></i>Json Placeholder</h5>
		</div>
		<ul class="list-unstyled components">
			<p>{{nameUser}}</p>
			<li :class="getActive('user')">
				<a @click="$router.push('/user/' + userId)">Post</a>
			</li>
			<li :class="getActive('profile')">
				<a @click="$router.push('/profile/' + userId)">Profile</a>
			</li>
			<li :class="getActive('todo')">
				<a @click="$router.push('/todo/' + userId)">Todo</a>
			</li>
			<li class="active" v-if="pathname == 'photos'">
				<a @click="$router.push('/albums/' + userId)">Albums</a>
			</li>
			<li :class="getActive('albums')" v-else>
				<a @click="$router.push('/albums/' + userId)">Albums</a>
			</li>
		</ul>
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