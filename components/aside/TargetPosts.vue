<template>
	<ul class="target_slider">
		<div ref="wrapper" class="wrapper1">
	  	<li v-for="post,index of targetPosts">
	  		<div class="target_slider_content">
	  			<nuxt-link tag="h3" :to="{name:'posts-id', params:{id:`${post._id}`}}">{{post.title}}</nuxt-link>
	  			<p>{{post.description.slice(0,textLength)+'...'}}</p>
	  			<!-- <p>{{post.description}}</p> -->
	  		</div>
	  		<div class="hidden_wrapper"></div>
	  		<img :src="`/img/${post.imageUrl}`" :alt="post.alt">
	  	</li> 
	  </div>
	  <div @click="slideLeft()" class="arrow arrow_left">
	  	<i class="fas fa-arrow-alt-circle-left"></i>
	  </div>
	  <div @click="slideRight()" class="arrow arrow_right">
	  	<i class="fas fa-arrow-alt-circle-right"></i>
	  </div>	
  </ul>
</template>

<script>

	import { mapActions, mapGetters } from 'vuex'

	export default{
		name:'TargetPosts',
		data(){
			return {
				currentSlide:1,
				widthSlide:100,
				scrooling:0,
				timeoutHandler:null,
			}
		},
		props:['textLength'],
		computed:{
			...mapGetters({
				category:'category/category',
				targetPosts:'posts/targetPosts'
			}),
			slides(){
				return this.targetPosts.length;
			},
			goLeft(){
				return this.scrooling - this.widthSlide;
			},
			goRight(){
				return this.scrooling + this.widthSlide
			}
		},
		methods:{
		  ...mapActions({
		  	getTargetPosts:'posts/getTargetPosts',
		  }),	
		 	slideRight(){
		 		if(this.currentSlide === this.slides) return false;
		 		this.$refs.wrapper.style.transform = `translate(-${this.goRight}%)`;
		 		this.scrooling += this.widthSlide;
		 		this.currentSlide += 1;
		 		return true
		 	},
		 	slideLeft(){
		 		if(this.currentSlide === 1) return false;
		 		this.$refs.wrapper.style.transform = `translate(-${this.goLeft}%)`;
		 		this.scrooling -= this.widthSlide;
		 		this.currentSlide -= 1;
		 		return true
		 	},	
		 	slideTimeout(){
		 		this.timeoutHandler = setTimeout(() => {
		 			let isTrue = this.slideRight();
		 			if(!isTrue){
		 				this.$refs.style.wrapper.transform = `translate(-${0}%)`;
		 				this.scrooling = 0;
		 				this.currentSlide = 1;	
		 				clearTimeout(this.timeoutHandler);
		 			}
		 			this.slideTimeout();	
		 		},6000)
		 	},
		},
		async fetch(){
			if(this.category._id){
				await this.getTargetPosts(this.category._id);	
			}else{
				await this.getTargetPosts('all');
			}
		},
	}

</script>

<style scoped lang="scss" >
	.arrow{
		position:absolute;
		z-index:4;
		height:100%;
		width:35px;
		color:#fff;
		font-size:18px;
		display:flex;
		justify-content:center;
		align-items:center;
		cursor:pointer;
		transition:.3s all;
		&:hover{
			background:rgba(0,0,0,0.6);
			box-shadow:0px 0px 15px #000;
		}
		&_left{
			left:0px;
			top:0px;
		}
		&_right{
			top:0px;
			right:0px;
		}
	}
	.wrapper1{
		height:100%;
		display:flex;
		transition:.3s all;
	}
	.target_slider{
		width:100%;
		height:350px;
		position:sticky; 
		top:100px;
		border-radius:8px;
		overflow:hidden;
		li{
			min-width:100%;
			max-width:100%;
			height:inherit;
			position:relative;
			padding:0px 35px 30px 35px;
			img{
				left:0px;
				top:0px;
				position:absolute;
				width:100%;
				height:100%;
				object-fit:cover;
				z-index:1;
				object-position:center;
			}
			.hidden_wrapper{
				left:0px;
				top:0px;
				position:absolute;
				width:100%;
				height:100%;
				z-index:2;
				background:linear-gradient(to top, black 0%, transparent 100%);
				backdrop-filter: blur(2px);
			}
			.target_slider_content{
				z-index:3;
				height:100%;
				display:flex;
				color:#fff;
				position:relative;
				flex-direction:column;
				justify-content:flex-end;
				h3{
					font-size:19px;
					margin-bottom:10px;
					cursor:pointer;
					transition:.3s all;
					&:hover{
						color:#00d1a0;
					}
				}
				p{
					font-size:15px;
				}
			}
		}
	}
</style>