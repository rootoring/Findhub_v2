<template>
	<section class="recommend">
		<h2>Что мы <span>предлагаем?</span></h2>
		<div class="recommend__container">
			<div class="recommend__block">
				<i class="fas fa-cubes"></i>
				<h3>Заголовок</h3>
				<span></span>
				<p>Описание блока, почему бы и не написать его, findhub вперед</p>  
			</div>
			<div class="recommend__block">
				<i class="fas fa-chart-line"></i>
				<h3>Заголовок</h3>
				<span></span>
				<p>Описание блока, почему бы и не написать его, findhub вперед</p>    
			</div>
			<div class="recommend__block">
				<i class="fas fa-project-diagram"></i>
				<h3>Заголовок</h3>
				<span></span>
				<p>Описание блока, почему бы и не написать его, findhub вперед</p>  
			</div>  
		</div>
	</section> 
</template>

<script>
	export default {
		name:'HomePageRecommend',
	}
</script>

<style scoped lang="scss">
	.recommend{
    max-width:1200px;
    margin:0 auto;
    padding:40px 0px;
    display:flex;
    flex-direction:column;
    align-items:center;
    h2{
      font-size:28px;
      color:#262626;
      margin-bottom:50px;
      font-weight:500;
      span{ 
        font-weight:bold;
        text-transform: uppercase;
      }
    }
    .recommend__container{
      width:100%;
      display: flex;
      justify-content:center;       
    } 
    .recommend__block{
      display:flex;
      flex-direction:column;
      align-items:center;
      border:1px solid #262626;
      border-radius: 4px;
      padding:20px;
      margin-right:20px;
      transition:.3s all ;
      &:last-child{
        margin-right:0px;
      } 
      &:hover{
        transform: translateY(-10px);
        border:1px solid #00d1a0;  
        span{
          width:50px;
        }
      }
      i{
        font-size:40px;
        color:#00d1a0;
      }
      h3{
        margin:20px 0px 10px 0px;
        font-size:20px;
        font-weight:600;
      }
      span{
        transition:.3s all;
        display:flex;
        width:30px;
        height:2px;
        background:#00d1a0;
        margin-bottom:15px;
        border-radius:3px;
      }
      p{
        font-size:14px;
        text-align: center;
        line-height:15px;
      }
    }
  }
</style>