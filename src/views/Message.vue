<template>
	<div>
		<ul>
			<li v-for="message in messages" :key="message.id">
				<router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
				<button @click="pushShow(message.id)">push查看</button>
				<button @click="replaceShow(message.id)">replace查看</button>
			</li>
		</ul>
		<hr />
		<router-view></router-view>
	</div>
</template>

<script>
	
	export default{
		data(){
			return {
				messages:[]
			}
		},
		mounted(){
			//模拟ajax请求从后台获取数据
			setTimeout(() => {
				const messages = [
					{
						title:'message01',
						id:1
					},
					{
						title:'message02',
						id:2
					},
					{
						title:'message04',
						id:4
					},
					{
						title:'message05',
						id:5
					}
				]
				this.messages = messages
			},1000)
		},
		
		methods:{
			pushShow(id){
				this.$router.push(`/home/message/detail/${id}`)
			},
			replaceShow(id){
				this.$router.replace(`/home/message/detail/${id}`)
			}
			
		}
	}
	
</script>

<style>
</style>