<template>
	<div>
		<div v-if="!repoUrl">loading</div>
		<div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				repoUrl:'',
				repoName:''
			}
		},
		mounted(){
			//发ajax请求，获取数据
			const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
			/*this.$http.get(url).then(
				response => {
					//成功
					const result = response.data
					//得到第一个
					const mostRepo = result.items[0]
					this.repoUrl = mostRepo.html_url
					this.repoName = mostRepo.name
				},
				reponse => {
					alert('失败')
				}
			)*/
			
			
			//使用axios发送ajax请求
			axios.get(url).then(
				response => {
					//成功
					const result = response.data
					//得到第一个
					const mostRepo = result.items[0]
					this.repoUrl = mostRepo.html_url
					this.repoName = mostRepo.name
				}
			).catch(error => {
				alert('失败，，')
			})
		}
	}
	
</script>

<style>
</style>