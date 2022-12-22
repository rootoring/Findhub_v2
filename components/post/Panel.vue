<template> 
  <div :style="{bottom:indexBottom}" class="panel"> 
    <div class="panel__item"> 
      <i data-scroll="comments" class="scroll-single fas fa-comments"></i>
      <span>{{postCharacters.comments}}</span> 
    </div> 
    <div class="panel__item"> 
      <i @click.prevent="addFavoritePost({ postId:post._id, userId:user._id, token:user.acsessToken})" class="fas fa-bookmark">  
      </i> 
    </div> 
    <div class="panel__item"> 
      <i class="fas fa-share"></i> 
    </div> 
    <div style="margin-left:auto;" class="panel__item"> 
      <i @click="scrollTop()" style="font-size:20px;" class="fas fa-arrow-alt-circle-up"></i> 
    </div> 
  </div> 
</template> 
 
<script> 

  import { mapGetters, mapActions } from 'vuex' 
 
  export default { 
    name: 'Panel', 
    props:[ 
      'postCharacters', 
    ], 
    data(){ 
      return{ 
        lastData:0, 
        sideScroll:false, 
      } 
    }, 
    computed:{ 
      indexBottom(){ 
        return this.sideScroll === true ? '0px' : '-60px'; 
      }, 
      ...mapGetters({ 
        post: 'posts/post', 
        user: 'auth/user', 
      }), 
    }, 
    methods:{ 
      ...mapActions({ 
        addFavoritePost: 'posts/addFavoritePost', 
      }),
      scrooling(){ 
       window.addEventListener('scroll', () => { 
          if(window.scrollY > this.lastData){ 
            this.sideScroll = false;    
          }else{ 
            this.sideScroll = true; 
          } 
          this.lastData = window.scrollY; 
        } );
      }, 
      scrollTop(){ 
        window.scrollTo({ 
          top:0, 
          left:0, 
          behavior: "smooth", 
        }); 
      },  
    }, 
    mounted(){ 
      this.scrooling(); 
    }, 
  } 
</script> 
 
<style scoped lang="scss"> 
.panel{ 
  width:100%; 
  position:sticky; 
  left:0px; 
  display:flex; 
  align-items:center; 
  transition:.3s all; 
  height:60px; 
  background:rgba(#262626, 0.85); 
  color:#fff; 
  border-radius:4px 4px 0px 0px; 
  padding:0px 20px; 
  backdrop-filter: blur(12px); 
  &__item{ 
    display:flex; 
    font-size:16px; 
    margin-right:25px; 
    &:last-child{ 
      margin-right:0px; 
    } 
    i{ 
      margin-right:15px; 
      cursor:pointer; 
      transition:.3s all; 
      &:hover{ 
        color:#00d1a0; 
      } 
    } 
  }  
} 
</style>