<template>
  <section id="comments" class="comments">
    <div class="conteiner">
      <h3>Комментарии</h3>
      <form>
        <input v-model="createComment.name" placeholder="Введите ваше имя..." type="text" />
        <textarea v-model="createComment.content" placeholder="Оставьте ваш комментарий..." type="text"></textarea>
        <button @click.prevent="createComments({...createComment, post_id: post._id})" type='submit'>Опубликовать</button>
      </form>
      <article v-for="comment of post.comments" :key="comment._id">
        <h4>{{comment.name}}</h4>
        <p>{{comment.content}}</p>
      </article>
    </div>  
  </section>  
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import Aside from '@/components/Aside.vue'

export default {  
  name: 'Comments',
  data(){
    return{
      createComment:{
        content:'',
        name:'',
      }
    }
  },
  methods:{
    ...mapActions({
      createComments:'posts/createComments',
    }),
  },
  computed:{
    ...mapGetters({
      post: 'posts/post',
    }),    
  },
}
</script>

<style scoped lang="scss">
.comments{
  width:100%;
  padding:40px 20px;
  background:#262626;
}
.conteiner{
  display:flex;
  flex-direction:column;
  font-family: 'Montserrat', sans-serif;
  h3{
    font-size:32px; 
    color:#00d1a0;
    align-self:flex-start; 
    margin-bottom:20px;
  }
  form{
    width:100%;
    padding:0px;
    margin:0px;
    textarea{
      width:100%;
      height:110px;
      resize:none;
      font-size:16px;
      padding:15px 15px;
      border-radius:4px;
    }
    input{
      width:290px;
      resize:none;
      font-size:16px;
      padding:15px 15px;
      border-radius:2px;
    }
    button:hover{
      background:#00d1a0;
      color:#fff;
    }
    button{
      width:200px;
      background:inherit;
      margin:20px 0px;
      transition:.3s all;
      color:#00d1a0;
      padding:10px 10px 10px 15px;
      border:1px solid #00d1a0;
    }
  }
  article{
    padding:20px 20px;
    color:#fff;
    width:100%;
    border-radius:4px;
    transition:.3s all;
    &:hover{
      background:#737373;
      box-shadow:0px 0px 8px #000;
    }
    h4{
      font-size:24px;
      font-weight:500;
      margin-bottom:15px;
    }
    p{
      line-height:20px;
      letter-spacing:1.5px;
      font-size:14px;
      white-space: pre-wrap;
    }
  } 
}


</style>