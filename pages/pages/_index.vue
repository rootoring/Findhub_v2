<template>
  <PostsList routeToPagination="pages" /> 
</template>

<script>
  
export default {  
  name: 'Main',
  components: {
    PostsList:() =>  import ("@/components/PostsList"),
  },
  mounted(){
    window.scrollTo(0,0);
  },
  head() {
    return {
      title: "Все посты | Findhub",
    }
  }
}
</script>

<style scoped lang="scss">

</style>