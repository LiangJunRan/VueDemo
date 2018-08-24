<template>
	<div class="todo-container">
		<div class="todo-wrap">
			<TodoHeader></TodoHeader>
			<TodoList></TodoList>
			<TodoFooter ></TodoFooter>
		</div>
	</div>
</template>

<script>
	//1.导入
	import TodoHeader from './components/TodoHeader.vue'
	import TodoList from './components/TodoList.vue'
	import TodoFooter from './components/TodoFooter.vue'
	export default{
		//2.映射成标签
		components:{
			TodoHeader,
			TodoList,
			TodoFooter
		},
		mounted (){
			// 发送命令给actions：异步获取数据
			
			console.log('此处准备读取')
			this.$store.dispatch('reqTodos')
		},
	}
	
</script>
	
<style>
.todo-container{
	width: 600px;
	height: 200px;
	margin: 0 auto;
}
.todo-wrap{
	padding: 10px;
	border: 1px solid #ccc;
	border-radius:5px ;
}
</style>