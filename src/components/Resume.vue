<!--    
    我的履历
-->

<template>
    <div class="resume">
        <ResumeTop class="resumetop" />
        <ResumeContent class="resumecontent" />
    </div>
</template>

<script>
    import ResumeTop from '../views/resume/resumetop.vue'
    import ResumeContent from '../views/resume/resumecontent.vue'
    export default {
        data(){
            return {
                
            }
        },
        components: {
            ResumeTop,
            ResumeContent
        }
    }
</script>

<style lang='less' scoped>
    .resume{
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow-y: auto;
    }
</style>