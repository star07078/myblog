<template>
    <div>
        <ul class="label-list pc1">
            <li @click="allClick">
                <span class="tag tag-unchecked" v-if="!active"
                    style="background: #3593f2; color:#fff"
                >
                    ALL
                </span>
                <span class="tag tag-unchecked" v-else>
                    ALL
                </span>
            </li>
            <li v-for="(item,i) in type" :key="i" @click='typeClick(item)'>
                <span class="tag tag-unchecked" v-if='active == item.name'
                    :style="{background:item.color}" style="color:#fff">
                    {{item.name}}
                </span>
                <span class="tag tag-unchecked" v-else>
                    {{item.name}}
                </span>
            </li>
        </ul>
        <div class="modile" ref="divshow">
            <span :class="[once ? 'show' : 'show1']" @touchstart="fn"></span>
            <ul class="label-list" ref="ulshow">
                <li @click="allClick">
                    <span class="tag tag-unchecked" v-if="!active"
                        style="background: #3593f2; color:#fff"
                    >
                        ALL
                    </span>
                    <span class="tag tag-unchecked" v-else>
                        ALL
                    </span>
                </li>
                <li v-for="(item,i) in type" :key="i" @click='typeClick(item)'>
                    <span class="tag tag-unchecked" v-if='active == item.name'
                        :style="{background:item.color}" style="color:#fff">
                        {{item.name}}
                    </span>
                    <span class="tag tag-unchecked" v-else>
                        {{item.name}}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                active: '',
                once: true,
            }
        },
        computed: {
           type(){
               return this.$store.state.studyType.list;
           },
        },
        methods: {
            fn(){
                var h = this.$refs.ulshow.offsetHeight + 'px';
                if(this.once){
                    this.$refs.divshow.style.height = h;
                }else{
                    this.$refs.divshow.style.height = '55px'
                }
                this.once = !this.once
            },
            allClick(){
                this.active = '';
                sessionStorage.setItem('typename','')
                sessionStorage.setItem('num',1)
                this.$store.commit('setStudyTypeName','http://lishaokai.cn:8080/notes/page');
                this.$axios.get('http://lishaokai.cn:8080/notes/page')
                .then(item=>{this.$store.commit('setStudyList',item.data)})
                if(location.href.endsWith('StudyDetail')){
                    window.history.back(-1); 
                }
            },
            typeClick(item){
                this.active = item.name;
                sessionStorage.setItem('typename',item.name);
                sessionStorage.setItem('num',1)
                this.$store.commit('setStudyTypeName','http://lishaokai.cn:8080/notes/getlist?name='+item.name);
                this.$axios.get('http://lishaokai.cn:8080/notes/getlist?name='+item.name)
                .then(item=>{this.$store.commit('setStudyList',item.data)})
                if(location.href.endsWith('StudyDetail')){
                    window.history.back(-1); 
                }
            }
        },
        created(){
            this.active = sessionStorage.getItem('typename');
        }
    }
</script>

<style lang='less' scoped>
    .modile{
        display: none;
    }
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px){
        .pc1{
            display: none;
        }
        .modile{
            height: 55px;
            overflow: hidden;
            transition: .5s all;
            display: block;
            position: relative;
            .show{
                position: absolute;
                top: 23px;
                right: 10px;
                display: inline-block;
                border-top: 12px solid #cecece;
                border-left: 12px solid transparent;
                border-right: 12px solid transparent;
                border-bottom: 12px solid transparent;
            }
            .show1{
                position: absolute;
                top: 10px;
                right: 10px;
                display: inline-block;
                border-top: 12px solid transparent;
                border-left: 12px solid transparent;
                border-right: 12px solid transparent;
                border-bottom: 12px solid #cecece;
            }
        }
    }
</style>