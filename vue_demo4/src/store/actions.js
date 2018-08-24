/*
	包含接收组件通知触发mutation调用间接更新状态的方法对象
*/

import {ADD_TODO,DELETE_TODO,SELECT_ALL_TODOS,CLEAR_ALL_COMPLETED,RECEIVE_TODOS} from './mutation-types'
import storageUtil from '../util/storageUtil'

export default{
	addTodo({commit},todo){
		//提交对mutation的请求
		commit(ADD_TODO,{todo})
	},
	deleteTodo({commit},index){
		commit(DELETE_TODO,{index})
	},
	selectAllTodos({commit},value){
		commit(SELECT_ALL_TODOS,{value})
	},
	clearAllCompleted({commit}){
		commit(CLEAR_ALL_COMPLETED)
	},
	//异步获取todos并更新状态
	reqTodos({commit}){
		//模拟
		console.log('异步读取')
		setTimeout(() => {
			console.log('异步读取')
			//读取数据
			const todos = storageUtil.readTodos()
			console.log(todos)
			//提交mutation
			commit(RECEIVE_TODOS,{todos})
		},1000)
	}
}