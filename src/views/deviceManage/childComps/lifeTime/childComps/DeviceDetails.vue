<template>
    <div class="wrapper">
        <div class="details">
            <pre>设备名称: {{deviceName}}</pre>
            <pre>设备描述: {{deviceDescription}}</pre>
            <pre>设备状态: {{deviceStatus?"已开启":"已禁用"}}</pre>
            <pre>上线日期: {{createTime}}</pre>
            <pre>更新日期: {{updateTime}}</pre>
            <pre>　所属组: {{groupName}}</pre>
            <pre>通讯协议: {{protocol}}</pre>
            <pre>IP　地址: {{ipAddress}}</pre>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DeviceDetails",
        data() {
            return {
                "createTime": "2020-06-16T09:54:55.273Z",
                "deviceDescription": "string",
                "deviceId": 0,
                "deviceName": "string",
                "deviceStatus": 0,
                "groupName": 0,
                "ipAddress": "string",
                "onlineTime": "2020-06-16T09:54:55.273Z",
                "protocol": "string",
                "updateTime": "2020-06-16T09:54:55.273Z"
            }
        },
        mounted() {
            if(this.$route.query.deviceId) {
                this.$req._get("/device/get",{
                    params: {
                        deviceId: this.$route.query.deviceId
                    }
                }).then(resp => {
                    this.deviceName = resp.data.deviceName;
                    this.deviceDescription = resp.data.deviceDescription;
                    this.deviceStatus = resp.data.deviceStatus;
                    this.createTime = resp.data.createTime;
                    this.groupId = resp.data.groupId;
                    this.protocol = resp.data.protocol;
                    this.ipAddress = resp.data.ipAddress;
                    return this.groupId
                }).then(groupId => {
                    this.$req._get("/group/get",{
                        params: {
                            groupId
                        }
                    }).then(resp => {
                        this.groupName = resp.data.groupName;
                    })
                })
            }else {
                this.$router.replace("/error");
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
 .details {
     width: 300px;
     margin:0 auto;
 }
</style>