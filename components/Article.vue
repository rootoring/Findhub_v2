<template>
  <article class="pulse">
    <nuxt-link class="post__img" :to="{name:'posts-id', params:{id:`${post.uid}`}}">
      <div class="hidden__wrapper">
        <div><span>Читать</span></div>
      </div>
      <img :src="`/img/${post.imageUrl}`" alt="#">
    </nuxt-link>
    <div class="post__content">
      <nuxt-link :to="{name:'posts-id', params:{id:`${post.uid}`}}">
        <h2>{{post.title}}</h2>
      </nuxt-link>
      <span>{{post.data}}</span>
      <p>{{post.description.slice(0,250)+'...'}}</p>
      <!-- <p>{{post.description}}</p> -->
    </div>  
  </article>
</template>

<script>
    
export default {
  name: 'Article',
  props:[
    'postCharacters',
  ],
  data(){
    return{
      post: this.postCharacters,
    }
  }
}
</script>

<style scoped lang="scss">

  article{
    width:100%;
    display:flex;
    background:#262626;
    color:#fff;
    border-radius:10px;
    margin-bottom:30px;
    overflow:hidden;
    transition: .3s all;
    @media(max-width:768px){
      flex-direction:column;
    }
    &:hover .hidden__wrapper{
      opacity:1 !important;
    }
     &:hover .hidden__wrapper>div{
      transform:scale(1);
    }
    .post__img{
      width:40%;
      position:relative;  
      height:inherit;   
      @media(max-width:768px){
        width:100%;
        height:200px;
      }
      img{
        width:100%;
        object-fit: cover;
        height:100%;
      }
    }
    .post__content{
      width:60%;
      height:100%;
      padding:40px 30px 40px 30px;
      @media(max-width:1170px){
        padding:30px 20px 30px 20px;
      }
      @media(max-width:768px){
        padding:20px 20px 20px 20px;
        width:100%;
      }
      h2{
        font-size:22px;
        color: #00d1a0;
        margin-bottom:30px;
        letter-spacing:1.6px;
        line-height:25px;
        @media(max-width:768px){
          font-size:20px;
          margin-bottom:20px;
        }
      }
      span{
        font-size:18px;
        color:#cfd0d1;
        @media(max-width:768px){
          font-size:16px;
        }
      }
      p{
        margin-top: 30px;
        font-size:16px;
        color:#cfd0d1;
        letter-spacing:1.5px;
        line-height:18px;
        @media(max-width:768px){
          font-size:14px;
          margin-top: 20px;
        }
      }
    }
  }

</style>
