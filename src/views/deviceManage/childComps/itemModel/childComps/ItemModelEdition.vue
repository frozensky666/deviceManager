<template>
    <div id="itemModelEdition">
        <div class="head">
            <el-button style="background-color: mediumpurple;color: white" @click="submit">确认修改</el-button>
        </div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="属性" name="itemAttr" class="wrapper">
                <div class="form">
                    <div class="form-item">
                        模型名称
                        <el-input class="item-width" v-model="modelVO.modelName" :disabled="true"></el-input>
                    </div>
                    <div class="form-item">
                        属性名称
                        <el-input class="item-width" v-model="modelVO.attrName"></el-input>
                    </div>
                    <div class="form-item">
                        属性标识
                        <el-input class="item-width" v-model="modelVO.attrIdentifier"></el-input>
                    </div>
                    <div class="form-item">
                        数据类型
                        <el-select class="item-width" v-model="modelVO.dataType" placeholder="请选择">
                            <el-option value="int"></el-option>
                        </el-select>
                    </div>
                    <div class="form-item">
                        长度
                        <el-input class="item-width" v-model="modelVO.dataLen"></el-input>
                    </div>
                    <div class="form-item">
                        单位
                        <el-input class="item-width" v-model="modelVO.dataUnit"></el-input>
                    </div>
                    <div class="form-item">
                        范围
                        <div>
                            <el-input style="width: 145px" v-model="modelVO.dataMin"></el-input>-
                            <el-input style="width: 145px" v-model="modelVO.dataMax"></el-input>
                        </div>
                    </div>
                    <div class="form-item">
                        描述
                        <el-input
                                class="item-width"
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="modelVO.modelDescription">
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
                        <span>功能名称</span>
                        <el-input class="item-width" v-model="modelVO.serviceName"></el-input>
                    </div>
                    <div class="form-item">
                        <span>标识符</span>
                        <el-input class="item-width" v-model="modelVO.serviceIdentifier"></el-input>
                    </div>
                    <div class="form-item">
                        <span>调用方式</span>
                        <div class="item-width">
                            <el-radio v-model="modelVO.callMethod" :label="0">异步</el-radio>
                            <el-radio v-model="modelVO.callMethod" :label="1">同步</el-radio>
                        </div>
                    </div>
                    <div class="form-item">
                        描述
                        <el-input
                                class="item-width"
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="modelVO.serviceDescription">
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
                    "attrIdentifier": "",
                    "attrName": "",
                    "callMethod": 0,
                    "dataLen": null,
                    "dataMax": null,
                    "dataMin": null,
                    "dataType": null,
                    "dataUnit": "",
                    "modelDescription": "",
                    "modelName": "",
                    "serviceDescription": "",
                    "serviceIdentifier": "",
                    "serviceName": ""
                },
                modelId: 0
            }
        },
        mounted() {
            this.modelVO = this.$route.params.data;
            if(this.$route.query.modelId) {
                this.modelId = this.$route.query.modelId;
            }else {
                this.$router.replace("/error");
            }
        },
        methods: {
            isNotNull(item) {
                return item != null && item !== "";
            },
            ismodelVONotNull() {
                for (let modelVOKey in this.modelVO) {
                    if(this.modelVO.hasOwnProperty(modelVOKey) &&
                        !this.isNotNull(this.modelVO[modelVOKey]))return false;
                }
                return true;
            },
            submit() {
                if(this.ismodelVONotNull()) {
                    this.$req._post("/model/update?modelId="+this.modelId,this.modelVO).then(resp => {
                        alert(resp.message);
                        this.$router.push({path:"/deviceManage/itemModel/index"});
                    }).catch(err=> {
                        console.error(err);
                    });
                }else {
                    alert("请填写完整！");
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