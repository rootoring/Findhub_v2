<template>
  <header class="header">
    <div class="conteiner">
        <nuxt-link  to="/">
            <div class="logo">
                Find<span>hub</span>
            </div>
        </nuxt-link>    
        <div class="auth">
            <nuxt-link v-if="!$auth.loggedIn" to="/auth">
                <i class="fas fa-user-alt"></i>
                <span class="text">Вход</span>
            </nuxt-link>
            <nuxt-link v-else to="/profile">
                <i class="fas fa-user-alt"></i>
                <span class="text">{{ $auth.user.name }}</span>
            </nuxt-link>         
        </div>
    </div>    
  </header>
</template>

<script>

import { mapGetters } from 'vuex'
    
export default {
  name: 'HeaderTop',
  computed:{
    ...mapGetters({
        user:'login/user',
    })
  },
}
</script>

<style scoped lang="scss">
.auth{
    font-size:25px;
}
.conteiner{
    align-items:center;
}
a{
    color:#262626;
    transition: .3s all;
    &:hover{
        color:#4faab3;
    }
    .text{
        @media(max-width:768px){
            display: none;
        }
    }
}
</style>
