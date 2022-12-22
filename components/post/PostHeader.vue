<template>
	<div class="single__header"> 
		<div class="hidden__wrapper"></div> 
		<img :alt="post.alt" :src="`/img/${post.image}`" class="single__img"> 
		<div class="single__head"> 
			<span class="single__date">{{post.data}}</span> 
			<h1 class="single__title">{{post.title}}</h1> 
			<div class="single__scroll">  
				<div @click="scrollSection('comments')" data-scroll="comments" class="scroll-single"> 
					<span>{{comments.length}}</span> 
					<i class="fas fa-comment"></i>  
				</div>     
			</div> 
			<button @click.prevent="addFavoritePost({ postId:post._id, userId: $auth.user })"> 
				<i class="fas fa-bookmark"></i> 
				<div></div> 
			</button> 
		</div>   
	</div> 
</template>

<script>

	import { mapActions } from 'vuex'

	export default {
		name:'PostHeader',
		props:{
			post:{
				type:Object,
				default:() => {},
			},
			comments:{
				type: Array,
				default:() =>  [],
			}
		},
		methods:{
			...mapActions({ 
      	addFavoritePost: 'posts/addFavoritePost', 
   	 	}),
			scrollSection(id){
				document.getElementById(id).scrollIntoView({
					block:"start",
					behavior: "smooth"
				});
			},
		}
	}
</script>