<template>
  <PostsList :isCategory="true" routeToPagination="category-id-pages" /> 
</template>

<script>

import { mapGetters } from 'vuex'

export default {  
  name: 'Category',
  components:{ PostsList:() =>  import ("@/components/PostsList"), },
  computed:{
    ...mapGetters({
      category: 'category/category',
    }),  
  },
  mounted(){
    window.scrollTo(0,0);
  },
  head() {
    return {
      title: this.category.title + " | Findhub",
    }
  }
}
</script>