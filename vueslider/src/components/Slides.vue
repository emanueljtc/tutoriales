<template>
<div class="slides">
	<div :style="{ width: innerWidth+ 'px'}" class="slides-inner">
		<Slide v-for="slide in slides" :style="{ width: singleWidth+'px'}" :slide="slide" :key="slide.key" ></Slide>
	</div>
</div>
</template>

<script>
	import Slide from './Slide';
	export default {
		data(){
			return{
				slides: [
					{src: 'static/img/slide1.jpeg'},
					{src: 'static/img/slide2.jpeg'},
					{src: 'static/img/slide3.jpeg'},
					{src: 'static/img/slide4.jpeg'},
					{src: 'static/img/slide5.jpeg'}
																				
					],
					innerWidth: 0,
					singleWidth: 0

			}
		},
		props: {
			itemsPerSlide:{
				type: null,
				default: 1
			}
		},
		components: {
			Slide

		},
		attached(){
			let singleWidth = this.$el.clientWith/this.itemsPerSlide
			this.$set('singleWidth', singleWidth)
			this.$set('innerWidth', singleWidth * this.slides.length)
		}
	}
</script>

<style scoped>
	
</style>