<template><!-- eslint-disable no-mixed-spaces-and-tabs -->
	<footer class="footer">
		<span class="footer-line"></span>
		<div class="conteiner">
			<div class="logo-category">
				<div class="logo-seti">
					<nuxt-link  to="/">
						<div class="logo">
							Find<span>hub</span>
						</div>
					</nuxt-link>
					<div class="social-logo">
						Наши соцсети:
						<a class="telegram" href="https://t.me/findhubru"><i class="fab fa-telegram-plane"></i></a>
						<a class="instagram" href="https://www.instagram.com/findhub.ru/"><i class="fab fa-instagram"></i></a>
					</div>         
				</div>
				<ul>
					<li>
						<nuxt-link class="add-elem" to="/">
							Все посты
						</nuxt-link>   
					</li>
					<li v-for="category, key of categories" :key="key">
						<nuxt-link :to="{name:`category-id`, params:{id:category._id}}" class="add-elem">
							{{category.title}} 
						</nuxt-link>
						<FooterChildCatedory :childCategories="category.childCategories" />
					</li>
				</ul>
				<ul class="adative">
					<li>
						<nuxt-link class="add-elem" to="/">
							Все посты
						</nuxt-link>   
					</li>
					<li v-for="category, key of categories" :key="key">
						<nuxt-link :to="{name:`category-id`, params:{id:category._id}}" class="add-elem">
							{{category.title}} 
							
						</nuxt-link>

					</li>
				</ul>
			</div>
			<p>
				Проект «FindHub» создан с целью коллекционирования наиболее интересных материалов из различных сфер деятельности.
				Мы не преследуем цель незаконного распространения материалов, поэтому если Вы являетесь правообладателем, сообщите нам о нарушении по указанным здесь контактам.
				<br/>
				<br/>
				© 2021. Авторы проекта: <span>Джабраилов Мурад</span> и <span>Магомедов Залимхан</span> 
				<br/>
				<span>findhub.ru@gmail.com</span>
			</p>	
		</div>
	</footer>
</template>

<script>
	import { mapGetters } from "vuex"


	export default {
		name: 'Footer',
		components:{ FooterChildCatedory: () =>	import ("@/components/footer/FooterChildCatedory") },
		computed: {
			...mapGetters({
				categories:'category/categories',
			}),
		},
	}
</script>

<style scoped lang="scss">	

	.footer{
		display: flex;
		flex-direction: column;
		width:100%;
		background:#262626;

		.footer-line{
			width: 100%;
			height: 4px;
			background:#4faab5;
		}
		.conteiner{
			padding: 20px 10px;
			@media(max-width:925px){
				flex-direction:column;

			}
		}
		.logo-category{
			display: flex;
			justify-content: space-between;
			width: 70%;	
			@media(max-width:925px){
				width: 100%;
			}			

			.logo-seti{
				.social-logo{
					padding: 30px 0;
					color: #cfd0d1;
					@media(max-width:600px){
						padding:15px 0;
					}

					.telegram{
						font-size: 20px;
						height:100%;
						color:#4faab3;
						margin:0px 15px;
						transition: .3s all;
						&:hover{
							color:#0088cc;
						}
					}

					.instagram{
						font-size: 20px;
						height:100%;
						color:#4faab3;
						transition: .3s all;
						&:hover{
							color:#e1306c;
						}        
					}
				}
			}
			
			ul{
				display: flex;
				width: 80%;
				justify-content: space-around;
				font-size: 16px;
				@media(max-width:600px){
					flex-direction:column;
					align-items:flex-end;
					display: none;


				}
				li{
					margin-left: 10px;
				}
			}
			.adative{
				display: none;
				@media(max-width:600px){
					flex-direction:column;
					align-items:flex-end;
					display: flex;

					li{
						margin-top: 10px;
					}
				}			
			}
		}
		a{
			color:#cfd0d5;
		}

		p{
			color: #cfd0d1;
			width: 30%;
			text-align:right;
			font-size:14px;
			line-height:20px;
			margin-left:20px;
			@media(max-width:925px){
				margin-left:0px;
				margin-top:20px;
				width:100%;
			}
			span{
				color:#00d1a0;
			}
		}
	}

</style>
<!-- eslint-enable no-mixed-spaces-and-tabs -->