<template>
    <div>
        <div class="head">
            <router-link to="/deviceManage/lifeTime/creatDeviceLifeTime">
                <el-button>添加设备</el-button>
            </router-link>
        </div>
        <div>
            <div class="lifeTimeCard" v-for="i in devices" :key="i.deviceId">
                <div class="left">
                    <div style="width: 150px">
                        <router-link :to="{path:'/deviceManage/lifeTime/DeviceDetails',query:{deviceId:i.deviceId}}"
                                     style="color: blue">
                            {{i.deviceName}}
                        </router-link>
                    </div>
                    <div style="border: 1px solid #ccc;padding: 3px">{{i.deviceStatus? "已开启":"已禁用"}}</div>
                    <div>状态：{{i.isOnline? "在线":"下线"}}</div>
                </div>
                <div class="middle">
                    <div>
                        <router-link :to='{path:"/deviceManage/lifeTime/UpdateShadow",query:{deviceId:i.deviceId}}' style="color: red">
                            查看影子
                        </router-link>
                    </div>
                </div>
                <div class="right">
                    <el-button size="mini" type="success" @click="updateOnline(i.deviceId,i.isOnline)">{{i.isOnline? "下线":"上线"}}</el-button>
                    <el-button size="mini" type="primary" @click="updateStatus(i.deviceId,i.deviceStatus)">{{i.deviceStatus? "禁用":"开启"}}</el-button>
                    <el-button size="mini" type="danger" @click="deleteDevice(i.deviceId)">删除</el-button>
                </div>
            </div>
            <el-pagination
                    style="margin-left: 100px"
                    background
                    layout="prev, pager, next"
                    :total="total"
                    :page-size="pageSize"
                    :current-page.sync="currentPage"
                    @current-change="pageChange"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LifeTime",
        data() {
            return {
                devices: [],
                currentPage: 0,
                pageSize : 5,
                total: 1000
            }
        },
        mounted() {
            this.getDevices(0,this.pageSize);
        },
        methods: {
            getDevices(page,size) {
                this.$req._get("/device/getall",{
                    params: {
                        page,
                        size
                    }
                }).then(resp => {
                    this.devices = resp.data.result;
                    this.total = resp.data.totalNum;
                })
            },
            pageChange(current) {
                this.getDevices(current-1,this.pageSize);
            },
            updateOnline(deviceId,status) { //上下线
                confirm("确认"+(status?"下线":"上线")+"？") &&
                this.$req._post("/device/updateonline",{
                    deviceId,
                    status: status === 0? 1:0
                }).then(resp => {
                    // console.log(resp);
                    window.location.reload();
                });
            },
            updateStatus(deviceId,status) { //开启禁用
                confirm("确认"+(status?"禁用":"开启")+"？") &&
                this.$req._post("/device/updatestatus",{
                    deviceId,
                    status: status === 0? 1:0
                }).then(resp => {
                    window.location.reload();
                });
            },
            deleteDevice(deviceId) {
                confirm("确认删除？") &&
                this.$req._delete("/device/delete",{
                    params: {
                        deviceId
                    }
                }).then(resp => {
                    window.location.reload();
                });
            }
        }
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