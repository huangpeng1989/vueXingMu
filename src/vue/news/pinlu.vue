<template>
    <div class="zhu">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder1="请输入要bb的内容（最多吐槽110个字）"
        maxlength="110">
        </textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
                 <div class="cmt-item">
                       <div class="cmt-title">
                            第一楼：用记： 发表时间:2020-09-09 10:10:10
                        </div>
                         <div class="cmt-body">
                            我看到这个很开心
                        </div>
                 </div>

                 <div class="cmt-item">
                       <div class="cmt-title">
                            第一楼：用记： 发表时间:2020-09-09 10:10:10
                        </div>
                         <div class="cmt-body">
                            我看到这个很开心
                        </div>
                 </div>

                 <div class="cmt-item">
                       <div class="cmt-title">
                            第一楼：用记： 发表时间:2020-09-09 10:10:10
                        </div>
                         <div class="cmt-body">
                            我看到这个很开心{{ id }}
                        </div>
                 </div>

                 <div class="cmt-item">
                       <div class="cmt-title">
                            第一楼：用记： 发表时间:2020-09-09 10:10:10
                        </div>
                         <div class="cmt-body">
                            我看到这个很开心
                        </div>
                 </div>

                 <div class="cmt-item">
                       <div class="cmt-title">
                            第一楼：用记： 发表时间:2020-09-09 10:10:10
                        </div>
                         <div class="cmt-body">
                            我看到这个很开心
                        </div>
                 </div>

                 <div class="cmt-item">
                       <div class="cmt-title">
                            第一楼：用记： 发表时间:2020-09-09 10:10:10
                        </div>
                         <div class="cmt-body">
                            我看到这个很开心
                        </div>
                 </div>

        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:["id"]
}
</script>


<style scoped>
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0px;
    }
    .cmt-item{
        font-size:13px;
    }
    .cmt-title{
        background-color: #ccc;
        line-height: 30px;
    }
    .cmt-body{
        line-height: 35px;
        text-indent:2em;
    }
    .cmt-list{
        margin:5px 0px;
    }
</style>