<template>
    <div>
        <div class="head">
            <router-link to="/deviceManage/lifeTime/creatDeviceLifeTime">
                <el-button>添加设备</el-button>
            </router-link>
        </div>
        <div>
            <div class="lifeTimeCard" v-for="i in 3" :key="i">
                <div class="left">
                    <div style="width: 150px">
                        <router-link to="/deviceManage/lifeTime/DeviceDetails" style="color: blue">
                            我的Ipad
                        </router-link>
                    </div>
                    <div style="border: 1px solid #ccc;padding: 3px">已开启</div>
                    <div>状态：在线</div>
                </div>
                <div class="middle">
                    <div>
                        <router-link to="/deviceManage/lifeTime/UpdateShadow" style="color: red">
                            查看影子
                        </router-link>
                    </div>
                </div>
                <div class="right">
                    <el-button size="mini">上线/下线</el-button>
                    <el-button size="mini">删除</el-button>
                    <el-button size="mini">开启/禁用</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LifeTime"
    }
</script>

<style scoped>
    .head {
        display: flex;
        justify-content: flex-end;
        height: 100px;
        align-items: center;
    }
    .head a {
        position: relative;
        right: 100px;
    }
    .lifeTimeCard {
        display: flex;
        justify-content: space-between;
        width: 80%;
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px auto;
    }
    .lifeTimeCard .left,
    .lifeTimeCard .right,
    .lifeTimeCard .middle {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .lifeTimeCard .left div,
    .lifeTimeCard .right div,
    .lifeTimeCard .middle div {
        margin: 10px;
    }

    .lifeTimeCard .right div {
        border: 1px solid #ccc;
        padding: 3px;
        border-radius: 3px;
    }
</style>