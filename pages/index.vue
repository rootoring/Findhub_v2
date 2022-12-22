<template>
  <div class="wrapper"> 
    <HomePageHeader />
    <HomePageRecommend />
    <Subscribe />

  </div>
</template>

<script>

  export default {  
    name: 'Main',
    components:{
      HomePageHeader:() => import('@/components/default/HomePageHeader'),
      HomePageRecommend:() => import('@/components/default/HomePageRecommend'),
      Subscribe:() => import('@/components/default/Subscribe')
    },
    mounted(){
      window.scrollTo(0,0);
    },
    head() {
      return {
        title: "Главная страница | Findhub",
      }
    }
  }

</script>

<style scoped lang="scss">
  .wrapper{ 
    padding:0px; 
  }
  .hidden__wrapper{ 
    background:rgba(0, 0, 0, .6); 
  }
</style>