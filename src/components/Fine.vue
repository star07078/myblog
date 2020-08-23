<!--    
    文案
-->
<template>
    <div class="blog-container">
        <FineNav @changeMsg="changeMsg"></FineNav>
        <FineList :msg='msg'/>
    </div>
</template>
<script>
    import FineNav from '../views/fine/FineNav'
    import FineList from '../views/fine/FineList'

    export default {
        data(){
            return {
                msg: '爱情'
            }
        },
        components: {
            FineNav,
            FineList
        },
        methods:{
            changeMsg(name){
                this.msg = name;
            }
        }
    }
</script>

<style lang="less" scoped>
    .blog-container{
        // width: calc(100% - 200px);
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }
</style>
