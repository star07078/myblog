<template>
    <div class="blog-list-container">
        <div class="table-header">
            <span>名称</span>
            <span>创建时间</span>
        </div>
        <ul v-if="list && list.length > 0" class="issue-list">
            <li class="issue-item" v-for='(item,n) in list' :key="n">
                <span style="flex-grow:1;">{{item.html}}</span>
                <span class="time">
                    {{item.date}}
                </span>
            </li>
        </ul>
        <div class="no-data" v-else>
            <div></div>
            <span>该分类下还没有文章哦</span>
        </div>
        <div class="bottom-bar">
            <input type="text" class="fl query" placeholder="按文章标题或内容搜索..." @keyup.enter='getkw($event)'/>
            <Page></Page>
        </div>
    </div>
</template>
<script>
    import Page from './page'
    export default {
        props: ['msg'],
        data(){
            return {
                src: 'http://lishaokai.cn:8080/love/getkw'
            }
        },
        methods: {
            getkw(ev){
                this.$axios.get(this.src + '?kw=' + ev.target.value)
                .then(item=> this.$store.commit('setFineList',item.data))
            }
        },
        components: {
            Page,
        },
        watch: {
            msg(){
                switch(this.msg){
                    case '爱情':
                        this.src = 'http://lishaokai.cn:8080/love/getkw';
                        break;
                    case '留言':
                        this.src = 'http://lishaokai.cn:8080/leave/getkw';
                        break;
                    default:
                        this.src = 'http://lishaokai.cn:8080/fine/getkw'
                }
            }
        },
        computed: {
            list(){
                return this.$store.state.fineList.list;
            }
        },
    }
</script>

<style lang="less" scoped>
.no-data {
    flex-grow: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    div {
        flex: 1 0 160px;
        background: url("../../assets/no-data.png") no-repeat bottom;
    }
    span {
        flex-grow: 1;
        text-align: center;
        padding: 30px;
        color: #666666;
        font-size: 14px;
    }
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px){
    .issue-list{
        display: block;
        .issue-item{
            height: auto;
            padding: 0.8rem;
        }
    }
}
</style>