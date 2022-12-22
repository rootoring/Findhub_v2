<template>
  <section :class=" `header__nav ${headerScroll ? 'activeScroll' : ''}` ">
    <nav class="conteiner">
      <div @click="toogleMenu(true)" class="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>  
      <ul>
        <li>
          <nuxt-link class="add-elem" :to="{ path:`/pages/1`}">
            Все посты 
          </nuxt-link>   
        </li>
        <li @mouseout="modalRemove(key, $event)" v-for="category,key of categories" :key="key">
          <nuxt-link
            @mouseover.native="modalAdd(key)" 
            :to="{name:`category-id`, params:{id:category._id}}" 
            class="add-elem">
            {{category.title}} 
            <i class="fas fa-arrow-down"></i>
          </nuxt-link>
          <NavModalWindow 
            @transitionend.native="childListTransition(key)"
            :class="{
              active:modalActive[0] === key && modalActive[1] ? true : false,
              child :modalActive[0] === key && modalActive[2] ? true : false,
            }"
            v-if="category.childCategories.length > 0" 
            :childCategories="category.childCategories" 
          />
        </li>
      </ul>
      <div>
        <nuxt-link :to="{name:`Search`}"><i class="fas fa-search"></i></nuxt-link>
        <a class="telegram" href="https://t.me/findhubru"><i class="fab fa-telegram-plane"></i></a>
        <a class="instagram" href="https://www.instagram.com/findhub.ru/"><i class="fab fa-instagram"></i></a>
      </div>
    </nav>
  </section>
</template>

<script>

  import { mapGetters, mapActions, mapMutations } from "vuex"   
  
  export default {
    name: 'HeaderBot',
    components:{ NavModalWindow:() =>  import ("@/components/NavModalWindow") },
    data(){
      return{
        headerScroll:false,
        modalActive:[-1, false, false],
      }
    },
    methods:{
      ...mapMutations({
        toogleMenu:'main/toogleMenu',
      }),
      ...mapActions({
        fetchCategories:'category/fetchCategories',
      }),
      modalAdd(index){
        this.modalActive = [index, true, false]
      },
      modalRemove(index, event){
        if(event.currentTarget.contains(event.toElement)){
          return
        }else{
          this.modalActive = [-1, false, false]
        }
      },
      childListTransition(){
        this.modalActive[2] = true
        this.modalActive = JSON.parse(JSON.stringify(this.modalActive))
      },
      scrollNav(){
        window.addEventListener('scroll', () => {
          if(window.scrollY > 200){ 
            this.headerScroll = true;
          }else{ 
            this.headerScroll = false;
          } 
        });
      }
    },
    computed: {
      ...mapGetters({
        categories:'category/categories',
      }),      
    },
    async fetch(){
      await this.fetchCategories();
    },
    mounted(){
      this.scrollNav()
    },

  }
</script>

<style scoped lang="scss">
  .conteiner{
    align-items:center;
  }
  .header__nav.activeScroll{ 
    position: sticky;
    top: 0;
    height: 50px;
    z-index: 4;
    a{
      font-size: 18px;
    }
  }
  .header__nav{
    width:100%;
    padding:0px 20px 0px 20px;
    background:#262626;
    box-shadow:0px 3px 5px #000;
    color:#fff;
    height:80px;
    transition: .3s all;
    top: -80px;

    nav{
      display:flex;
      height:100%;
      .telegram{
        height:100%;
        color:#0088cc;
        margin:0px 15px;
        transition: .3s all;
      }
      .instagram{
        height:100%;
        color:#e1306c;
        transition: .3s all;
      }
      ul{
        display: flex;
        @media(max-width:1170px){
          display:none;
        }
        li{
          position:relative;
          margin-right:40px; 
          padding:10px 0px;
          &:last-child{
            margin-right:0px;
          }
          a{
            height:100%;
            color:#fff;
            font-size:22px;
            transition: .3s all;
            &:hover{
              color:#4faab3;
            }
            &:hover i{
              color:#4faab3;
            }
            &.active{
              color:#4faab3;
            }
            i{
              font-size:14px;
              &.active{
                color:#4faab3;
                transform:rotate(90deg);
              }
            }
          }
          
        }
      }
      i{
        font-size:30px;
        color:#fff;
        transition:.3s all;
        &:hover{
          color:#4faab3;
        }  
      }
    }
  }
</style>
