<template>
    <div id="groupManage">
        <div class="head">
            <router-link to="/deviceManage/groupManage/GroupManageAddition">
                <el-button style="background-color: mediumpurple;color: white">添加组</el-button>
            </router-link>
        </div>
        <div>
            <el-table
                    :data="groups"
                    style="width: 100%">
                <el-table-column
                        label="组名">
                    <template slot-scope="scope">
                        {{scope.row.groupName}}({{scope.row.groupId}})
                    </template>
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
                    <template slot-scope="scope">
                        <router-link :to="{name:'GroupManageDeviceEdition',query:{
                                groupId: scope.row.groupId
                            },}">
                            <el-button style="background-color: mediumpurple;color: white" size="mini">编辑设备</el-button>
                        </router-link>
                        <router-link :to="{name:'GroupManageEdition',query:{
                                groupId: scope.row.groupId
                            },
                            params: {
                                data: scope.row
                            }}">
                            <el-button style="background-color: blue;color: white" size="mini">编辑</el-button>
                        </router-link>
                        <el-button style="background-color: red;color: white" size="mini" @click="deleteGroup(scope.row.groupId)">删除</el-button>
                    </template>
                </el-table-column>
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
        name: "GroupManage",
        data() {
            return {
                groups: [
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
                ],
                total: 100,
                pageSize: 5,
                currentPage: 0,
            }
        },
        mounted() {
            this.getGroups(0,this.pageSize);
        },
        methods: {
            getGroups(page,size) {
                this.$req._get("/group/getall",{
                    params: {
                        page,
                        size
                    }
                }).then(resp => {
                    this.groups = resp.data.result;
                    this.total = resp.data.totalNum;
                })
            },
            pageChange(current) {
                this.getGroups(current-1,this.pageSize);
            },
            deleteGroup(groupId) {
                confirm("确定删除？") &&
                this.$req._delete("/group/delete", {
                    params: {
                        groupId: groupId
                    }
                }).then(resp => {
                    alert(resp.data);
                    location.reload();
                }).catch(err => {
                    alert("删除失败！");
                })
            },
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