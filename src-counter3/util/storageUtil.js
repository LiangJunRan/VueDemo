/*
 * 使用localstorage存储数据的工具模块
 * 1.函数---暴露一个功能
 * 2.对象---暴露多个功能
 * 
 * 需要暴露一个功能还是多个功能
 */

const TODOS_KEY = 'todos_key'

export default{
	saveTodos(todos){
		console.log("将此写入")
		window.localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
		console.log(todos)
	},
	
	readTodos(){
		return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')    //key-value
	}
}
