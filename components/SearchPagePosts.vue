<template>
  <div class="tree_posts_contaner">
    <h3 class="tree_posts_title">Рекомендуем к прочтению</h3>
    <ul class="three__posts__ul">		
      <li v-for="post,index of topPosts">
        <nuxt-link class="post__img" :to="{name:'posts-id', params:{id:`${post._id}`}}">
          <div class="hidden__wrapper">
            <div><span>Читать</span></div>
          </div>
          <img :src="`/img/${post.imageUrl}`" alt="#">
        </nuxt-link>
        <div class="post__content">
          <nuxt-link :to="{name:'posts-id', params:{id:`${post._id}`}}">
            <h2>{{post.title}}</h2>
          </nuxt-link>
          <span>{{post.data}}</span>
        </div>  
      </li> 
    </ul>
  </div>
</template>

<script>

  import { mapGetters, mapActions } from 'vuex'

  export default{
   name:'ThreePosts',

   computed:{ 
    ...mapGetters({ 
      topPosts: 'posts/targetPosts',  
    })     
  },

  methods:{
    ...mapActions({ 
      getThreePosts: 'posts/getTargetPosts', 
    }),	
  },
  
  async fetch(){
    await this.getThreePosts();
  },

}

</script>

<style scoped lang="scss" >
  .tree_posts_contaner{
    width: 100%;
    background: #eff1f2e9;
    padding: 20px 10px;
    transition: all .5s ease;
    border-radius: 5px;
    &:hover{
      background: #eff1f28d;
    }
    h3{
      color: #00d1a0;
      font-size: 28px;
      font-weight: 500;
      padding: 5px 0px 30px 10px;
    }
    .three__posts__ul{
      display: flex;
      width: 100%;
      justify-content: center;
      @media(max-width:768px){
        flex-direction: column;
      }
      li+li{
        margin-left: 30px;  
        @media(max-width:768px){
          margin: 30px 0px 0px 0px ;
        }
      }
      li{
        width:30%;
        display:flex;
        background:#262626;
        border-radius:10px;
        overflow:hidden;
        animation:none;
        flex-direction:column;
        &:hover{
          animation: animate_pulse 1.5s infinite;
        }
       
        @media(max-width:768px){
          width: 80%;
          align-self: center;
        }    
        &:hover .hidden__wrapper{
          opacity:1 !important;
        }
        &:hover .hidden__wrapper>div{
          transform:scale(1);
        }
        .post__img{
          width:100%;
          position:relative;  
          height:inherit; 
          height:200px;  
          img{
            width:100%;
            object-fit: cover;
            height:200px;
          }
        }
        .post__content{   
          height:100%;
          padding:15px 10px 10px 15px;
          width:100%;
          @media(max-width:1170px){
            padding:30px 20px 30px 20px;
          }
          h2{
            font-size:18px;
            color: #00d1a0;
            margin-bottom:15px;
            letter-spacing:1.6px;
            line-height:25px;
            @media(max-width:768px){
              font-size:16px;
              margin-bottom:10px;
            }
          }
          span{
            font-size:13px;
            color:#cfd0d1bb;
            @media(max-width:768px){
              font-size:14px;
            }
          }
        }
      }
    }
  }  
</style>