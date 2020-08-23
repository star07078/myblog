<template>
    <div class="resumecontent">
        <!-- <span class="navlist" @click="isShow">导航</span> -->
        <nav ref="fn" class="pc">
            <span><a href="#aboutme">关于我</a></span>
            <span><a href="#education">教育背景</a></span>
            <span><a href="#experience">个人经历</a></span>
            <span><a href="#skill">专业技能</a></span>
        </nav>
        <article id="aboutme" class="white">
            <h1>关于我</h1>
            <div class="container">
                <div class="about">
                    <ul>
                        <li>
                            我对自己的定位: 主攻前端,同时在其他方面打打辅助。我不希望过于依赖别人,即使没有后端没有设计没有产品经理,我依然想要把这个产品做到完美。毕竟全栈才能最高效地解决问题。
                        </li>
                        <li>
                            我对工作的态度: 第一,要高效完成自己的本职工作。第二,要在完成的基础上寻找完美。第三,要在完美的基础上,与其他同事 互相交流学习,互相提升。工作是一种生活方式,不是一份养家糊口的差事。
                        </li>
                        <li>
                            我怎样克服困难: 不用百度是第一原则,在遇到技术问题时我往往会去Google上寻找答案。但通常很多问题 并不一定已经被人解决,所以熟练地阅读源码、看手册自己做实验才是最终解决问题的办法。相信事实的结果,自己动手去做。
                        </li>
                        <li>
                            怎样保持自己的视野: 我一直认为软件开发中视野极其重要,除了在 Twitter 上关注业界大牛,Github 也是每周必刷。保持开阔视野才能找到更酷的解决方案。
                        </li>
                        <li>
                            我的优势: 热爱技术、自学能力强,有良好的自我认知。全面的技能树与开阔的视野,良好的心态、情商与沟通能力。
                        </li>
                        <li>
                            我的劣势: 非科班出身没有科班同学对算法的熟练掌握,但我一直在死磕技术,弥补不足。
                        </li>
                    </ul>
 
                </div>
            </div>
        </article>
        <article id="education" class="black">
            <h1>教育背景</h1>
            <div class="work">
                <div class="info">
                    <div class="info-time">
                        <span>
                            2014.09 - 2016.12
                        </span>
                    </div>
                    <div class="info-text">
                        <div>
                            <h5>
                                <span></span>
                                邢台技师学院
                            </h5>
                            <ul>
                                <li>学历：中专</li>
                                <li>专业：电子商务</li>
                                <li>课程：营销，photoshtop</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="info1">
                    <div class="info-time">
                        <span>
                            2019至今
                        </span>
                    </div>
                    <div class="info-text">
                        <div>
                            <h5>
                                <span></span>
                                石家庄科技信息职业学院
                            </h5>
                            <ul>
                                <li>学历：大专</li>
                                <li>专业：计算机网络技术</li>
                                <li>学习形式：成人高考</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <article id="experience" class="white">
            <h1>个人经历</h1>
            <div class="work">
                <div class="info">
                    <div class="info-time">
                        <span>
                            2016.09-2017.11
                        </span>
                    </div>
                    <div class="info-text">
                        <div>
                            <h5>
                                <span></span>
                                森茂广告设计
                            </h5>
                            <ul>
                                <li>性质：广告公司</li>
                                <li>岗位：平面设计</li>
                                <li>软件：PS,AI,cdr,以及cad的简单运用</li>
                                <li>工作内容：负责店内的大小事务</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="info1">
                    <div class="info-time">
                        <span>
                            2018.03-2018.08
                        </span>
                    </div>
                    <div class="info-text">
                        <div>
                            <h5>
                                川梦网络科技有限公司
                            </h5>
                            <ul>
                                <li>性质：教育公司</li>
                                <li>岗位：web前端</li>
                                <li>工作内容：日常代码编写，UI设计</li>
                                <li>项目地址：团队解散，地址已被取消</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <div class="info-time">
                        <span>
                            2018.10 - 至今
                        </span>
                    </div>
                    <div class="info-text">
                        <div>
                            <h5>
                                河北博景信息科技有限公司
                            </h5>
                            <ul>
                                <li>性质：科技公司</li>
                                <li>岗位：web前端</li>
                                <li>工作内容：政府网站，原生js，jq编写</li>
                                <li>项目地址：政府内网，外网不能访问</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <article id="skill" class="black">
            <h1><span style="color:red;">部分</span>专业技能</h1>
            <div class="skill-left">
                <ul>
                    <li>
                        <h6>Photoshop <p>75%</p> </h6>
                        <div>
                            <span style="width:75%;"></span>
                        </div>
                    </li>
                    <li>
                        <h6>HTML+CSS <p>95%</p></h6>
                        <div>
                            <span style="width:95%;"></span>
                        </div>
                    </li>
                    <li>
                        <h6>Jquery <p>80%</p> </h6>
                        <div>
                            <span style="width:80%;"></span>
                        </div>
                    </li>
                    <li>
                        <h6>Vue <p>80%</p> </h6>
                        <div>
                            <span style="width:80%;"></span>
                        </div>
                    </li>
                    <li>
                        <h6>webpack <p>80%</p> </h6>
                        <div>
                            <span style="width:80%;"></span>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h6>Adobe illustrator <p>70%</p> </h6>
                        <div>
                            <span style="width:70%;"></span>
                        </div>
                    </li>
                    
                    <li>
                        <h6>HTML5+CSS3 <p>80%</p> </h6>
                        <div>
                            <span style="width:80%;"></span>
                        </div>
                    </li>
                    <li>
                        <h6>BootStrap <p>70%</p> </h6>
                        <div>
                            <span style="width:70%;"></span>
                        </div>
                    </li>
                    <li>
                        <h6>Git <p>70%</p> </h6>
                        <div>
                            <span style="width:70%;"></span>
                        </div>
                    </li>
                    <li>
                        <h6>node <p>70%</p> </h6>
                        <div>
                            <span style="width:70%;"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </article>
        <article class="black">
            <h1 class="end"><a href="tel:18233015651" style="color: #fff">了解更多请咨询本人</a></h1>
        </article>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                show: false,
            }
        },
        methods: {
            isShow(){
                if(this.show){
                    this.$refs.fn.style.height = '200px';
                }else{
                    this.$refs.fn.style.height = 0;
                }
                this.show = !this.show
            }
        }
    }
</script>

<style lang="less" scoped>
    @font-face {
        font-family: 'icomoon';
        src: url('../../css/fonts/icomoon.eot');
        src: url('../../css/fonts/icomoon.eot') format('embedded-opentype'),
        url('../../css/fonts/icomoon.ttf') format('truetype'),
        url('../../css/fonts/icomoon.woff') format('woff'),
        url('../../css/fonts/icomoon.svg') format('svg');
        font-weight: normal;
        font-style: normal;
    }
    // .navlist{
    //     display: none;
    // }
    .before(){
        font-family: 'icomoon' !important;
        content: "\e91c";
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 1.2rem;
        text-align: center;
        line-height: 2.4rem;
        background: darkcyan;
        position: absolute;
        top: 0.2rem;
        transition: 0.5s;
    }
    .h5(){
        border: 1px double #F7E612;
        padding: 1rem 3rem;
        display: inline-block;
        color: #F7E612;
        position: relative;
    }
    .border(@right,@left){
        content: '';
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid @right;
        border-left: 10px solid @left;
        position: absolute;
    }
    .white{
        background: #fff;
        color: #777;
    }
    .black{
        background: #000;
        color: #eee;
    }
    .resumecontent{
        display: flex;
        flex-grow: 1;
        flex-shrink: 1;
        flex-direction: column;
        min-width: 860px;;
        nav{
            background: #008B8B;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Overlock', cursive;
            span{
                height: 50px;
                padding:0 40px;
                line-height: 50px;
                margin:0 6px;
                text-align: center;
                a{
                    color: #eee;
                }
                &:hover{
                    background: #eee;
                    transform: scale(0.8);
                    transition: all 0.5s;
                    a{
                        color: #008B8B;
                        transform: scale(1.4)
                    }
                }
            }
        }
        article{
            padding: 3rem 0;
            h1{
                text-align: center;
                font-size: 2rem;
                color: #008B8B;
                padding: 0.5rem 0;
                border-bottom: 1px double #F3E000;
                width: 80%;
                margin: 0 auto;
            }
            .container{
                width: 80%;
                margin: 0 auto;
                padding: 0 2rem;
                .about{
                    padding: 20px;
                    li{
                        list-style-type: disc;
                        text-indent: 2em;
                        line-height: 2em;
                        color: #000;
                        margin-top: 4px;
                    }
                }
            }
            .work{
                margin-top: 30px;
                padding-top: 30px;
                padding: 0 10%;
                .info{
                    display: flex;
                    flex-direction: row;
                    margin-bottom: 50px;
                    .info-time{
                        flex: 1 1 0;
                        padding-top: 30px;
                        span{
                            padding: 0.8rem 2rem;
                            background: darkcyan;
                            position: relative;
                            margin-right: 60px;
                            float: right;
                            &:after{
                                .border(transparent,darkcyan);
                                right: -19px;
                                top: 13px;
                                color: #fff;
                            }
                        }
                    }
                    .info-text{
                        flex: 1 1 0;
                        border-left: 1px solid #ccc;
                        div{
                            padding: 30px 0 0 3rem;
                            h5{
                                .h5();
                                &:before{
                                    color: #fff;
                                    .before();
                                    left: -4.3rem;
                                }
                            }
                            li{
                                // text-indent: 2em;
                                // margin: 24px 0;
                                margin: 10px 0;
                            }
                        }
                    }
                    &:hover{
                        
                        h5{
                            &:before{
                                color: #F7E612;
                                transform: scale(1.42);
                            }
                        }
                    }
                }
                .info1{
                    display: flex;
                    flex-direction: row-reverse;
                    margin-bottom: 50px;
                    .info-time{
                        flex: 1 1 0;
                        padding-top: 30px;
                        span{
                            padding: 0.8rem 2rem;
                            background: darkcyan;
                            position: relative;
                            margin-left: 60px;
                            float: left;
                            &:after{
                                .border(darkcyan,transparent);
                                left: -19px;
                                top: 13px;
                            }
                        }
                    }
                    .info-text{
                        flex: 1 1 0;
                        border-right: 1px solid #ccc;
                        div{
                            padding: 30px 0 0 3rem;
                            text-align:right;
                            h5{
                                .h5();
                                right: 3rem;
                                &:before{
                                    color: #fff;
                                    .before();
                                    right: -4.3rem;
                                }
                            }
                            ul{
                                margin-right: 3rem;
                                li{
                                    margin: 10px 0;
                                }
                            }
                        }
                    }
                    &:hover{
                        h5{
                            &:before{
                                transform: scale(1.42);
                                color: #F7E612;
                            }
                        }
                    }
                }
            }
            .end{
                border: none;
            }
        }
        #experience{
            color: #000;
            .info-time{
                color: #fff;
            }
            h5{
                color: #000;
            }
        }
        #skill{
            .skill-left{
                width: 80%;
                margin: 0 auto;
                font-size: 20px;
                display: flex;
                ul{
                    flex: 1 1 0;
                    padding: 20px;
                    font-size: 1.6rem;
                    li{
                        margin: 40px 0;
                        p{
                            float:right;
                        }
                    }
                    div{
                        width: 100%;
                        height: 10px;
                        background: #eee;
                        border-radius: 4px;
                        overflow: hidden;
                        margin-top: 10px;
                        span{
                            // background: #fff;
                            display: block;
                            height: 100%;
                            background: linear-gradient(90deg, rgba(160, 160, 134, 0.6) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 75%, transparent 75%, transparent);
                            transform: skewX(-45deg);
                            background-size: 40px;
                            animation: move linear 2s infinite;
                        }
                        @keyframes move{
                            0%{
                                background-position: 40px 0;
                            }
                            100%{
                                background-position: 0 0;
                            }
                        }
                    }
                }
            }
        }
    }
    @media only screen and (min-device-width:320px) and (max-device-width:480px){
        .resumecontent{
            width: 100%;
            min-width: 100%;
            .navlist{
                display: block;
                flex: 0 0 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #008B8B;
                color: #eee;
            }
            .pc{
                height: 0;
                transition: 0.5s;
            }
            nav{
                display: flex;
                flex-direction: column;
                overflow: hidden;
                height: 0;
            }
            article{
                padding: 0;
                .container{
                    width: 94%;
                    margin: 0 auto;
                    padding: 0;
                    .about{
                        margin: 0;
                        p{
                            font-size: 1em;
                            line-height: 1.4em;
                        }
                    }
                }
                .work{
                    padding: 0;
                    .info{
                        display: block;
                        margin-bottom: 20px;
                        .info-time{
                            padding: 0;
                            span{
                                float: none;
                                display: inline-block;
                            }
                        }
                        .info-text{
                            div{
                                padding: 0;
                                h5{
                                    border: none;
                                    color: #fff;
                                    display: block;
                                    position: none;
                                    padding: 10px 0 0 20px;
                                    font-size: 1.2rem;            
                                    &:before{
                                        content: '';
                                    }
                                }
                                ul{
                                    margin: 20px;
                                    font-size: 1rem;
                                }
                            }
                        }
                    }
                    .info1{
                        display: block;
                        margin-bottom: 20px;
                        .info-time{
                            padding: 0;
                            span{
                                float: right;
                                display: inline-block;
                            }
                            &:after{
                                content: '';
                                display: block;
                                clear: both;
                            }
                        }
                        .info-text{
                            border: none;
                            flex: none;
                            div{
                                padding: 0;
                                h5{
                                    border: none;
                                    right: 0;
                                    color: #fff;
                                    display: block;
                                    position: none;
                                    font-size: 1rem;
                                    padding: 10px 20px 0 0;
                                    &:before{
                                        content: '';
                                        width: 0;
                                        padding: 0;
                                        height: 0;
                                        position: none;
                                    }
                                }
                                ul{
                                    margin: 20px;
                                    font-size: 1rem;
                                }
                            }
                        }
                    }
                }
                .end{
                    font-size: 1rem;
                    padding: 20px 0;
                }
            }
            #skill{
                .skill-left{
                    flex-direction: column;
                    ul{
                        padding: 0 20px;
                        li{
                            margin-bottom: 0;
                        }
                    }
                    &:last-child{
                        padding-bottom: 30px;
                    }
                }
            }
        }

    }
</style>