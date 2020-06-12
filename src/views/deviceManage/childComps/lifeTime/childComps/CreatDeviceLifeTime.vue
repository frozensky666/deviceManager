<template>
    <div class="wrapper">
        <div class="form">
            <div class="form-item">
                设备名称
                <el-input class="item-width"></el-input>
            </div>
            <div class="form-item">
                IP 地址
                <el-input class="item-width"></el-input>
            </div>
            <div class="form-item">
                设备模型
                <el-select class="item-width" v-model="deviceName" placeholder="请选择">
                </el-select>
            </div>
            <div class="form-item">
                通信协议
                <el-select class="item-width" v-model="protocol" placeholder="请选择">
                </el-select>
            </div>
            <div class="form-item">
                所属物模型
                <el-select class="item-width" v-model="model" placeholder="请选择" multiple>
                </el-select>
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
            <div class="form-item">
                <span></span>
                <div>
                    <el-button style="margin-right: 10px" type="primary">立即创建</el-button>
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
                deviceName: "",
                protocol:"",
                model: "",
                textarea:""
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