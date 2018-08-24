<template>
	<div class="todo-footer width_100">
		<label> 
			<input type="checkbox" value="" v-model="isAllCheck"/> 
			<span>已完成{{completeCount}}</span>/全部{{totalCount}}
		</label>
		<button v-show="completeCount" @click="clearAllCompleted">清除已完成任务</button>
	</div>
</template>

<script>
	
	import {mapGetters,mapActions} from 'vuex'
	
	export default{

		computed:{
			...mapGetters(['totalCount','completeCount']),
			isAllCheck:{
				get(){
					return this.$store.getters.isAllSelect
				},
				set(value){	//当前checkbox最新的值
					//this.selectAllTodos(value)
					this.$store.dispatch('selectAllTodos',value)
				}
			}
		},
		methods:{
			...mapActions(['clearAllCompleted'])
		}
	}
	
</script>

<style>
	
	/*底部*/
	.todo-footer{
		height: 40px;
		line-height: 40px;
		padding-left:6px;
		margin-top:5px ;
	}
	
	.todo-footer label{
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
		
	}
	
	.todo-footer label input{
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}
	
	.todo-footer button{
		float: right;
		margin-top: 5px;
	}

</style>