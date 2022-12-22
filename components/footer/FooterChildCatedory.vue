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
		display:flex;
		flex-direction: column;

		@media(max-width:600px){
			display: none;
		}

		li{
			color:#838E9A;
			font-size:13px;
			font-weight:300;
			padding:10px 0px;
			cursor:pointer;
			&:hover{
				color:#4faab3;
			}
			&:last-child{
				margin-bottom:0px;
			}

		}
	}
</style>