<template>
    <div class="blog-list-container">
        <div class="table-header">
            <span>名称</span>
            <span>创建时间</span>
        </div>
        <ul v-if="list && list.length > 0" class="issue-list">
            <li class="issue-item" v-for='(item,n) in list' :key="n">
                <router-link :to="{name: 'StudyDetail', params: {item: item}}" tag="a">
                    {{item.title}}
                </router-link>
                <ul>
                    <li class="tag tag-small" 
                        v-for='(attr,i) in item.list' :keys="i"
                        :style='{backgroundColor: attr.color}'
                    >
                        {{attr.name}}
                    </li>
                </ul>
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
        data(){
            return {

            }
        },
        methods: {
            getkw(ev){
                this.$axios.get('http://lishaokai.cn:8080/notes/kw?kw='+ev.target.value)
                .then(item=> this.$store.commit('setStudyList',item.data))
            }
        },
        components: {
            Page,
        },
        computed: {
            list(){
                return this.$store.state.studyList.list;
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
</style>