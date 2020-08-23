<template>
    <div class="comment">
        <div class="comment-title">
            <div>
                <img src="../../assets/kai.jpg" alt="">
                <span>Stranger</span>
            </div>
            <span class="time">{{date}}</span>
        </div>
        <article class="comment-body markdown-body" v-html="html">
        </article>
    </div>
</template>

<script>
    export default {
        props: [
            'item'
        ],
        data(){
            return {
                html: '',
                date: '',
            }
        },
        mounted(){
            if(this.item){
                sessionStorage.setItem('html',this.item.html);
                sessionStorage.setItem('date',this.item.date);
                this.html = this.item.html;
                this.date = this.item.date;
            }else{
                this.html = sessionStorage.getItem('html');
                this.date = sessionStorage.getItem('date');
            }
        }
    }
</script>