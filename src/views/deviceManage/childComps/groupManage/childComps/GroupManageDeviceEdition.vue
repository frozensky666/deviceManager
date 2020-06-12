<template>
    <div>
        <div class="input">
            <el-input
                      placeholder="请输入内容"
                      v-model="input4">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
        <div class="table">
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        label="更新日期"
                        prop="updateTime">
                </el-table-column>
                <el-table-column
                        label="设备名称"
                        prop="deviceName">
                </el-table-column>
                <el-table-column
                        label="操作">
                    <router-link to="/deviceManage/groupManage/GroupManageEdition">
                        <el-button style="background-color: blue;color: white" size="mini">添加</el-button>
                    </router-link>
                    <el-button style="background-color: red;color: white" size="mini">删除</el-button>
                </el-table-column>
                <el-table-column
                        label="状态"
                        prop="state">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GroupManageDeviceEdition",
        data() {
            return {
                tableData: [
                    {
                        "deviceName": "string",
                        "updateTime": "2020-06-12T12:43:12.789Z",
                        "state": "已在组"
                    },
                    {
                        "deviceName": "string",
                        "updateTime": "2020-06-12T12:43:12.789Z",
                        "state": "未分组"
                    },
                ]
            }
        }
    }
</script>

<style scoped>
 .input {
     width: 500px;
     margin: 20px auto;
 }
    .table {

    }
</style>