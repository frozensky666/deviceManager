<template>
    <div id="groupManage">
        <div class="head">
            <router-link to="/deviceManage/groupManage/GroupManageAddition">
                <el-button style="background-color: mediumpurple;color: white">添加模型</el-button>
            </router-link>
        </div>
        <div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        label="组名"
                        prop="groupName">
                </el-table-column>
                <el-table-column
                        label="父组"
                        prop="parentId">
                </el-table-column>
                <el-table-column
                        label="描述"
                        prop="groupDescription">
                </el-table-column>
                <el-table-column
                        label="操作">
                    <router-link to="/deviceManage/groupManage/GroupManageDeviceEdition">
                        <el-button style="background-color: mediumpurple;color: white" size="mini">编辑设备</el-button>
                    </router-link>
                    <router-link to="/deviceManage/groupManage/GroupManageEdition">
                        <el-button style="background-color: blue;color: white" size="mini">编辑</el-button>
                    </router-link>
                    <el-button style="background-color: red;color: white" size="mini">删除</el-button>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GroupManage",
        data() {
            return {
                tableData: [
                    {
                        "createTime": "2020-06-12T12:10:34.263Z",
                        "groupDescription": "string",
                        "groupId": 0,
                        "groupName": "string",
                        "parentId": 0,
                        "updateTime": "2020-06-12T12:10:34.263Z"
                    },
                    {
                        "createTime": "2020-06-12T12:10:34.263Z",
                        "groupDescription": "string",
                        "groupId": 0,
                        "groupName": "string",
                        "parentId": 0,
                        "updateTime": "2020-06-12T12:10:34.263Z"
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    #groupManage .head {
        display: flex;
        justify-content: flex-end;
        height: 100px;
        align-items: center;
    }
    #groupManage .head a {
        position: relative;
        right: 100px;
    }
</style>