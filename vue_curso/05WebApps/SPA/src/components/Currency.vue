<template>
<div>
	<h1>{{ title }}</h1>
	<img src="../assets/logo.png" alt="Vue.js">
	<div class="row">
		<div class="col s4 offset-s4">
			<label class="flow-text">DE</label>
			<currency-rates-list 
				:list="baseList()"
				:initialValue="base" 
				name="base"
			>
				
			</currency-rates-list>
		</div>
	</div>
	<div class="row">
		<div class="col s4 offset-s4">
			<label class="flow-text">A</label>
			<currency-rates-list></currency-rates-list>
		</div>
	</div>
	<div class="row">
		<div class="col s4 offset-s4">
			<label class="flow-text">MONTO</label>
			<input type="number" min="1" class="center">
		</div>
	</div>
	<div class="row">
		<div class="col s12">
			<h5>Valor de Conversión</h5>
		</div>
	</div>
</div>
</template>
<script>
import {getRates, convertRates} from '../helpers/api_fixer'
import CurrencyRatesList from './CurrencyRatesList'
	export default{
		name:"currency",
		components:{
			CurrencyRatesList
		},
		data(){
			return {
				title:'Convertidor de Divisas',
				currencyList:[],
				base:'',
				target:'',
				base_amount: 1,
				target_amount:1
			}
		},
		created(){
			getRates('USD').then(res => {
				//console.log(res)
				this.currencyList = res
				this.base = res[0]
				this.target = res[1]
			});
		},
		methods:{
			changeRates(){

			},
			convertRates(){

			},
			baseList(){

			},
			targetList(){

			}
		}
	};
</script>