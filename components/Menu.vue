<template> 
  <nav ref="menu" :class=" `menu ${isActiveMenu ? 'active' : ''}` "> 
    <div @click="toogleMenu(false)" class="menu-close"> 
      <span></span> 
      <span></span>     
    </div> 
    <ul> 
      <li> 
       <nuxt-link :to="{ path:`/pages/1`}">Все посты</nuxt-link>   
     </li> 
     <li v-for="category, key of categories" :key="category._id"> 
      <nuxt-link :to="{name:`category-id`, params:{id:category._id}}" class="menu-link"> 
        {{category.title}}  
        <i class="fas fa-arrow-down"></i> 
      </nuxt-link> 
      <ul> 
        <li v-for="child, key of category.childCategories" :key="key">  
          <nuxt-link :to="{name:'category-id', params:{id:`${child._id}`}}"> 
            {{child.title}} 
          </nuxt-link> 
        </li>  
      </ul> 
    </li> 
  </ul> 
</nav> 
</template> 
 
<script> 
 
  import { mapGetters, mapMutations } from "vuex" 
 
  export default { 
    name: 'Menu',
    computed: { 
      ...mapGetters({ 
        categories:'category/categories', 
        isActiveMenu:'main/isActiveMenu',
      }), 
    }, 
    methods:{
      ...mapMutations({
        toogleMenu:'main/toogleMenu',
      }),
    },
  } 
</script> 
 
<style scoped lang="scss"> 
.menu{ 
  padding:40px 40px 40px 0px; 
  position:fixed; 
  display:flex; 
  z-index:5; 
  backdrop-filter: blur(12px); 
  background:rgba(#262626, 0.93); 
  flex-direction:column; 
  left:-100%; 
  min-height:100%;     
  top:0px; 
  opacity:0; 
  box-shadow:0px 0px 10px #000; 
  transition: .6s all ease; 
  &.active{ 
    left:0%; 
    opacity:1; 
  } 
  &-close{ 
    display:flex; 
    flex-direction:column; 
    width:40px; 
    height:40px;
    cursor:pointer;
    margin-bottom:20px;
    margin-left:20px; 
    align-self:flex-start; 
    span{ 
      width:100%; 
      height:2px; 
      position: relative;
      top:20px;
      background:#fff; 
      &:last-child{ 
        transform:rotate(45deg); 
      } 
      &:first-child{ 
        transform:rotate(-45deg); 
        margin-bottom:-2px; 
      } 
    } 
  } 
 
  ul{ 
    width:100%; 
    display:flex; 
    flex-direction:column; 
    margin-left:20px; 
    li{ 
      width:100%; 
      display:flex; 
      flex-direction:column; 
      a{ 
        color:#00d1a0; 
        font-size:22px; 
        padding:12px 0px; 
        margin-left:10px; 
        transition:.3s all; 
        i{ 
          font-size:16px; 
        } 
        &:hover{ 
          color:#4faab3;   
        } 
      } 
      ul{ 
        width:100%; 
        display:flex; 
        flex-direction:column; 
        transition:.3s all; 
        li{  
          width:100%; 
          a{ 
            margin-left:30px; 
            font-size:16px; 
            padding:9px 0px; 
            color:#fff; 
            @media(max-width:510px){
              margin-left:10px;    
            }
          } 
        } 
      } 
    } 
  } 
} 
</style>