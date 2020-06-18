<template>
    <div class="wrapper">
        <div class="form">
            <div class="form-item">
                设备名称
                <el-input class="item-width" v-model="deviceName"></el-input>
            </div>
            <div class="form-item">
                IP 地址
                <el-input class="item-width" v-model="ipAddress"></el-input>
            </div>
            <div class="form-item">
                所属组
                <el-select class="item-width" v-model="groupId" placeholder="请选择">
                    <el-option v-for="item in groups" :key="item.groupId" :value="item.groupId" :label="item.groupName+item.groupId">
                    </el-option>
                </el-select>
            </div>
            <div class="form-item">
                通信协议
                <el-select class="item-width" v-model="protocol" placeholder="请选择">
                    <el-option v-for="item in protocolOptions" :key="item" :value="item" :label="item">
                    </el-option>
                </el-select>
            </div>
            <div class="form-item">
                所属物模型
                <el-select class="item-width" v-model="model" placeholder="请选择" multiple>
                    <el-option v-for="item in modelOptions" :key="item.modelId" :value="item.modelId" :label="item.modelName+item.modelId">
                    </el-option>
                </el-select>
            </div>
            <div class="form-item">
                描述
                <el-input
                        class="item-width"
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="description">
                </el-input>
            </div>
            <div class="form-item">
                <span></span>
                <div>
                    <el-button style="margin-right: 10px" type="primary" @click="submit">立即创建</el-button>
                    <router-link to="/deviceManage/lifeTime">
                        <el-button>取消</el-button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreatDeviceLifeTime",
        data() {
            return {
                ipAddress:"",
                deviceName: "",
                protocol:null,
                protocolOptions:[
                    "http",
                    "mqtt"
                ],
                model: null,
                modelOptions: [],
                description:"",
                groupId:null,
                groups: []
            }
        },
        mounted() {
            this.$req._get("/group/getall",{
                params: {
                    page:0,
                    size:1
                }
            }).then(resp => {
                this.$req._get("/group/getall",{
                    params: {
                        page:0,
                        size:resp.data.totalNum
                    }
                }).then(resp2 => {
                    this.groups = resp2.data.result;
                })
            });

            this.$req._get("/model/getall",{
                params: {
                    page:0,
                    size:1
                }
            }).then(resp => {
                this.$req._get("/model/getall",{
                    params: {
                        page:0,
                        size:resp.data.totalNum
                    }
                }).then(resp2 => {
                    this.modelOptions = resp2.data.result;
                })
            });
        },
        methods:{
            submit() {
                if(this.deviceName!=null && this.deviceName!=="" &&
                        this.ipAddress!=null && this.ipAddress!=="" &&
                        this.groupId !=null && this.groupId !=="" &&
                        this.protocol!=null && this.model!=="" &&
                        this.model!=null && this.model!=="" &&
                        this.description!=null && this.description!==""
                )this.$req._post("/device/add",{
                    deviceDescription: this.description,
                    deviceName: this.deviceName,
                    groupId: this.groupId,
                    ipAddress: this.ipAddress,
                    modelIds: this.model,
                    protocol: this.protocol
                }).then(resp => {
                    alert("修改成功");
                    this.$router.push("/deviceManage/lifetime/index");
                }).catch(err => {
                    alert("增加失败！");
                })
            }
        }
    }
</script>

<style scoped>
    .form-item{
         width: 400px;
         display: flex;
         justify-content: space-between;
        align-items: center;
        margin: 10px;
    }
    .item-width {
        width: 300px;
    }
    .wrapper {
        margin: 50px auto;
        border: 1px solid #ccc;
        width: 80%;
        padding: 50px 20px 50px 20px;
    }
    .form {
        width: 400px;
        margin:0 auto;
    }
</style>