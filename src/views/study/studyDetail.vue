<template>
    <div v-if="item" class="blog-detail-container">
        <div class="title-container">
            <span class="title">{{item.title}}</span>
            <ul>
                <li class="tag tag-small" v-for="label in item.list" :key="label.id"
                :style="{backgroundColor: label.color}">
                    {{label.name}}
                </li>
            </ul>
            <span class="back" @click="back">
                <img src="../../assets/back-icon.svg"
                    class="back-icon">
                返回
            </span>
        </div>
        <div class="comment-container" ref="top" @scroll="scroll">
            <Content v-bind:item="item"/>
            <Comment/>
            <svg version="1.1" x="0px" y="0px" @click='backTop' v-show='show'
	 width="50px" height="50px" viewBox="0 0 353 351" enable-background="new 0 0 353 351" xml:space="preserve">
                <g>
                    <circle fill="#272636" cx="177.491" cy="175.492" r="172.491"/>
                    <g>
                        <polygon fill="#FFFFFF" points="116.459,224.014 177.491,151.469 238.524,224.014 		"/>
                        <rect x="157.758" y="219.57" fill="#FFFFFF" width="39.466" height="57.069"/>
                    </g>
                    <g>
                        <path fill="#FFFFFF" d="M101.49,103.727v0.056c-0.365-0.029-0.732-0.056-1.104-0.056c-7.595,0-13.752,6.157-13.752,13.752
                            c0,7.596,6.157,13.752,13.752,13.752c0.373,0,0.739-0.027,1.104-0.056v0.158h126.471v-27.607H101.49z"/>
                        <path fill="#FFFFFF" d="M253.493,131.334v-0.056c0.366,0.029,0.732,0.056,1.104,0.056c7.595,0,13.752-6.157,13.752-13.752
                            c0-7.596-6.157-13.752-13.752-13.752c-0.373,0-0.739,0.027-1.104,0.056v-0.158H127.022v27.607H253.493z"/>
                    </g>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
    import Comment from './Comment.vue'
    import Content from './Content.vue'
    export default {
        data(){
            return {
                item: {},
                show: false,
                time: null
            }
        },
        components: {
            Comment,
            Content
        },
        methods: {
            back(){
                window.history.back(-1); 
            },
            scroll(){
                if(this.$refs.top.scrollTop > 200){
                    this.show = true;
                }else{
                    this.show = false;
                }
            },
            backTop(){
                clearInterval(this.time)
                var cur = 0;
                var speed = 0;
                this.time = setInterval(()=>{
                    cur = this.$refs.top.scrollTop;
                    speed = Math.floor((0 - cur)/8);

                    if(cur == 0){
                        clearInterval(this.time)
                    }else{
                        this.$refs.top.scrollTop = cur + speed;
                    }

                },20)
            }
        },
        created(){
            if(this.$route.params.item){
                this.item = this.$route.params.item;
                sessionStorage.setItem('item', JSON.stringify(this.item));
            }else{
                this.item =  JSON.parse(sessionStorage.getItem('item'));
            }
        }
    }
</script>

<style lang='less' scoped>
    svg{
        position: absolute;
        bottom: 60px;
        right: 20px;
        cursor: pointer;
    }
</style>