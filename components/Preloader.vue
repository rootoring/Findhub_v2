<template>
<div :class="`hidden ${loader ? 'pre' : ''}` ">
<div class="find">Find</div>
<div class="hub">hub</div>
</div>
</template>


<script>

  import { mapGetters } from "vuex" 

	export default{
		name:'Preloader',

		computed:{
      ...mapGetters({ 
			loader: 'main/isActivePreloader'
      }), 
		}
	}		

</script>

<style>
	.hidden{display: none;}
	.pre{
			display: flex;
    	align-items: center;
    	justify-content: center;
    	z-index: 9999;
			position: fixed;
			width: 100%;
      height: 100%;   
      background: rgba(255,255,255, .9);    
	}
    .find,.hub {
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	font-size: 100px;
    	font-family:"Helvetica";
    	opacity: 1;
    	animation: load 2s infinite;
    }
    .hub{
    font-weight:600; 
 		color:#4faab3; 
  	font-family: 'Montserrat', sans-serif;
    animation: loadHub 2s infinite;  	   	
    }
    .find{
    	animation: loadFind 2s infinite; 
    	color: #262626; 
    }

 @keyframes loadHub {
  0% {
     transform: translateY(-900%);
      }
 50% {
     transform: translateY(0%);
      }           
 100% {
      transform: translateX(500%);
      }
  }  

 @keyframes loadFind {
  0% {
     transform: translateY(900%);
      }
  50% {
      transform: translateY(0%);
      }
 100% {
      transform: translateX(-500%);
      }
  } 

@media (max-width: 450px) {
 	 .find,.hub{
 		font-size: 50px;
 	}
 } 
</style>    