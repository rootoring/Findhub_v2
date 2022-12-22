<template>
	<section class="subscribe">
		<div></div>
		<img src="/img/ultrabook-dell-xps-15-ios-computer.jpg" alt="#" /> 
		<form>
			<h2>Хотите быть в курсе всех событий?</h2> 
			<input placeholder="findhub@findhub.ru" type="email">
		</form>
	</section>
</template>

<script>
	export default{
		name:'Subscribe',
	}
</script>

<style scoped lang="scss">
	.subscribe{
		width:100%;
		display:flex;
		position: relative;
		justify-content: center;
		align-items:center;
		height:250px;
		margin-top:30px;
		div{
			width:100%;
			height:100%;
			position: absolute;
			left:0;
			top:0;
			background:#000;
			opacity:0.5;
			z-index:1;
		}
		img{
			width:100%;
			height:100%;
			position: absolute;
			left:0;
			top:0;
			object-fit:cover;
			object-position:center;
		}
		form{
			width:50%;
			z-index:1;
			background:inherit;
			padding:0px;
			flex-direction:column;
			display:flex;
			align-items:center;
			h2{
				z-index:1;
				font-size:24px;
				color:#fff;
				margin-bottom:30px;
				font-weight:500;
			}
			input{
				padding:18px;
				width:100%;
				margin:0px;
				font-size:16px;
				border:2px solid #fff;
				transition:.3s all;
				&:focus{
					border:2px solid #00d1a0;
				}
			}
		}
	}
</style>