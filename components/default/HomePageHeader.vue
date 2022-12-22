<template>
	<div class="single__header"> 
		<div class="hidden__wrapper"></div>
		<img :src=" '/img/' + url" class="single__img"> 
		<div class="single__head">
			<h1 class="single__title">{{text}}</h1> 
		</div>
	</div>
</template>

<script>
	export default{
		name:'HomePageHeader',
		data(){
			return{
				textArray:['Findhub - это твой проводник в мире технологий', 'Все о IT и не только'],
				text:'|',
				reverseText: false,
				indexText:0,
				imagesArray:[
				'mak-makbuk-eppl-naushniki-bliutuz-naushniki-monitor-aiti-mys.jpg', 
				'ultrabook-dell-xps-15-ios-computer.jpg',
				],
				indexImage:0,
				url:'mak-makbuk-eppl-naushniki-bliutuz-naushniki-monitor-aiti-mys.jpg',
			}
		},
		watch:{
			reverseText(){
				if(this.reverseText){
					return setTimeout(this.textDelete.bind(null, this.indexText), 1000)
				} 
				this.indexText === this.textArray.length - 1 ? this.indexText = 0 : this.indexText++
				return setTimeout(this.textCreate.bind(null, this.indexText), 1000)
			}
		},
		methods:{
			textDelete(number){
				for(let i = this.textArray[number].length; i >= 0; i--){
					setTimeout( () => {
						this.text = `${this.textArray[number].slice(0, i )}|`;
						if(i === 0) this.reverseText = false;           
					}, (this.textArray[number].length - i) * 50)  
				}
			},
			textCreate(number){
				for(let i = 0; i <= this.textArray[number].length - 1; i++){
					setTimeout( () => {
						this.text = `${this.textArray[number].slice(0, i + 1)}|`;
						if(i === this.textArray[number].length - 1) this.reverseText = true;      
					}, i * 50)  
				}
			},
			slideImages(){
				this.indexImage === this.imagesArray.length - 1 ? this.indexImage = 0 : this.indexImage++
				this.url =  this.imagesArray[this.indexImage]
			},
		},
		mounted(){
			setInterval(this.slideImages.bind(null), 5000)
			this.textCreate(this.indexText);
		},
		unmounted(){
			clearInteval(this.slideImages)
		},
	}	
</script>