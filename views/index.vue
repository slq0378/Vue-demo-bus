<template>
    <div>
        <div>bus 插件封装</div>
        <busDemo :count="number"></busDemo>
        <button @click="click">跳转</button>
    </div>
</template>
<script type="text/javascript">
import busDemo from './bus-demo.vue'
export default {
    components: {
        busDemo
    },
    data() {
        return {
            number: 10
        }
    },
    // 注意：要在created钩子中注册总线事件
    created() {
        this.$bus.on('add', (msg) => {
            console.log('add:', msg)
            this.number += msg
        })
    },
    // 注意：注册的总线事件要在组件销毁时卸载，否则会多次挂载，造成触发一次但多个响应的情况
    beforeDestory() {
        this.$bus.off('add')
    },
    mounted() {},
    methods: {
        click() {
            this.$router.push({ path: '/about' })
        },
        goBack() {
            // 返回上面多少级-1，前进多少级 1
            this.$router.go(-1)
        }
    }
}
</script>
<style type="text/css" scoped>
</style>