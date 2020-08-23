<template>
    <div class="add-comment-container">
        <div class="tab-container">
            <ul>
                <li class="active">Write</li>
            </ul>
        </div>
        <textarea rows="5" v-model.lazy='msg' placeholder="如有错误，请大家指出"></textarea>

        <button class="add-comment-btn" @click='submitLeave'>
            Comment
        </button>
    </div>
</template>

<script>
    export default{
        data (){
            return{
                msg: ''
            }
        },
        methods: {
            submitLeave(){
                if(this.msg == ''){
                    alert('留言不能为空');
                    return;
                }
                var time = new Date().toLocaleDateString().split('/');
                time.forEach((item,i)=>{
                    if(Number(item) < 10){
                        time[i] = 0 + item;
                    }
                })
                var date = time.join('-');
                var dateNum = Number(time.join(''))
                this.$axios({
                    url: 'http://lishaokai.cn:8080/leave/add',
                    params: {
                        html: this.msg,
                        date,
                        dateNum
                    }
                })
                .then(item=>{
                    if(item.data.err == 0){
                        alert('提交成功')
                    }
                })
                .catch(()=>{alert('提交失败')})
            }
        }

    }
</script>

<style lang="less" scoped>
    .add-comment-container{
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        border: solid 1px #eeeeee;
        margin: 30px 0;
        .tab-container{
            padding: 0 10px;
            border-bottom: solid 1px #eeeeee;
            background-color: #f9fafc;
            display: flex;
            ul{
                margin-top: 8px;
                list-style: none;
                display: flex;
                flex-grow: 1;
                margin-right: 10px;
            }
            li{
                padding: 10px;
                font-size: 14px;
                cursor: pointer;
                margin-bottom: -1px;
                color: #586069;
                user-select: none;
            }

            li.active{
                color: #24292e;
                background-color: #ffffff;
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
                border-top: solid 1px #eeeeee;
                border-left: solid 1px #eeeeee;
                border-right: solid 1px #eeeeee;
            }
        }
        textarea{
            margin: 10px;
            border-radius: 3px;
            padding: 15px 30px 15px 15px;
            border: solid 1px #eeeeee;
            background-color: #ffffff;
            font-size: 14px;
            color: #4b595f;
            outline: none;
        }
        .add-comment-btn{
            cursor: pointer;
            user-select: none;
            margin: 0 15px 15px 0;
            border-radius: 4px;
            float: right;
            background-color: #34d058;
            color: #ffffff;
            align-self: flex-end;
            padding: 8px 12px;
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            white-space: nowrap;
            vertical-align: middle;
            user-select: none;
            border: none;
            outline: none;
            &:hover{
                background-color: #34c058;
            }
            &:disabled{
                background-color: #94d3a2;
                cursor: not-allowed;
            }
        }
    }
</style>
