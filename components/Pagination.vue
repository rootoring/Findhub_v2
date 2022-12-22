<template>
	<section class="pag">
		<ul>
			<nuxt-link v-for='page,key of pages' :key='key' 
				:to="{ name:`${route}`, 
					params:{ 
						index:page,
						id:$route.params.id, 
					} 
				}">
				<li>
					{{page}}
				</li>  
			</nuxt-link>
		</ul>
	</section>  
</template>

<script>

import { mapGetters } from 'vuex'  
		
export default {
	name: 'Pagination',
	props:[
		'route',
	],
	computed:{
		...mapGetters({
			pages:'pagination/pages',
		}),  
	}
}
</script>

<style scoped lang="scss">
	.pag{
		width:100%;
		display:flex;
		flex-direction:row;
		justify-content:space-between;
		align-items:center;
		&__arrow{
			padding:20px;
			background:#4faab3;
			font-size:20px;
			color:#fff;
			cursor:pointer;
			transition:.3s all ease;
			border-radius:50%;
			&:hover{
				background:#00d1a0;
				box-shadow:0px 0px 5px #000;
			}
		}
		ul{
			display:flex;
			margin:0px;
			font-size:18px;
			a{
				cursor:pointer;
				color:#fff;
				transition:.3s all ease;
				font-weight:500;
				// text-shadow:4px 4px 3px #4faab3;
				margin-right:15px;
				background:#262626;
				padding:15px;
				border-radius:5px;
				box-shadow:4px 4px 3px #4faab3;
				&:last-child{
					margin-right:0px;
				}
				&:hover{
					box-shadow:10px 10px 1px #00d1a0;
				}
			}
			a.nuxt-link-active{
				box-shadow:10px 10px 1px #00d1a0;
			}
		}
	}
</style>
