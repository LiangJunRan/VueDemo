/*
 * 路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Message from '../views/Message.vue'
import MessageDetail from '../views/MessageDetail.vue'

Vue.use(VueRouter)

//向外暴露路由器对象
export default new VueRouter({
	//传递配置对象
	//n个路由
	routes:[
		//path最左侧的/永远代表根路径
		{
			//一个特殊的配置，路径为根路径重定向，即为默认请求某一个组件
			path:'/',
			redirect:'/about'
		},
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home,
			children:[
				{
					//path:'/news',
					path:'/home/news',
					component:News
				},
				{
					path:'message',		//简化写法
					component:Message,
					children:[
						{
							path: '/home/message/detail/:id',
							component:MessageDetail
						}
					]
				},
				{	//默认显示
					path:'',
					redirect:'/home/news'
				}
			]
		}
	]
})
