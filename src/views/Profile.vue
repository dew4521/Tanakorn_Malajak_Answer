<template>
	<div class="wrapper d-block d-md-flex">
		<UserMenu class="d-none d-md-block" :userId="userId" :nameUser="user.name"></UserMenu>
		<Navbar class="d-md-none" :userId="userId" :nameUser="user.name"></Navbar>
		<div class="container p-5">
			<div class="form-group row">
				<h4 class="col-12 col-md-3">Biology</h4>
			</div>
			<div class="form-group row">
				<label for="name" class="col-12 col-md-3 col-form-label">Name</label>
				<div class="col-12 col-md-9">
					<p class="form-control text-center bg-transparent border-success text-white">{{user.name}}</p>
				</div>
			</div>
			<div class="form-group row">
				<label for="username" class="col-12 col-md-3 col-form-label">UserName</label>
				<div class="col-12 col-md-9">
					<p class="form-control text-center bg-transparent border-success text-white">{{user.username}}</p>
				</div>
			</div>
			<div class="form-group row">
				<label for="phonenumber" class="col-12 col-md-3 col-form-label">Phone Number</label>
				<div class="col-12 col-md-9">
					<p class="form-control text-center bg-transparent border-success text-white">{{user.phone}}</p>
				</div>
			</div>
			<div class="form-group row">
				<label for="email" class="col-12 col-md-3 col-form-label">E-mail</label>
				<div class="col-12 col-md-9">
					<p class="form-control text-center bg-transparent border-success text-white">{{user.email}}</p>
				</div>
			</div>
			<div class="form-group row">
				<label for="website" class="col-12 col-md-3 col-form-label">Website</label>
				<div class="col-12 col-md-9">
					<p class="form-control text-center bg-transparent border-success text-white">{{user.website}}</p>
				</div>
			</div>
			<div class="form-group row">
				<h4 class="col-12 col-md-3">Address</h4>
			</div>
			<div class="form-group row">
				<label for="suite1" class="col-12 col-md-3 col-form-label">Suite</label>
				<div class="col-12 col-md-9">
					<p class="form-control text-center bg-transparent border-success text-white">{{user.address.suite}}</p>
				</div>
			</div>
			<div class="form-group row">
				<label for="street" class="col-12 col-md-3 col-form-label">Street</label>
				<div class="col-12 col-md-9">
					<p class="form-control text-center bg-transparent border-success text-white">{{user.address.street}}</p>
				</div>
			</div>
			<div class="form-group row">
				<label for="city" class="col-12 col-md-3 col-form-label">City</label>
				<div class="col-12 col-md-9">
					<p class="form-control text-center bg-transparent border-success text-white">{{user.address.city}}</p>
				</div>
			</div>
			<div class="form-group row">
				<label for="zipcode" class="col-12 col-md-3 col-form-label">Zipcode</label>
				<div class="col-12 col-md-9">
					<p class="form-control text-center bg-transparent border-success text-white">{{user.address.zipcode}}</p>
				</div>
			</div>
			<div class="form-group row">
				<h4 class="col-12 col-md-3">Company</h4>
			</div>
			<div class="form-group row">
				<label for="companyname" class="col-12 col-md-3 col-form-label">Company Name</label>
				<div class="col-12 col-md-9">
					<p class="form-control text-center bg-transparent border-success text-white">{{user.company.name}}</p>
				</div>
			</div>
			<div class="form-group row">
				<label for="bs" class="col-12 col-md-3 col-form-label">BS</label>
				<div class="col-12 col-md-9">
					<p class="form-control text-center bg-transparent border-success text-white">{{user.company.bs}}</p>
				</div>
			</div>
			<div class="form-group row">
				<label for="catchphrase" class="col-12 col-md-3 col-form-label">Catch Phrase</label>
				<div class="col-12 col-md-9">
					<p class="form-control text-center bg-transparent border-success text-white">{{user.company.catchPhrase}}</p>
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
		mounted(){
			this.userProfile()
		},
		methods:{
			userProfile(){
				window.axios.get(window.RestAPI + 'users/' + this.userId)
				.then((response) => {
					if(response.status == 200) {
						this.user = response.data
					}
				})
			}
		},
		components: {
			UserMenu,
			Navbar
		}
	}
</script>