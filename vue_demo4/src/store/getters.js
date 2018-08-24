/*
	包含所有基于state的getter计算属性对象
*/

export default{
	//总数量，
	totalCount(state){
		return state.todos.length
	},
	//完成数量
	completeCount(state){
		return state.todos.reduce((preTotal,todo) => preTotal + (todo.complete?1:0),0)
	},
	//判断是否全部选中
	isAllSelect(state,getters){
		return getters.completeSize === getters.completeCount && getters.completeSize>0
	}
}