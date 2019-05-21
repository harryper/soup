<style scoped>
    .page {
        border: 0px solid #ffffff;
        background: #ffffff;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .headers {
        position: 'fixed';
        width: '100%';
        height: 70px;
    }
    .logo {
        width: 100px;
        height: 30px;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .again {
        float: right;
        margin-right: 50px;
    }
    .content {
        text-align: center;
        width: 100%;
    }
    .content .card {
        margin: 230px auto 0;
        width: 100%;
        position: relative;
        padding: 0px;
        /*box-shadow:1px 1px 15px rgb(197, 224, 240);阴影 左右偏移,上下偏移,阴影度,阴影色*/
    }
/*     .content .card:hover {
        box-shadow: 0 10px 50px rgb(197, 224, 240);
        -webkit-transform: translateY(-5px);
        -moz-transform: translateY(-5px);
        transform: translateY(-5px)
    } */
    .content .btn  {
        width: 200px !important;
        font-size: 16px;
        border: 1px solid #ffffff;
        border-radius: 20px;
        margin: 250px auto 0;
    }
    .footer {
        text-align: center;
        width: 100%;
        height: 50px;
        background: #ffffff
    }
</style>
<template>
    <div class="page">
        <div class="headers">
            <div class="logo">
            </div>
            <div class="again">
                <Button type="success"  @click="getContent" style="width:80%" ghost>again</Button>
            </div>
        </div>
        <div class="content">
            <div class="card">
                <p style="font-size:25px;">{{content.ascContent}}</p>
            </div>
            <div class="btn">
                <div>截屏分享朋友圈</div>
                <div class="next"> <Button type="success"  @click="getContent" style="width:80%" ghost>www.harryper.top</Button> </div>
            </div>
        </div>
        <div class="footer">
        </div>
    </div>

</template>
<script>
    import servicePaths from '../../config/path'
    export default {
        data() {
            return {
                ...servicePaths(),
                content: [],
            }
        },
        methods: {
            getContent() {
                this.$axios({
                    url:`${this.userServicePath}/antiChickenSoup/findRandomContent`,
                    method:'get'
                }).then((response) => {
                    let data = response.data;
                    if(data.status==='success'){
                        this.content = data.content;
                    }else{
                        this.$Notice.error({
                            title: '查询应用信息失败',
                            desc: data.message
                        });
                    }
                }).catch((err) => {
                    this.$Notice.error({
                        title: '查询应用信息失败'
                    });
                })
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.getContent();
            })
        },
    }
</script>