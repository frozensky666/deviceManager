<template>
    <el-container>
        <el-aside width="18%">
            <div class="nav" :style="{height: height + 'px'}">
                <router-link class="nav-item" to="/deviceManage"><i class="el-icon-menu"></i><span>设备管理</span></router-link>
                <router-link class="nav-item" to="/another"><i class="el-icon-location"></i><span>其他</span></router-link>
            </div>
        </el-aside>
        <el-container>
            <div class="dashboard">
                <router-view></router-view>
            </div>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Container",
        computed: {
            height() {
                return window.screen.height - 183;
            }
        },
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
    }
    .router-link-active {
        color: yellow;
    }
</style>