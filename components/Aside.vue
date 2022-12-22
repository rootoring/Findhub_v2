<template>
  <aside>
    <ul class="aside__block read">
      <div class="aside__title">Популярное</div>
      <li v-for="post, key of popularPosts" :key="key">
        <nuxt-link :to="{name:'posts-id', params:{id:`${post._id}`}}">
          <h3>{{post.title}}</h3>
          <div class="post__atributes">
            <div><i class="fas fa-long-arrow-right"></i></div>
          </div>
          <span class="gradient"></span>
        </nuxt-link>
      </li>
    </ul>
    <TargetPosts :textLength="125" />
  </aside>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Aside',
  components:{
    TargetPosts:() =>  import ("@/components/aside/TargetPosts") 
  },
  computed:{
    ...mapGetters({
      popularPosts:'posts/popularPosts'
    })
  },
  methods:{
    ...mapActions({
      getPopularPost:'posts/getPopularPost',
    })
  },
  async fetch(){
    await this.getPopularPost();
  },
}
</script>

<style scoped lang="scss">

aside{
  width:30%;
  margin-left:30px;
  display:flex;
  flex-direction:column;
  position: relative;
  margin-bottom:30px;
  @media(max-width:1170px){
    display:none;
  }
  .aside__block{
    width: 100%;
    display:flex;
    flex-direction: column;
    margin-bottom:30px;
    padding:30px 30px 40px 30px;
    border-radius:8px;
    transition: .3s all;
    background:#262626;
    &:last-child{
      margin-bottom:0px;
    }
    &:hover{
      box-shadow:0px 0px 20px #4faab3;
    }
  }
  .aside__title{
    font-size:28px;
    font-weight:500;
    color:#4faab3; 
    margin-bottom:20px;
  }
  .baner{
    align-items:center;
    &__content{
      width:100%;
      height:100%;
      background:#fff;
      a{
        width:100%;
        img{
            width:100%;
        }
      }
    }
  }
  .read{
    margin:0px 0px 20px 0px;
    li{
      display:flex;
      flex-direction: column;
      width:100%;
      color:#fff;
      transition:.3s all;
      a{
        color:#fff;
        width:100%;
      }
      &:hover{
        transform:translateY(-10px);
      }
      &:hover .gradient{
        background:radial-gradient(#00d1a0, #262626);
      }
      h3{
        font-size:20px;
        margin-top:15px;
      }
      .post__atributes{
        width:100%;
        display:flex;
        justify-content:space-between;
        font-size:16px;
        margin-top:15px;
        margin-bottom:15px;
        i{
          margin-right:5px;
        }
      }
      .gradient{
        width:100%;
        height:4px;
        display:flex;
        transition:.3s all;
        background:radial-gradient(#4faab3, #262626);
      }
    }
  }
}

</style>
