<template>
  <div class="wrapper">
    <main class="conteiner">
      <section>
        <h1>{{ title }}</h1>
        <Article v-for="post of posts" :key="post._id" :postCharacters="post" />
        <template v-if='postsPerPage > 1'>
          <Pagination :route="routeToPagination"/>
        </template>
      </section>
      <Aside />
    </main> 
  </div>   
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {  
  name: 'PostsList',
  components: {
    Aside:() =>  import ("@/components/Aside") ,
    Article:() =>  import ("@/components/Article") ,
    Pagination:() =>  import ("@/components/Pagination") ,
  },
  props:['routeToPagination', 'isCategory'],
  data(){
    return {
      title: null,
    }
  },    
  computed:{
    ...mapGetters({
      posts: 'posts/posts', 
      postsPerPage:'posts/postsPerPage',
      category: 'category/category',
    })    
  },
  methods:{
    ...mapActions({
      fetchPosts:'posts/fetchPosts',    
      getPages:'pagination/getPages', 
      fetchCategory:'category/fetchCategory', 
    }),
  },
  async fetch() {
    if(this.isCategory){
      let response = await this.fetchCategory(this.$route.params);
      await this.fetchPosts({ idCat:response.uid, indexPag:this.$route.params.index });
      this.title = response.title 
    }else{
      await this.fetchPosts({ indexPag:this.$route.params.index });
      this.title = 'Все посты' 
    }
    await this.getPages({ index:Number(this.$route.params.index) || 1, length: this.postsPerPage });
  },
}
</script>