<template>
  <section :class="`message ${ message.active ? 'active' : '' }`">
    <div @click="setMessage({text:'', color:'#000', active:false})" class="message__hidden"></div>
    <div :style="{
        'box-shadow':`0px 0px 10px ${message.color}`, 
      }" 
      :class="`message__visible ${ message.active ? 'active' : '' }`">
      <span>{{ message.text }}</span>
    </div>
  </section>  
</template>

<script>    

import { mapGetters, mapMutations } from "vuex"   
    
export default {
  name: 'Message',
  methods:{
    ...mapMutations({
      setMessage:'main/setMessage',
    }),
  },
  computed:{
    ...mapGetters({
      message:'main/message',
    })
  },
}
</script>

<style scoped lang="scss">
  .message{
    width:100vw;
    height:100vh;
    position:fixed;
    left:0;
    z-index:2;
    top:0;
    opacity:0;
    visibility:hidden;
    transition:.3s all ease;
    display:flex;
    justify-content: center;
    align-items:center;
    &.active{
      opacity:1;
      visibility:visible;
    }
    &__hidden{
      width:100%;
      height:100%;
      background:#1a1a1a;
      opacity:0.7;
      position:absolute;
      left:0px;
      top:0px;
    }
    &__visible{
      position: relative;
      top:-200%;
      transition:.3s all ease;
      width:40%;
      height:40%;
      font-size:26px;
      font-weight:500;
      background:#fff;
      border-radius:4px;
      z-index:1;
      color:#262626;
      display:flex;
      align-items:center;
      justify-content:center;
      box-shadow: 0px 0px 10px #00d1a0;
      @media(max-width:768px){
        font-size:20px;
        width:60%;
        height:50%;
      }
      &.active{
        top:0%;
      }
    }
  }
  
</style>
