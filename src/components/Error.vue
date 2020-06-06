<template>
    <div>
        <div class="fault">404</div>
        <div class="fault-message">您访问的页面不存在~</div>
    </div>
</template>

<script>
    export default {
        name: "Error"
    }
</script>

<style scoped>
 div .fault {
     text-align: center;
     color: #8f51ff;
     font-size: 80px;
     margin-top: 100px;
 }
 div .fault-message {
     text-align: center;
     color: #8f51ff;
     font-size: 35px;
     margin-top: 100px;
 }
</style>