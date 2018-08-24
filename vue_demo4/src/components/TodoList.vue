<template>
	<div class="todo-list">
		<ul>
			<Item v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index"></Item>
		</ul>
	</div>
</template>

<script>
	
	//1.引入
	import Item from './TodoItem.vue'
	import {mapState} from 'vuex'
	import storageUtil from '../util/storageUtil'
	
	export default{
		
		computed:{
			...mapState(['todos'])
		},
		
		watch:{	//监视
			todos:{
				deep:true, //深度监视
				handler:storageUtil.saveTodos
			}
		},
		
		components:{
			Item
		}
	}
	
</script>

<style>
	
	
	/*主体*/
	.todo-list{
		margin-left: 0px;
		margin-top: 10px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}
	
	
			
</style>