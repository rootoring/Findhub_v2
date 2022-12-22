<template>
	<ul class="header__modal">
		<nuxt-link tag="li" v-for="child, key of childCategories" 
		:key="key" :to="{name:'category-id', params:{id:`${child._id}`}}"> 
		{{child.title}}
	</nuxt-link> 
</ul>
</template>

<script>
	export default{
		name:'NavModalWindow',
		props:['childCategories'],
	}
</script>

<style scoped lang="scss">
	.header__modal{
		min-width:250px;
		position:absolute;
		top:60px;
		left:0px;
		display:flex;
		flex-direction: column;
		backdrop-filter: blur(3px); 
		background:rgba(#262626, 0.93); 
		opacity:0;
		z-index:3;  
		transition:.2s ease all;
		visibility:hidden;
		padding:20px 20px;
		box-shadow:0px 0px 10px #000;
		border-top:14px solid #00d1a0;
		border-radius:2px;
		&.active{
			opacity: 1;
			top:40px;
			visibility:visible;
		}
		&.active.child{
			li{
				transition:.1s ease-in-out all; 
				visibility:visible;
				opacity:1;
				top:0px;
			}
		}
		li{
			color:#fff;
			font-size:18px;
			font-weight:500;
			padding:10px 0px;
			white-space:nowrap;
			margin-bottom:10px;
			cursor:pointer;
			opacity:0;
			visibility:hidden;
			position:relative;
			top:10px;
			transition:.1s ease-in-out all; 
			&:hover{
				color:#4faab3;
			}
			&:last-child{
				margin-bottom:0px;
			}
			&.active{
				visibility:visible;
				opacity:1;
				top:0px;
			}
		}
	}
</style>