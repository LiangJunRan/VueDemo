/*
	包含由action触发直接更新状态的方法对象
*/

import {ADD_TODO,DELETE_TODO,SELECT_ALL_TODOS,CLEAR_ALL_COMPLETED,RECEIVE_TODOS} from './mutation-types'

export default{
	[ADD_TODO](state,{todo}){
		state.todos.unshift(todo)
		// console.log(state.todos)
	},
	[DELETE_TODO](state,{index}){
		state.todos.splice(index,1)
	},
	[SELECT_ALL_TODOS](state,{value}){
		state.todos.forEach(todo => todo.complete = value)
	},
	[CLEAR_ALL_COMPLETED](state){
		state.todos = state.todos.filter(todo => !todo.complete)
	},
	[RECEIVE_TODOS](state,{todos}){
		state.todos = todos
		console.log(todos)
	}
}