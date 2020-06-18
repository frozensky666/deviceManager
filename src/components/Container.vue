<template>
    <el-container>
        <aside class="nav" >
<!--            <div class="nav" :style="{'min-height': minHeight + 'px'}">-->
                <router-link class="nav-item" to="/deviceManage"><i class="el-icon-menu"></i><span>设备管理</span></router-link>
                <router-link class="nav-item" to="/another"><i class="el-icon-location"></i><span>其他</span></router-link>
<!--            </div>-->
        </aside>
        <el-container ref="ct">
            <div class="dashboard">
                <router-view></router-view>
            </div>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Container",
        data() {
          return {
              minHeight: 0
          }
        },
        methods: {
          getHeight() {
              return window.screen.height - 183;
          }
        },
        mounted() {
            this.minHeight = this.getHeight();
        }
    }
</script>

<style scoped>
    .nav {
        background-color: rgb(74, 82, 89);
        padding-top: 40px;
        /*height: 600px; !*?*!*/
    }
    .nav-item {
        display: block;
        height: 50px;
        background-color: rgb(74, 82, 89);
        line-height: 50px;
        padding-left: 20px;
        cursor: pointer;
        color: #fff;
    }
    .nav-item:hover {
        background-color: #fff;
        color: rgb(74, 82, 89);
    }
    .nav-item span {
        margin-left: 10px;
    }
    .dashboard {
        width: 100%;
        background-color: #fff;
        margin-left: 180px;
    }
    .router-link-active {
        color: yellow;
    }
    aside {
        width: 180px;
        position: fixed;
        top: 0;
        bottom: 0;
        left:0;
        display: block;
    }
</style>