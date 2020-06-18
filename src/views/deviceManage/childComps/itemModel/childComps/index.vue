<template>
    <div id="itemModel">
        <div class="head">
            <router-link to="/deviceManage/itemModel/ItemModelAddition">
                <el-button style="background-color: mediumpurple;color: white">添加模型</el-button>
            </router-link>
        </div>
        <div>
            <el-table
                    :data="models"
                    style="width: 100%">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="属性名称">
                                <span>{{ props.row.attrName }}</span>
                            </el-form-item>
                            <el-form-item label="属性标识">
                                <span>{{ props.row.attrIdentifier }}</span>
                            </el-form-item>
                            <el-form-item label="数据类型">
                                <span>{{ props.row.dataType }}</span>
                            </el-form-item>
                            <el-form-item label="长度">
                                <span>{{ props.row.dataLen }}</span>
                            </el-form-item>
                            <el-form-item label="单位">
                                <span>{{ props.row.dataUnit }}</span>
                            </el-form-item>
                            <el-form-item label="范围">
                                <span>{{ props.row.dataMin }} - {{props.row.dataMax}}</span>
                            </el-form-item>
                            <el-form-item label="描述">
                                <span>{{ props.row.modelDescription }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column
                        label="模型名称"
                        prop="modelName">
                </el-table-column>
                <el-table-column
                        label="服务类型"
                        prop="serviceName">
                </el-table-column>
                <el-table-column
                        label="操作">
                    <template slot-scope="scope">
                        <router-link :to='{name:"ItemModelEdition",query:{
                                modelId: scope.row.modelId
                            },
                            params: {
                                data: scope.row
                            }
                        }'>
                            <el-button style="background-color: blue;color: white" size="mini">编辑</el-button>
                        </router-link>
                        <el-button style="background-color: red;color: white" size="mini" @click="deleteModel(scope.row.modelId)">删除</el-button>
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
        name: "ItemModel",
        data() {
            return {
                models: [],
                currentPage: 0,
                pageSize : 5,
                total: 1000,
            }
        },
        mounted() {
            this.getModels(0,this.pageSize);
        },
        methods: {
            getModels(page,size) {
                this.$req._get("/model/getall",{
                    params: {
                        page,
                        size
                    }
                }).then(resp => {
                    this.models= resp.data.result;
                    this.total = resp.data.totalNum;
                })
            },
            pageChange(current) {
                this.getGroups(current-1,this.pageSize);
            },
            deleteModel(modelId) {
                confirm("确定删除？") &&
                this.$req._delete("/model/delete", {
                    params: {
                        modelId: modelId
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

<style>
    #itemModel .head {
        display: flex;
        justify-content: flex-end;
        height: 100px;
        align-items: center;
    }
    #itemModel .head a {
        position: relative;
        right: 100px;
    }
    #itemModel .demo-table-expand {
        font-size: 0;
    }
    #itemModel .demo-table-expand .el-form-item__label {
        width: 90px;
        color: #99a9bf;
        font-weight: 700;
        /*color: red;*/
    }
    #itemModel .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>