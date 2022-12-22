<template> 
  <div class="wrapper"> 
    <PostHeader :post="post" :comments="comments" /> 
    <main id="main" class="conteiner"> 
      <section style="position:relative;" id="content"> 
        <!-- <div v-html="post.html" > 
        </div>  -->
        <!-- <PartyBlock :key="block._id" v-for="block of post.blocks" :type="block.type" :data="block.json" /> -->
        <Panel :postCharacters="{comments:comments.length}" /> 
      </section>   
      <Aside /> 
    </main> 
    <Comments /> 
  </div>   
</template> 
 
<script> 
 
import { mapGetters } from 'vuex'  
 
export default {   
  name: 'Post', 
  components: { 
    PostHeader:() => import('@/components/post/PostHeader'), 
    // PartyBlock:() => import('@/components/post/PartyBlock'), 
    Aside:() =>  import ("@/components/Aside"), 
    Comments:() =>  import ("@/components/Comments"), 
    Panel:() =>  import ("@/components/post/Panel"), 
  }, 
  computed:{ 
    ...mapGetters({ 
      post: 'posts/post', 
      user: 'auth/user', 
      comments: 'posts/comments', 
    })     
  }, 
  methods:{ 
    popUpImage(images){
      for(let image of document.querySelectorAll(images)){
        image.addEventListener('click', function(){
          let html = `
            <div class="popup__image">
              <img src="${this.src}"/>
            </div>
          `;
          document.querySelector('body').insertAdjacentHTML('beforeend', html);
          setTimeout(() => document.querySelector('.popup__image').classList.add('active'), 100);
          document.querySelector('.popup__image').addEventListener('click', function(event) {
            if(event.target.tagName == 'IMG'){
              return
            }else{
              document.querySelector('.popup__image').classList.remove('active');
              setTimeout(() => this.remove(), 100);
            }
          });
        })
      }
    }, 
    copyCode(block){
      let codes = document.querySelectorAll(block);
      for(let code of codes){
        code.querySelector('.copy').addEventListener('click', function(event){
          // создание выделения
          let range = document.createRange();
          range.selectNode(code);
          // удаление текущего выделения на странице
          window.getSelection().removeAllRanges();
          // выделение объекта
          window.getSelection().addRange(range)
          document.execCommand("copy");
        });
      }
    },
  }, 
  mounted(){ 
    window.scrollTo(0,0); 
    this.popUpImage('#content>div>img')
    this.copyCode('.code'); 

  }, 
  async fetch({store, params}) { 
    await store.dispatch('posts/fetchPost', params.id); 
  }, 
  head() { 
    return { 
      title: this.post.title + ' | Findhub',  
      meta:[ 
        { hid: 'description', name: 'description', content: this.post.description }, 
      ], 
    } 
  } 
} 
</script> 
 
<style scoped lang="scss">

.wrapper{ 
  padding:0px ; 
}
 
main{ 
  padding:60px 0px 0px 0px; 
  @media(max-width:1170px){ 
    padding:40px 0px 0px 0px; 
  } 
} 
 
</style>