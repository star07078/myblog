<!--    
    平面作品
-->
<template>
    <div @mousedown.prevent="down" @mousewheel="wheel">
        <div class="wrap" ref="wrap">
            <img :src="img[0]" style="transform: rotateY(0deg) translateZ(300px)">
            <img :src="img[1]" style="transform: rotateY(40deg) translateZ(300px)">
            <img :src="img[2]" style="transform: rotateY(80deg) translateZ(300px)">
            <img :src="img[3]" style="transform: rotateY(120deg) translateZ(300px)">
            <img :src="img[4]" style="transform: rotateY(160deg) translateZ(300px)">
            <img :src="img[5]" style="transform: rotateY(200deg) translateZ(300px)">
            <img :src="img[6]" style="transform: rotateY(240deg) translateZ(300px)">
            <img :src="img[7]" style="transform: rotateY(280deg) translateZ(300px)">
            <img :src="img[8]" style="transform: rotateY(320deg) translateZ(300px)">
            <img :src="img[9]" style="transform: rotateY(360deg) translateZ(300px)">
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                // detafult: 'this.src="'+require('../../assets/ps/detafultimg.gif')+'"',
                n: null,
                per: 800,
                nowx: null,
                nowy: null,
                ix: -10,
                iy: 0,
                img: [
                    require('../../assets/ps/huace--01.jpg'),
                    require('../../assets/ps/huace--02.jpg'),
                    require('../../assets/ps/huace--03.jpg'),
                    require('../../assets/ps/huace--04.jpg'),
                    require('../../assets/ps/huace--05.jpg'),
                    require('../../assets/ps/huace--06.jpg'),
                    require('../../assets/ps/huace--07.jpg'),
                    require('../../assets/ps/huace--08.jpg'),
                    require('../../assets/ps/huace--09.jpg'),
                    require('../../assets/ps/huace--10.jpg'),
                ]
            }
        },
        methods: {
            down(ev){
                var time = Date.now();
                let x = ev.clientX;
                let y = ev.clientY;
                let wrap = this.$refs.wrap;
                document.onmousemove = (ev) => {
                    this.nowx = this.iy - (ev.clientX - x)/10;
                    this.nowy = this.ix - (ev.clientY - y)/10;
                    wrap.style.transform = `perspective(${this.per}px) rotateX(${this.nowy}deg) rotateY(${-this.nowx}deg)`;
                }
                document.onmouseup = () => {
                    var timer = Date.now();
                    if(timer - time < 200){
                        document.onmouseup = document.onmousemove = null;
                    }else{
                        this.ix = this.nowy;
                        this.iy = this.nowx;
                        document.onmousemove = document.onmouseup = null;
                    }
                }
            },
            wheel(ev){
                var ev = ev || event;
                var wrap = this.$refs.wrap;
                if(ev.wheelDelta){
                    if(ev.wheelDelta > 0){
                        this.per = this.per <= 400 ? 400 : this.per -= 15;
                        wrap.style.transform = `perspective(${this.per}px) rotateX(${this.nowy}deg) rotateY(${-this.nowx}deg)`;
                    }else{
                        this.per = this.per >= 1500 ? 1500 : this.per += 15;
                        wrap.style.transform = `perspective(${this.per}px) rotateX(${this.nowy}deg) rotateY(${-this.nowx}deg)`;
                    }
                }else{
                    if(ev.detail > 0){
                        this.per = this.per <= 400 ? 400 : this.per -= 15;
                        wrap.style.transform = `perspective(${this.per}px) rotateX(${this.nowy}deg) rotateY(${-this.nowx}deg)`;
                    }else{
                        this.per = this.per >= 1500 ? 1500 : this.per += 15;
                        wrap.style.transform = `perspective(${this.per}px) rotateX(${this.nowy}deg) rotateY(${-this.nowx}deg)`;
                    }
                }
            }
        },
        computed: {
            // text(){
            //     this.n = 360 / (this.img.length - 1);
            //     var html = '';
            //     this.img.forEach((item,i) => {
            //         html += `<img src="${item}" style="transform: rotateY(${i * this.n}deg) translateZ(300px)"/>`;
            //     })
            //     return html;
            // }
        }   
    }
</script>

<style>

    .wrap{
        width: 150px;
        height: 130px;
        position: relative;
        margin: 200px auto 0;
        transform: perspective(800px) rotateX(-10deg) rotateY(0deg);
        transform-style: preserve-3d;
        perspective-origin:center bottom;
    }
    .css{
        animation: out 1s linear;
    }
    .wrap img{
        position: absolute;
        top: 0;
        left: 0;
        width: 150px;
        height: 100px;
        border-radius: 10px;
        box-shadow: 0 0 10px #fff;
        background: #ccc;;
        -webkit-box-reflect: below 20px -webkit-linear-gradient(bottom, rgba(0,0,0,0.5) 0%,transparent 80%);
    }
    @keyframes out{
        0%{
            transform: perspective(0)scale(0) rotateX(0);
        }
        100%{
            transform: perspective(800px) scale(1) rotateX(-10deg);
        }
    }
</style>