<template>
    <div id="groupManageEdition">
        <div class="wrapper">
            <div class="form">
                <div class="form-item">
                    组名称
                    <el-input class="item-width"></el-input>
                </div>
                <div class="form-item">
                    父组
                    <el-select class="item-width" v-model="model" placeholder="请选择">
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
                        <el-button>取消</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GroupManageEdition"
    }
</script>

<style scoped>
    #groupManageEdition   .form-item{
        width: 400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px;
    }
    #groupManageEdition   .item-width {
        width: 300px;
    }
    #groupManageEdition   .wrapper {
        margin: 40px;
        border: 1px solid #ccc;
        width: 80%;
        padding: 50px 20px 50px 20px;
    }
</style>