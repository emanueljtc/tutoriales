<template>
	<div class="slides">
		<div class="slides-inner">
			<div v-for="slide in slides" :key="slide">
				{{slide.src}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				slides: [
					{src: 'static/img/slide1.jpeg'},
					{src: 'static/img/slide2.jpeg'},
					{src: 'static/img/slide3.jpeg'},
					{src: 'static/img/slide4.jpeg'},
					{src: 'static/img/slide5.jpeg'}
																				
					]
			}
		}
	}
</script>

<style scoped>
	
</style>