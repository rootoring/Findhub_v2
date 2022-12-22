<template>
  <div class="wrapper">
    <main class="conteiner">
      <section>
        <h1>Поиск по сайту</h1>
        <div class="search">
          <div class="search_row">
            <div class="search_input">
              <input v-model="find" placeholder="Поиск..." type="text"></input>
              <i class="fas fa-search"></i>
            </div>
          </div>
        </div>
        <Article v-for="post of findPosts" :key="post._id" :postCharacters="post" />
        <div class="undefind" v-if="findPosts.length === 0 && find.trim() != '' ">
          По вашему запросу ничего не найдено :(
        </div>
        <div class="undefind" v-if="findPosts.length === 0 && find.trim() === '' ">
          Найдите статьи на интерисующие вас темы
        </div>
        <br/>
        <br/>
        <SearchPagePosts /> 
      </section>
      <Aside />
    </main> 
  </div>
</template>

<script>

  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'HeaderBot',
    data(){
      return{
        find:'',
      }
    },
    components:{
      Article:() =>  import ("@/components/Article"),
      Aside:() =>  import ("@/components/Aside"),
      SearchPagePosts:() =>  import ("@/components/SearchPagePosts"),
    },
    computed: {
      ...mapGetters({
        posts: 'posts/posts'
      }),
      findPosts(){
        if(this.find.trim() === ''){
          return [];
        }else{
          return this.posts.filter(item => {
            return item.title.toLowerCase().includes(this.find.toLowerCase());
          });
        }
      }
    },
    methods: {
      ...mapActions({
        getFindPosts: 'posts/getFindPosts'
      })
    },
    mounted () {
      this.getFindPosts()
    }
  }
</script>

<style scoped lang="scss">
  .undefind{
    font-size:20px;
    font-weight:700;
  }
  .search{
    display:flex;
    flex-direction:column;
    margin-bottom:20px;
    &_row{
      width:100%;
      .search_input{
        position:relative;
        width:100%;
        input{
          width:100%;
          padding:10px 10px 10px 40px;
          border:2px solid #696969;
          font-size:18px;
          transition:.3s all;
          &:focus{
            border-radius:5px;
            border:2px solid #00d1a0;
          }
        }
        i{
          position:absolute;
          left:10px;
          font-size:20px;
          color:#00d1a0;
          top:calc(50% - 10px);
        }
      }
    }
  }
</style>
