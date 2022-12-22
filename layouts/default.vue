<template>
  <div style="position: relative;">
    <Preloader /> 
    <HeaderTop />
    <HeaderBot />
    <Nuxt /> 
    <Footer />
    <Message />
    <Menu />

  </div>
</template>

<script>


export default {
  components: {
    HeaderTop:() =>  import ("@/components/HeaderTop") ,
    HeaderBot:() =>  import ("@/components/HeaderBot") ,    
    Message:() =>  import ("@/components/Message") ,
    Footer:() =>  import ("@/components/Footer") ,
    Menu:() =>  import ("@/components/Menu") ,
    Preloader:() =>  import ("@/components/Preloader") ,
  },
}  
</script>