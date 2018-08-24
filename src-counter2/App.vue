<template>
  <div>
		<!-- <p>click {{$store.state.conunt}} times, count is {{evenOrOdd}}</p> -->
		<p>click {{conunt}} times, count is {{evenOrOdd}}</p>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementIFOdd">increment if odd</button>
		<button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>


import {mapState,mapGetters,mapActions} from 'vuex'

export default {
	computed:{
		
		...mapState(['conunt']),				//mapSate返回值。{count(){return this.$store.state['conunt']}
		...mapGetters({evenOrOdd:'evenOrOdd2'}),		//mapGetters返回值对象，{evenOrOdd(){	return this.$store.getters.['evenOrOdd']},}
// 		evenOrOdd(){	
// 			return this.$store.getters.evenOrOdd
// 		},
	},
	
	methods:{
		...mapActions(['increment','decrement','incrementIFOdd','incrementAsync'])
	}
	
	/*methods:{
		//增加
		increment(){
			//通知vuex去增加
			this.$store.dispatch('increment')		//触发store中的对应的action调用
		},
		decrement(){
			this.$store.dispatch('decrement')
		},
		incrementIFOdd(){
			this.$store.dispatch('incrementIFOdd')
		},
		//过一秒才增加
		incrementAsync(){
			this.$store.dispatch('incrementAsync')
		}
	}*/
}

</script>

<style>

</style>
