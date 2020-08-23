<template>
    <div class="resumetop">
        <div class="banner">
            <div class="img">
                <img src="../../assets/resume/1.jpg" alt="">
            </div>
            <div class="message">
                <h2>hello</h2>
                <h1>My name is Lishaokai</h1>
                <p>web前端 / node / 平面设计</p>
                <hr />
                <ul>
                    <li>
                        <b>出生年月</b><span>1995-07-07</span>
                    </li>
                    <li>
                        <b>联系电话</b><span>182-3301-5651</span>
                    </li>
                    <li>
                        <b>个人邮箱</b><span>577911127@qq.com</span>
                    </li>
                    <li>
                        <b>家庭地址</b><span>河北省邢台市临城县</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
    .resumetop{
        width: 100%;
        background: url('../../assets/resume/banner.jpg') no-repeat center center;
        display: flex;
        flex: 0 0 400px;
        flex-direction: row;
        min-width: 860px;
        .banner{
            flex-grow: 1;
            flex-shrink: 1;
            margin: 50px;
            display: flex;
            border: 0;
            .img{
                flex: 0 0 200px;
                padding: 0 40px 0 60px;
                display: flex;
                align-items: flex-start;
                img{
                    width: 100%;
                    border: 2px solid #ccc;
                    box-sizing: border-box;
                }
            }
            .message{
                flex-grow: 1;
                flex-shrink: 1;
                padding: 0 20px;
                color: #fff;
                h2{
                    color: #000;
                    font-size: 0.8rem;
                    font-family: 'Overlock', cursive;
                    height: 30px;
                    width: 60px;
                    line-height: 30px;
                    text-align: center;
                    background: #F3E000;
                    display: inline-block;
                    align-items: baseline;
                    position: relative;
                    margin-bottom: 10px;
                    &:after{
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 5px;
                        transform: translateY(9px);
                        width: 0;
                        height: 0;
                        border-top: 10px solid #F3E000;
                        border-left: 10px solid transparent;
                        border-right: 10px solid transparent;
                    }
                }
                h1{
                    font-size: 1.5rem;
                    font-family: 'Overlock', cursive;
                }
                p{
                    font-size: 1rem;
                    margin:6px 0;
                    letter-spacing: 2px;
                    font-family: 'Overlock', cursive;
                }
                hr{
                    border: none;
                    border-top: 1px solid #fff;
                    margin: 20px 0;
                }
                ul{
                    li{
                        display: flex;
                        margin: 15px 0;
                        b{
                            flex: 0 0 120px;
                            font-weight: 800;
                        }
                        span{
                            color: #eee;
                            flex-grow: 1;
                        }
                    }
                }
            }
        }
    }

@media only screen and (min-device-width:320px) and (max-device-width:480px){
    .resumetop{
        margin-top: 2.4rem;
        min-width: 100%;
        width: 100%;
        .banner{
            margin:10px;
            flex-direction: column;
            .img{
                flex:0 0 120px;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    // height: 100%;
                    width: 100px;
                }
            }
        }
    }
}

    
</style>