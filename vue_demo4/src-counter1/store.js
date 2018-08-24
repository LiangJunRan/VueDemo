/*
	vuex的核心管理对象模块
*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//状态对象
const state = {
	conunt :0	//初始化状态
}

//包含多个更新state函数对象
const mutations = {
	//增加的
	ADD(state){
		state.conunt++
	},
	//减少的
	Decrement(state){
		state.conunt--
	}
}

//包含多个对应事件回调函数对象
const actions = {
	//增加的action
	increment ({commit}){
		//提交mutation
		commit('ADD')
	},
	
	//添加的action
	decrement ({commit}){
		commit('Decrement')
	},
	
	//条件增加
	incrementIFOdd ({commit,state}){
		if(state.conunt%2 === 1){
			commit('ADD')
		}
	},
	
	//异步action
	incrementAsync ({commit}){
		setTimeout(() => {
			commit('ADD')
		},1000)
	},
}

//计算属性，包含多个getter计算属性函数的对象
const getters = {
	evenOrOdd(state){		//不用调用，只用读取属性值
		return state.conunt%2 == 0 ? '偶数' : '奇数'
	}
}


export default new Vuex.Store({
	state,		//状态
	mutations,	//包含多个更新state函数对象
	actions,	//包含多个对应事件回调函数对象
	getters,	//计算属性，包含多个getter计算属性函数的对象
})
