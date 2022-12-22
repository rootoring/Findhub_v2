<template>
	<section>
		<div class="auth wrapper">
			<button @click="svap()" class="auth__button">Есть аккаунт?</button>
			<div @mousemove="parallax($event, 'reg')" class="auth__item login">
				<form ref="login">
					<h2>Вход</h2>
					<input v-model="signInData.email" placeholder="Email" type="email"/>
					<input v-model="signInData.password" placeholder="Пароль" type="password"/>
					<button @click.prevent="login(signInData)" type="submit">Войти</button>
				</form>
			</div>
			<div @mousemove="parallax($event, 'login')" class="auth__item register active">
				<form ref="reg">
					<h2>Регистарция</h2>
					<input v-model="signUpData.name" placeholder="Ваше имя" type="text"/>
					<input v-model="signUpData.email" placeholder="Ваш email" type="email">
					<input v-model="signUpData.password" placeholder="Пароль" type="password"/>	
					<button @click.prevent="signUp(signUpData)" type="submit">Зарегистрироваться</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {			
  name: 'Auth',
  middleware:['auth'],
  data(){
  	return{
  		signInData:{
  			email:'',
  			password:'',
  		},
  		signUpData:{
  			name:'',
  			email:'',
  			password:'',
  		},
  	}
  },
  computed:{
  	...mapGetters({
  		user:'login/user',
  		posts:'posts/posts',
  	})
  },
  methods:{
  	...mapActions({
  		signUp:'login/signUp',
  		signIn:'login/signIn',
  	}),
  	async login(data){
  		await this.signIn(data);
  		this.$router.push('Profile')
  	},
  	parallax(event, block){
  		this.$refs[block].style.transform = `translateX(${ event.clientX * 20 / 1000 }px) translateY(${ event.clientY * 20 / 1000 }px)`;
  	},
  	svap(){
  		document.querySelector('.register').classList.toggle('active');
			document.querySelector('.login').classList.toggle('active');
  	}
  },
	mounted(){
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
.wrapper{
	padding:0px ;
}
.auth{
  width:100%;
  height:100vh;
  display:flex;
  overflow: hidden;	
  @media(max-width:1170px){
  	justify-content:center;
  }
}
.auth__button{
	z-index:1;
	height:40px;
	margin-top:40px;
	background:#00d1a0;
	color:#fff;
	display:none;
	@media(max-width:1170px){
		display:block;
	}
}
.auth__item{
  width:50%;
  height:100%;
  display:flex;
  align-items:center;
  flex-direction: column;
  justify-content:center;
  transition:.1s all;
  form{
		width:60%;
		transition:.1s all;
	  @media(max-width:768px){
			width:90%;
		}
	}
}  
.auth__item:hover{
	background:#4faab3;
	box-shadow:inset 0px 0px 30px #32465c;
}

.auth__item:hover form{
	transform: scale(1.1) !important;
}
input{
	font-size:16px;
	padding:10px 10px 10px 15px;
}
h2{
	margin-bottom:30px;
	font-size:32px;
	font-weight:300;
}
button:hover{
	background:#00d1a0;
	color:#fff;
}
button{
	background:inherit;
	transition:.3s all;
	color:#00d1a0;
	padding:10px 10px 10px 15px;
	border:1px solid #00d1a0;
}

.register{
	@media(max-width:1170px){
		width:100%;
		position: absolute;
		right:-100%;
		top:0px;
		&.active{
			right:0%;
		}
	}
}
.login{
	@media(max-width:1170px){
		width:100%;
		position: absolute;
		left:-100%;
		top:0px;
		&.active{
			left:0%;
		}
	}
}
</style>