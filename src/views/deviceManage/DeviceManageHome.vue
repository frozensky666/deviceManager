<template>
    <div>
        <header>
            <span class="back" @click="$router.back()">&lt;back</span>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#f0f0f2" active-text-color="#2e54eb">

                <router-link to="/deviceManage/lifeTime">
                    <el-menu-item index="1">
                        设备生命周期
                    </el-menu-item>
                </router-link>
                <router-link to="/deviceManage/itemModel">
                    <el-menu-item index="2">
                            物模型
                    </el-menu-item>
                </router-link>
                <router-link to="/deviceManage/groupManage">
                    <el-menu-item index="3">
                        设备组管理
                    </el-menu-item>
                </router-link>
            </el-menu>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    export default {
        name: "DeviceManageHome",
        data() {
            return {
                activeIndex: "1"
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    .el-menu-demo {
        /*float: right;*/
        /*text-align: center;*/
        display: flex;
        justify-content: flex-end;
    }
    header {
        position: relative;
    }
    header .back{
        position: absolute;
        z-index: 1;
        left: 20px;
        line-height: 50px;
        color: blue;
        cursor: pointer;
    }
</style>