<!--    
    前端导航
-->
<template>
    <div class="df">
        <Webnav1></Webnav1>
    </div>
</template>

<script>
import Webnav1 from '../views/webnav/webnav1'
    export default {
        data(){
            return {
                
            }
        },
        components: {
            Webnav1
        }
    }
</script>

<style lang='less' scoped>
    .df{
        display: flex;
        flex-grow: 1;
    }
</style>