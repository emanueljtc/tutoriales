<template>
<select class="browser-default" :name="name" v-model="value">
	<option :value="currency" v-for="(currency, key) in list" :key="key">
		{{ currency.name }}
	</option>
</select>
</template>
<script>
	export default{
		name:"currency-rates-list",
		data(){
			return{
				value:{}
			}
		},

		watch:{
			initialValue(){

			},
			value(){

			}
		},
		methods:{
			changeRates(value){

			}
		},
		props:['list','initialValue','name']

	};
</script>