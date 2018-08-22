<template>
	<div class="todo-container">
		<div class="todo-wrap">
			<!-- 给这个标签对象绑定addTodo事件监听 -->
			<TodoHeader :addTodo="addTodo"></TodoHeader>
			<!--<TodoHeader @addTodo="addTodo"></TodoHeader>-->
			<!--<TodoHeader ref="header"></TodoHeader>-->
			<TodoList :todos="todos" :deleteTodo="deleteTodo"></TodoList>
			<TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"></TodoFooter>
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
		
		
		
		data(){
			return{
				//从localStorage读取todos
				//window.localStorage.getItem('todos_key') =>>  字符串格式
				//需要解析为json
				todos:JSON.parse(window.localStorage.getItem('todos_key') || '[]')    //key-value
			}
		},
		
		mounted(){
			//执行异步代码
			//给TodoHeader标签绑定addTodo事件监听
			//this.$on('addTodo',this.addTodo) //给App绑定的监听
//			this.$refs.header.$on('addTodo',this.addTodo)
		},
		
		watch:{	//监视
			todos:{
				deep:true, //深度监视
				handler:function(newValue) {
					//将todos最新的值的json数据，保存到localStorage
					window.localStorage.setItem('todos_key',JSON.stringify(newValue))   //key-value
				}
			}
		},
		
		methods:{
			addTodo(todo){
				this.todos.unshift(todo)
			},
			//删除指定
			deleteTodo(index){
				this.todos.splice(index,1)
			},
			//删除所有选中的todo
			deleteCompleteTodos(){
				//
				this.todos = this.todos.filter(todo => !todo.complete)
			},
			//全选或者全不选
			selectAllTodos(isCheck){
				this.todos.forEach(todo => todo.complete=isCheck)
			}
		}
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