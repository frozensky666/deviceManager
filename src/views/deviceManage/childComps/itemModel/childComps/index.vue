<template>
    <div id="itemModel">
        <div class="head">
            <router-link to="/deviceManage/itemModel/ItemModelAddition">
                <el-button style="background-color: mediumpurple;color: white">添加模型</el-button>
            </router-link>
        </div>
        <div>
            <el-table
                    :data="tableData"
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
                    <router-link to="/deviceManage/itemModel/ItemModelEdition">
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
        name: "ItemModel",
        data() {
            return {
                tableData: [
                    {
                        "attrIdentifier": "string",
                        "attrName": "string",
                        "callMethod": 0,
                        "dataLen": 0,
                        "dataMax": 0,
                        "dataMin": 0,
                        "dataType": "string",
                        "dataUnit": "string",
                        "modelDescription": "string",
                        "modelName": "string",
                        "serviceDescription": "string",
                        "serviceIdentifier": "string",
                        "serviceName": "string"
                    },{
                        "attrIdentifier": "string",
                        "attrName": "string",
                        "callMethod": 0,
                        "dataLen": 0,
                        "dataMax": 0,
                        "dataMin": 0,
                        "dataType": "string",
                        "dataUnit": "string",
                        "modelDescription": "string",
                        "modelName": "string",
                        "serviceDescription": "string",
                        "serviceIdentifier": "string",
                        "serviceName": "string"
                    },{
                        "attrIdentifier": "string",
                        "attrName": "string",
                        "callMethod": 0,
                        "dataLen": 0,
                        "dataMax": 0,
                        "dataMin": 0,
                        "dataType": "string",
                        "dataUnit": "string",
                        "modelDescription": "string",
                        "modelName": "string",
                        "serviceDescription": "string",
                        "serviceIdentifier": "string",
                        "serviceName": "string"
                    },
                ]
            }
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