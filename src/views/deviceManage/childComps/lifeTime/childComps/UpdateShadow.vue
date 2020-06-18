<template>
    <div class="wrapper">
        <div class="wrapper-inner">
            <el-button type="primary" style="margin-bottom: 20px" @click="updateShadow">更新影子</el-button>
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
                formatData: {},
                lastTime: "2020/6/5"
            }
        },
        mounted() {
            this.getJson(false);
        },
        methods: {
            updateShadow() {
                this.$req._get("/shadow/update",{
                    params: {
                        shadowId: this.formatData.shadowId
                    }
                }).then(resp => {
                    console.log(resp.data);
                    if(resp.data === "Success") {
                        this.getJson(false);
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            getJson(refresh) {
                if(this.$route.query.deviceId) {
                    this.$req._get("/shadow/get",{
                        params: {
                            deviceId: this.$route.query.deviceId
                        }
                    }).then(resp => {
                        this.formatData = JSON.parse(resp.data);
                        if(refresh)window.location.reload();
                    }).catch(err => {
                        console.log(err);
                    })
                }else {
                    this.$router.replace("/error");
                }
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