<template>
	<div class="todo-container">
		<div class="todo-wrap">
			<TodoHeader :addTodo="addTodo"></TodoHeader>
			<TodoList :todos="todos" ></TodoList>
			<!--<TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"></TodoFooter>-->
			<todo-footer>
				<input type="checkbox" value="" v-model="isAllCheck" slot="checkAll"/>
				<span slot="count">已完成{{completeSize}}/全部{{todos.length}}</span>
				<button v-show="completeSize" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>
			</todo-footer>
		</div>
	</div>
</template>

<script>
	//引入PubSub
	import PubSub from 'pubsub-js'
	//1.导入
	import TodoHeader from './components/TodoHeader.vue'
	import TodoList from './components/TodoList.vue'
	import TodoFooter from './components/TodoFooter.vue'
	
	import storageUtil from './util/storageUtil.js'
	
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
				//todos:JSON.parse(window.localStorage.getItem('todos_key') || '[]')    //key-value
				
				todos:storageUtil.readTodos()
				
//				todos:[
//						{title: "asdafaf", complete: true},
//						{title: "asdasd", complete: true},
//						{title: "asdass", complete: true},
//						{title: "SDVSDF", complete: true}
//				]
			}
		},
		
		computed:{
			completeSize(){
				return this.todos.reduce((preTotal,todo) => preTotal + (todo.complete?1:0),0)
			},
			isAllCheck:{
				get(){
					return this.completeSize === this.todos.length && this.completeSize>0
				},
				set(value){	//当前checkbox最新的值
					this.selectAllTodos(value)
				}
			}
		},
		
		mounted(){
			//订阅消息
			
			PubSub.subscribe('deleteTodo',(msg,index) => {
				this.deleteTodo(index)
			})
		},
		
		watch:{	//监视
			todos:{
				deep:true, //深度监视
				/*handler:function(newValue) {
					//将todos最新的值的json数据，保存到localStorage
					//window.localStorage.setItem('todos_key',JSON.stringify(newValue))   //key-value
					storageUtil.saveTodos(newValue)
				}*/
				handler:storageUtil.saveTodos
			}
		},
		
		methods:{
			addTodo(todo){
				console.log(this.todos)
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