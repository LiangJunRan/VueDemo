<template>
	<!--
		1、onmouseover、onmouseout：鼠标经过时自身触发事件，经过其子元素时也触发该事件；（父亲有的东西，儿子也有） 
		2、onmouseenter、onmouseleave：鼠标经过时自身触发事件，经过其子元素时不触发该事件。（父亲的东西就是父亲的，不归儿子所有） 
		这四个事件两两配对使用，onmouseover、onmouseout一对，onmouseenter、onmouseleave一对，不能混合使用。
	-->
	<li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background:bgColor}">
		<label>
			<input type="checkbox" value="" v-model="todo.complete"/>
			<span>{{todo.title}}</span>
		</label>
		<button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
	</li>
</template>

<script>
	import PubSub from 'pubsub-js'
	export default{
		props:{
			todo:Object,
			index:Number
		},
		data(){
			return{
				bgColor:'white',	//默认背景颜色白色
				isShow:false    //按钮是否显示
			}
			
		},
		methods:{
			
			handleEnter(isEnter){
				if(isEnter){
					this.bgColor = 'gray'
					this.isShow = true
				}else{
					this.bgColor = 'white'
					this.isShow = false
				}
			},
			deleteItem(){
				
				//确认删除谁的评论
				const {todo,index,deleteTodo} = this
				if(window.confirm('确认删除'+todo.title+'吗？')){
					//deleteTodo(index)
					
					//发布消息
					PubSub.publish('deleteTodo',index)
				}
			}
		}
	}
	
</script>

<style>
	
	/*item*/
	ul{
		padding: 0;
		margin: 0;
		
	}
	
	li{
		margin-left: 0px;
		border-bottom: 1px solid #ddd;
		border-radius: 2px;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		
	}
	
	li label input{
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
		
	}
	
	li label{
		float: left;
		cursor: pointer;
	}
	
	li button{
		content: initial;
	}
	
	li:last-child{
		border-bottom: none;
	}
			
	li button{
		float: right;
		/*display: none;*/
		margin-top: 3px;
	}
	
</style>