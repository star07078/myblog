<template>
    <div>
        <ul class="label-list pc1">
            <li @click="loveClick">
                <span class="tag tag-unchecked" :class='{checked:active=="My Love"}'>
                    My Love
                </span>
            </li>
            <li @click='leaveClick'>
                <span class="tag tag-unchecked" :class='{checked:active=="留言"}'>
                    留言
                </span>
            </li>
            <li v-for="(item,i) in type" :key="i" @click='typeClick(item)'>
                <span class="tag tag-unchecked" :class='{checked:active==item.name}'>
                    {{item.name}}
                </span>
            </li>
        </ul>
        <div class="modile" ref="divshow">
            <span :class="[once ? 'show' : 'show1']" @touchstart="fn"></span>
            <ul class="label-list" ref="ulshow">
                <li @click="loveClick">
                    <span class="tag tag-unchecked" :class='{checked:active=="My Love"}'>
                        My Love
                    </span>
                </li>
                <li @click='leaveClick'>
                    <span class="tag tag-unchecked" :class='{checked:active=="留言"}'>
                        留言
                    </span>
                </li>
                <li v-for="(item,i) in type" :key="i" @click='typeClick(item)'>
                    <span class="tag tag-unchecked" :class='{checked:active==item.name}'>
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
                active: 'My Love',
                once: true,
            }
        },
        computed: {
           type(){
               return this.$store.state.fineType.list;
           }  
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
            leaveClick(){
                if(this.active == '留言'){ return }
                this.active = '留言';
                this.$emit('changeMsg','留言');
                sessionStorage.setItem('fineNameType','留言')
                this.$store.commit('setLove','http://lishaokai.cn:8080/leave/page');
                this.$axios.get('http://lishaokai.cn:8080/leave/page')
                .then(item=>{
                    this.$store.commit('setFineList',item.data)
                    sessionStorage.setItem('fineList',JSON.stringify(item.data))
                })
            },
            loveClick(){
                if(this.active == 'My Love'){return};
                this.active = 'My Love';
                this.$emit('changeMsg','My Love');
                sessionStorage.setItem('fineNameType','My Love')
                this.$store.commit('setLove','http://lishaokai.cn:8080/love/page');
                this.$axios.get('http://lishaokai.cn:8080/love/page')
                .then(item=>{
                    this.$store.commit('setFineList',item.data);
                    sessionStorage.setItem('fineList',JSON.stringify(item.data));
                })
            },
            typeClick(item){
                if(this.active == item.name){return};
                this.active = item.name;
                this.$emit('changeMsg','all');
                sessionStorage.setItem('fineNameType',item.name)
                this.$store.commit('setLove','http://lishaokai.cn:8080/fine/getlist?name='+item.name);
                this.$axios.get('http://lishaokai.cn:8080/fine/getlist?name='+item.name)
                .then(item=>{
                    this.$store.commit('setFineList',item.data)
                    sessionStorage.setItem('fineList',JSON.stringify(item.data))
                })
            }
        },
        created(){
            this.active = sessionStorage.getItem('fineNameType');
            if(this.active == null){
                this.active = 'My Love';
            }else{
                var list = JSON.parse(sessionStorage.getItem('fineList'));
                this.$store.commit('setFineList', list);
            }
        }
    }
</script>

<style lang='less' scoped>
    .checked{
        background: #6d8298;
        color: #fff;
    }
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