<template>
    <div>
	<div>{{count}}</div>
	<button @click="click"> + 1</button>
    </div>
</template>
<script type="text/javascript">
export default {
	props:{
		count:{
			type:Number,
			default:0
		}
	},
	methods:{
		click(){
			this.$bus.emit('add',10)
		},
	}
}
</script>
<style type="text/css" scoped>
</style>