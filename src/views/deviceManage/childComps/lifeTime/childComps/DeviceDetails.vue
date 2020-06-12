<template>
    <div class="wrapper">
        <div class="details">
            <pre>设备名称: {{name}}</pre>
            <pre>设备模型: {{model}}</pre>
            <pre>设备状态: {{state}}</pre>
            <pre>上线日期: {{time}}</pre>
            <pre>在线时间: {{period}}</pre>
            <pre>　所属组: {{group}}</pre>
            <pre>　　数量: {{number}}</pre>
            <pre>通讯协议: {{protocol}}</pre>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DeviceDetails",
        data() {
            return {
                name: "Ipad",
                model: "平板电脑模型",
                state: "在线",
                time: "2020/6/5 10: 00",
                period: "20h",
                group: "个人电脑组",
                number: 2,
                protocol: "HTTP"
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        margin: 50px auto;
        border: 1px solid #ccc;
        width: 80%;
        padding: 50px 20px 50px 20px;
    }
 .details {
     width: 300px;
     margin:0 auto;
 }
</style>