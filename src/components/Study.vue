<!--    
    学习笔记
-->
<template>
    <div class="blog-container">
        <StudyNav></StudyNav>
        <router-view></router-view>
    </div>
</template>
<script>
    import StudyNav from '../views/study/StudyNav'

    export default {
        components: {
            StudyNav,
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
