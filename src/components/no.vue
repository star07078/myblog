<!--    
    平面作品
-->
<template>
    <div class="no">
            <span>暂</span>
            <span>无</span>
            <span>适</span>
            <span>配</span>
            <span>移</span>
            <span>动</span>
            <span>端</span>
            <span>请</span>
            <span>见</span>
            <span>谅</span>
    </div>
</template>

<script>
    export default {
        mounted(){
            
        }
    }
</script>

<style scoped>

    .no{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        background: #000;
    }
    span{
        color: #fff;
        font-size: 1.4rem;
        /* animation: down 1s; */
    }
    .no span:nth-child(1){
        animation: down 0.5s;
    }
    .no span:nth-child(2){
        animation: down 0.6s;
    }
    .no span:nth-child(3){
        animation: down 0.7s;
    }
    .no span:nth-child(4){
        animation: down 0.8s;
    }
    .no span:nth-child(5){
        animation: down 0.9s;
    }
    .no span:nth-child(6){
        animation: down 1s;
    }
    .no span:nth-child(7){
        animation: down 1.1s;
    }
    .no span:nth-child(8){
        animation: down 1.2s;
    }
    .no span:nth-child(9){
        animation: down 1.3s;
    }
    .no span:nth-child(10){
        animation: down 1.4s;
    }
    @keyframes down{
        0%{
            opacity: 0;
            transform: translateY(-200px) scale(1.2);
            /* transform:; */
        }
        70%{
            opacity: 0.8;
            transform: translateY(30px) scale(0.9);
            /* transform:; */
        }
        100%{
            opacity: 1;
            transform: translateY(0) scale(1);
            /* transform: ; */
        }
    }

</style>