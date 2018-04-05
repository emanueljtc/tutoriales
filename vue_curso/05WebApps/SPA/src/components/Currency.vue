<template>
<div>
	<h1>{{ title }}</h1>
	<img class="responsive-img" src="../assets/logo.png" alt="Vue.js">
	<div class="row">
		<div class="col s4 offset-s4">
			<label class="flow-text">DE</label>
			<currency-rates-list 
				@changeRates="changeRates" :list="baseList()" name="base" :initialValue="base"
			>
				
			</currency-rates-list>
		</div>
	</div>
	<div class="row">
		<div class="col s4 offset-s4">
			<label class="flow-text">A</label>
			<currency-rates-list
				@changeRates="changeRates"
				:list="targetList()"
				:initialValue="target"
				 name="target"

			></currency-rates-list>
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
			<h5 v-if="base_amount">
				{{ base_amount }} {{base.name}} = {{target_amount}} {{target.name}}
			</h5>
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
			changeRates(val, name){
				this[name] = val;
				this.convertRates()

			},
			convertRates(){
				if(!this.base_amount){
					return;
				}
				convertRates(this.base.name, this.target.name).then(res =>{
					this.target_amount = res;
				});
			},
			baseList(){
				return this.currencyList.filter(currency => currency.name != this.base.name)
			},
			targetList(){
				return this.currencyList.filter(
					currency=> currency.name != this.base.name
				);
			}
		}
	};
</script>