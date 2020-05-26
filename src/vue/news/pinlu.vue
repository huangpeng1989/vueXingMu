<template>
    <div class="zhu">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要bb的内容（最多吐槽110个字）"
        maxlength="110" v-model="measage">
        </textarea>
        <mt-button type="primary" size="large" @click="add">发表评论</mt-button>
        <div class="cmt-list">
               
                 <div class="cmt-item" v-for="(item,i) in pinluList"  :key="item.id" >
                       <div class="cmt-title">
                            第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.username }}&nbsp;&nbsp; &nbsp;&nbsp;发表时间:{{ item.time | dataFormat }}
                        </div>
                         <div class="cmt-body">
                           {{ item.body }}
                        </div>
                 </div>


        </div>
        <mt-button type="danger" size="large" plain @click="getList">加载更多</mt-button>
    </div>
</template>
<script>
 //导入组件js
    import {Toast} from 'mint-ui';
export default {
    data() {
        return {
            pinluList:[
                {id:1,username:'黄鹏',time:new Date(),body:'我看到这个很开心1234'},
                {id:2,username:'彭剑',time:new Date(),body:'我看到这个很开心123qwew'},
                {id:3,username:'李文建',time:new Date(),body:'我看到这个很开心ewewe'},
                {id:4,username:'文琴',time:new Date(),body:'我看到这个很开心ewewq'},
                {id:5,username:'孙益',time:new Date(),body:'我看到这个很开心ewqew'},
                {id:6,username:'孙灿',time:new Date(),body:'我看到这个很开心ewew'},
                {id:7,username:'何雨豪',time:new Date(),body:'我看到这个很开心ewqeqwe'}
            ],
            measage:'',
            newid:134
        }
    },
    props:["id"],
    methods: {
        getList(){
            var newList = [
                {id:8,username:'黄鹏',time:new Date(),body:'我看到这个很开心1234'},
                {id:9,username:'彭剑',time:new Date(),body:'我看到这个很开心123qwew'},
                {id:10,username:'李文建',time:new Date(),body:'我看到这个很开心ewewe'},
                {id:11,username:'文琴',time:new Date(),body:'我看到这个很开心ewewq'},
                {id:12,username:'孙益',time:new Date(),body:'我看到这个很开心ewqew'},
                {id:13,username:'孙灿',time:new Date(),body:'我看到这个很开心ewew'},
                {id:14,username:'何雨豪',time:new Date(),body:'我看到这个很开心ewqeqwe'}
            ]
            this.pinluList = this.pinluList.concat(newList);
        },
        add(){
            if(this.measage.trim() == ""){
                return Toast({
                        message:'请输入要评论的信息！',
                        position:'middle',
                        duration:2000
                    });
            }
            var obj = {id:this.newid++,username:'黄鹏',time:new Date(),body:this.measage};
            this.pinluList.unshift(obj);
            this.measage="";
        }
    }
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