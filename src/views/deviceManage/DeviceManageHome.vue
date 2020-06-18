<template>
    <div>
        <header>
            <span class="back" @click="$router.back()">&lt;back</span>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#f0f0f2" active-text-color="#2e54eb">

                <router-link to="/deviceManage/lifeTime/index">
                    <el-menu-item index="lifeTime">
                        设备生命周期
                    </el-menu-item>
                </router-link>
                <router-link to="/deviceManage/itemModel/index">
                    <el-menu-item index="itemModel">
                            物模型
                    </el-menu-item>
                </router-link>
                <router-link to="/deviceManage/groupManage/index">
                    <el-menu-item index="groupManage">
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
                activeIndex: null
            }
        },
        mounted() {
            let path = this.$route.path.split("/");
            this.activeIndex = path[2];
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
        color: #006aff;
        cursor: pointer;
    }
</style>