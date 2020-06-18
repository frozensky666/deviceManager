<template>
    <div id="groupManageAddition">
        <div class="wrapper">
            <div class="form">
                <div class="form-item">
                    组名称
                    <el-input class="item-width" v-model="groupVO.groupName"></el-input>
                </div>
                <div class="form-item">
                    父组
                    <el-select class="item-width" v-model="groupVO.parentId" placeholder="请选择">
                        <el-option v-for="item in groups" :key="item.groupId" :value="item.groupId" :label="item.groupName+item.groupId">
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
                            v-model="groupVO.groupDescription">
                    </el-input>
                </div>
                <div class="form-item">
                    <span></span>
                    <div>
                        <el-button style="margin-right: 10px" type="primary" @click="submit">立即创建</el-button>
                        <router-link :to="{name:'GroupManage'}">
                            <el-button>取消</el-button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GroupManageAddition",
        data() {
            return {
                groupVO: {
                    "groupDescription": "",
                    "groupName": "",
                    "parentId": null
                },
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
        },
        methods: {
            isNotNull(item) {
                return item != null && item !== "";
            },
            isGroupVONotNull() {
                for (let groupVOKey in this.groupVO) {
                    if(this.groupVO.hasOwnProperty(groupVOKey) &&
                        !this.isNotNull(this.groupVO[groupVOKey]))return false;
                }
                return true;
            },
            submit() {
                if(this.isGroupVONotNull()) {
                    this.$req._post("/group/add",this.groupVO).then(resp => {
                        alert(resp.message);
                        this.$router.push({name:"GroupManage"});
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

<style scoped>
    #groupManageAddition  .form-item{
        width: 400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px;
    }
    #groupManageAddition  .item-width {
        width: 300px;
    }
    #groupManageAddition  .wrapper {
        margin: 40px;
        border: 1px solid #ccc;
        width: 80%;
        padding: 50px 20px 50px 20px;
    }
</style>