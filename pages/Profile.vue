<template>
	<section>
		<div class="profil">
			<h2 class="profil__name">{{user.name}}</h2>
			<div class="profil__posts">
				<nuxt-link  :to="{name:'posts-id', params:{id:`${post._id}`}}" class="profil__post" v-for="post,index of posts">
					{{post.title}}
					<span @click.prevent="deleteFavoritePost({ postId: post._id, userId: $auth.user });" class="profil__post__del">
						<i class="fas fa-trash-alt"></i>
					</span>
				</nuxt-link>
			</div>
			<button class="profil__button" @click="exit()">Выйти</button>
		</div>
	</section>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {			
  name: 'Profile',
  middleware:['auth'],
  computed:{
  	...mapGetters({
  		user:'login/user',
  		posts:'posts/posts',
  	})
  },
  methods:{
  	...mapActions({
  		logout:'login/logout',
  		getFavoritePost:'posts/getFavoritePost',
  		deleteFavoritePost:'posts/deleteFavoritePost',
  	}),
  	async exit(){
  		await this.logout();
  		this.$router.push('Auth')
  	},
  },
	async mounted(){
		await this.getFavoritePost({ idUser: this.$auth.user});
		window.scrollTo(0,0);
	},
	head() {
    return {
      title: "Профиль | Findhub",
    }
  }
}
</script>

<style scoped lang="scss">
.profil{
	display:flex;
	flex-direction:column;
	align-items:flex-start;
	max-width:1400px;
	min-height:100vh;
	margin:0px auto;
	@media(max-width:768px){
		align-items:center;
	}
	&__name{
		margin:30px 20px;
		font-size:40px;
		font-weight:500;
	}
	&__posts{
		display:flex;
		flex-wrap: wrap;
		width:100%;
		gap:30px;
		margin:0px 20px;
		@media(max-width:768px){
			margin:0px 0px;
			padding:0px 20px;
		}
	}
	&__button{
		width:200px;
		height:40px;
		margin:30px 20px;
	}
	&__post{
		width:300px;
		height:140px;
		position: relative;
		background:#262626;
		color:#fff;
		display:flex;
		text-align:center;
		align-items:center;
		justify-content:center;
		font-size:20px;
		border-radius:3px;
		transition:.3s all;
		@media(max-width:768px){
			width:100%;
		}
		&:hover{
			box-shadow:0px 0px 18px #000;
		}
		&:hover &__del{
			opacity:1;
			visibility:visible;
		}
		&__del{
			transition:.3s all;
			position: absolute;
			right:-10px;
			top:-10px;
			font-size:18px;
			border-radius:5px;
			color:#fff;
			background:red;
			padding:10px;
			opacity:0;
			visibility:hidden;
			&:hover{
				transform:scale(1.2);
			}
		}
	}
}
</style>