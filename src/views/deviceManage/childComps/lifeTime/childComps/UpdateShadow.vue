<template>
    <div class="wrapper">
        <div class="wrapper-inner">
            <el-button type="primary" style="margin-bottom: 20px">更新影子</el-button>
            <div>
                <div style="margin-bottom: 20px">最后更新时间 {{lastTime}}</div>
                <json-viewer
                        style="width: 500px"
                        :value="formatData"
                        :expand-depth="5"
                        copyable
                        boxed
                        sort
                ></json-viewer>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UpdateShadow",
        data() {
            return {
                formatData: {
                    a:{
                        name: "这是一段测试的Json脚本",
                        int: 123456,
                        double1: 123.456789,
                        double2: 123.456789,
                        double3: 123.456789,
                        double4: 123.456789,
                        double5: 123.456789,
                        double6: 123.456789,
                        double7: 123.456789,
                        double8: 123.456789,
                        double9: 123.456789,
                        double10: 123.456789,
                        double11: 123.456789,
                        inner: {
                            aaa: "妙啊"
                        }
                    }
                },
                lastTime: "2020/6/5"
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        margin: 50px auto;
        border: 1px solid #ccc;
        width: 80%;
        padding: 50px 20px 50px 20px;
    }
    .wrapper-inner {
        margin: 0 auto;
        width: 520px;
    }
</style>