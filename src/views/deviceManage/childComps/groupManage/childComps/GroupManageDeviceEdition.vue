<template>
    <div>
        <div class="input">
            <el-input
                      placeholder="请输入内容"
                      v-model="input">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-button @click="search(0,5)">确定</el-button>
        </div>
        <div class="table">
            <el-table
                    :data="devices"
                    style="width: 100%">
                <el-table-column
                        label="更新日期"
                        prop="updateTime">
                </el-table-column>
                <el-table-column
                        label="设备名称"
                        prop="name">
                </el-table-column>
                <el-table-column
                        label="操作">
                    <template slot-scope="scope">
                        <router-link :to="{name:'DeviceDetails',query:{
                            deviceId: scope.row.deviceId
                        }}">
                            <el-button style="background-color: blue;color: white" size="mini">查看详情</el-button>
                        </router-link>
                        <el-button style="background-color: red;color: white" size="mini" @click="deleteDevice(scope.row.deviceId)">删除</el-button>
                    </template>
                </el-table-column>
<!--                <el-table-column-->
<!--                        label="状态"-->
<!--                        prop="status">-->
<!--                </el-table-column>-->
            </el-table>

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
        name: "GroupManageDeviceEdition",
        data() {
            return {
                devices: [],
                total: 100,
                pageSize: 5,
                currentPage: 0,
                groupId: 0,
                input: ""
            }
        },
        mounted() {
            if(this.$route.query.groupId) {
                this.groupId = this.$route.query.groupId;
            }else {
                this.$router.replace("/error");
            }
            this.getDevices(0,this.pageSize);
        },
        methods: {
            getDevices(page,size) {
                this.$req._get("/device/groupdevice?groupId="+this.groupId,{
                    params: {
                        page,
                        size
                    }
                }).then(resp => {
                    this.devices = resp.data.result;
                    this.total = resp.data.totalNum;
                    return this.devices;
                });
            },
            pageChange(current) {
                if(this.input!=null&&this.input!=="")this.search(current-1,this.pageSize);
                else this.getDevices(current-1,this.pageSize);
            },
            deleteDevice(deviceId) {
                confirm("确定删除？") &&
                this.$req._delete("/device/delete", {
                    params: {
                        deviceId: deviceId
                    }
                }).then(resp => {
                    alert(resp.data);
                    location.reload();
                }).catch(err => {
                    alert("删除失败！");
                })
            },
            search(page,size) {
                if(this.input !== "" && this.input !=null) {
                    this.$req._get("/device/getbyname",{
                        params: {
                            page,
                            size,
                            name: this.input
                        }
                    }).then(resp => {
                        this.devices = resp.data.result;
                        this.devices.forEach(device => {
                            device.name = device.deviceName;
                        });
                        this.total = resp.data.totalNum;
                    })
                }else {
                    this.getDevices(0,this.pageSize);
                }
            }
        }
    }
</script>

<style scoped>
 .input {
     width: 500px;
     margin: 20px auto;
     display: flex;
     justify-content: center;
 }
    .table {

    }
</style>