<template>
    <div id="itemModelEdition">
        <div class="head">
            <el-button style="background-color: mediumpurple;color: white">确认修改</el-button>
        </div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="属性" name="itemAttr" class="wrapper">
                <div class="form">
                    <div class="form-item">
                        属性名称
                        <el-input class="item-width"></el-input>
                    </div>
                    <div class="form-item">
                        属性标识
                        <el-input class="item-width"></el-input>
                    </div>
                    <div class="form-item">
                        数据类型
                        <el-select class="item-width" v-model="deviceName" placeholder="请选择">
                        </el-select>
                    </div>
                    <div class="form-item">
                        长度
                        <el-input class="item-width"></el-input>
                    </div>
                    <div class="form-item">
                        单位
                        <el-input class="item-width"></el-input>
                    </div>
                    <div class="form-item">
                        范围
                        <div>
                            <el-input style="width: 145px"></el-input>-
                            <el-input style="width: 145px"></el-input>
                        </div>
                    </div>
                    <div class="form-item">
                        描述
                        <el-input
                                class="item-width"
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="textarea">
                        </el-input>
                    </div>
<!--                    <div class="form-item">-->
<!--                        <span></span>-->
<!--                        <div>-->
<!--                            <el-button style="margin-right: 10px" type="primary">编辑完成 </el-button>-->
<!--                            <router-link to="/deviceManage/lifeTime">-->
<!--                                <el-button>取消</el-button>-->
<!--                            </router-link>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>
            </el-tab-pane>
            <el-tab-pane label="服务" name="itemService" class="wrapper">
                <div class="form">
                    <div class="form-item">
                        <span>功能名称 <span class="red">*</span></span>
                        <el-input class="item-width"></el-input>
                    </div>
                    <div class="form-item">
                        <span>标识符 <span class="red">*</span></span>
                        <el-input class="item-width"></el-input>
                    </div>
                    <div class="form-item">
                        <span>调用方式 <span class="red">*</span></span>
                        <div class="item-width">
                            <el-radio v-model="radio" label="1">备选项</el-radio>
                            <el-radio v-model="radio" label="2">备选项</el-radio>
                        </div>
                    </div>
                    <div class="form-item">
                        描述
                        <el-input
                                class="item-width"
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="textarea">
                        </el-input>
                    </div>
<!--                    <div class="form-item">-->
<!--                        <span></span>-->
<!--                        <div>-->
<!--                            <el-button style="margin-right: 10px" type="primary">编辑完成</el-button>-->
<!--                            <router-link to="/deviceManage/lifeTime">-->
<!--                                <el-button>取消</el-button>-->
<!--                            </router-link>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "ItemModelEdition",
        data() {
            return {
                activeName: "itemAttr",
                modelVO: {
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
                }
            }
        }
    }
</script>

<style>
 #itemModelEdition .el-tabs__item.is-top {
     width: 100px;
     text-align: center;
 }
 #itemModelEdition .form-item{
     width: 400px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin: 10px;
 }
 #itemModelEdition .item-width {
     width: 300px;
 }
 #itemModelEdition .wrapper {
     margin: 40px;
     border: 1px solid #ccc;
     width: 80%;
     padding: 50px 20px 50px 20px;
 }
 #itemModelEdition .red {
     color: #d20703;
 }
 #itemModelEdition .head {
     display: flex;
     justify-content: flex-end;
     height: 80px;
     align-items: center;
     position: relative;
     right: 100px;
 }
</style>