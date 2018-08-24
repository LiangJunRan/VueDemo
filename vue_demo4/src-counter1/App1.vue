<template>
  <div>
		<p>click {{count}} times, count is {{evenOrOdd}}</p>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementIFOdd">increment if odd</button>
		<button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
	
export default {
		data(){
			return{
				count:0	
			}
		},
		computed:{
			evenOrOdd(){
				return this.count%2 == 0 ? '偶数' : '奇数'
			}
		},
		methods:{
			//增加
			increment(){
				const count = this.count
				this.count = count+1
			},
			decrement(){
				const count = this.count
				this.count = count-1
			},
			incrementIFOdd(){
				const count = this.count
				if(count%2===1){
					this.count = count + 1
				}
			},
			//过一秒才增加
			incrementAsync(){
				const count = this.count
				setTimeout( ()=>{
					this.count = count+1
				},1000)
			}
		}
}

</script>

<style>

</style>
