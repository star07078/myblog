<template>
    <div>
        <!-- pc端 -->
        <div class="left-container pc">
            <div class="user-info">
                <img src="../assets/kai.jpg">
                <!-- <a href=""><img src="../assets/kai.jpg"></a> -->
                <div class="login-name">Stranger</div>
            </div>
            <ul class="other-site">
                <li>
                    <img src="../assets/github.png">
                </li>
            </ul>
            <ul class="left-menu">
                <router-link to="/Study" tag='li'><span>学习笔记</span></router-link>
                <router-link to="/WebNav" tag='li'><span>前端导航</span></router-link>
                <router-link to="/Fine" tag='li'><span>精美句子</span></router-link>
                <router-link to="/Ps" tag='li'><span>平面作品</span></router-link>
                <router-link to="/Resume" tag='li'><span>我的简历</span></router-link>
                <li><a href="http://lishaokai.cn/server/"><span>后台入口</span></a></li>
                <li><a href="http://lishaokai.cn/api"><span>API接口</span></a></li>
            </ul>
            <div class="qq-group">
                <img src="../assets/WX.jpg" title="扫一扫 添加微信"/>
            </div>
            <div class="copyright">微信扫一扫</div>
        </div>

        <!-- 移动端 -->
        <div class="navbar">
            <nav>
                <!-- 左侧图标 -->
                <a class="return"  @click="toggleMenu()">
                    <i class="icon-column" />
                </a>
                <!-- 标题 -->
                <h1 class="nav_title">
                    <p>{{title}}</p>
                </h1>
                <!-- 右侧图标 -->
                <div class="nav_r">
                    <a href="javascript:;">
                        <i class="icon-search" />
                    </a>
                </div>
            </nav>
        </div>
        <div class="left-user">
            <transition name="slide-fade">
                <div class="left-container" v-if="showMenu">
                    <div class="user-info">
                        <img src="../assets/kai.jpg">
                        <div  class="login-name">Stranger</div>
                    </div>
                    <ul class="left-menu">
                        <router-link to="/Study" tag='li'><span @click="toggleMenu()">学习笔记</span></router-link>
                        <router-link to="/WebNav" tag='li'><span @click="toggleMenu()">前端导航</span></router-link>
                        <router-link to="/Fine" tag='li'><span @click="toggleMenu()">精美句子</span></router-link>
                        <router-link to="/No" tag='li'><span @click="toggleMenu()">平面作品</span></router-link>
                        <router-link to="/Resume" tag='li'><span @click="toggleMenu()">我的简历</span></router-link>
                        <router-link to="/No1" tag='li'><span @click="toggleMenu()">后台入口</span></router-link>
                        <router-link to="/No2" tag='li'><span @click="toggleMenu()">API接口</span></router-link>
                    </ul>
                    <div class="qq-group">
                        <img src="../assets/WX.jpg" />
                    </div>
                    <div class="copyright">微信扫一扫</div>
                </div>
            </transition>
            <transition name="fade">
                <div class="left-bg" v-if="showMenu" @click="toggleMenu()"></div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                showMenu: false,
                title: '学习笔记',
            }
        },
        watch: {
            $route(to){
                var name = to.name;
                switch(name){
                    case 'StudyList':
                        this.title = '学习笔记';
                        break;
                    case 'WebNav':
                        this.title = '前端导航';
                        break;
                    case 'Fine':
                        this.title = '精美句子';
                        break;
                    case 'Resume':
                        this.title = '我的简历';
                        break;
                    case 'No':
                        this.title = '平面作品';
                        break;
                    case 'No1':
                        this.title = '后台入口';
                        break;
                    case 'No2':
                        this.title = 'API接口';
                        break;
                    case 'StudyDetail':
                        this.title = '学习笔记';
                        break;
                    default:
                        this.title = '平面作品'
                }
            }
        },
        methods: {
            toggleMenu(){
                this.showMenu = !this.showMenu;
            },
            changeTitle(n){
                console.log(window.location.href)
                this.title = this.titleNav[n];
                this.showMenu = !this.showMenu
            },
        }
    }
</script>

<style lang='less' scoped>
    .slide-fade-enter-active {
        transition: all .5s ease;
    }
    .slide-fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-active {
        left: -15rem;
        opacity: 0;
    }
    .fade-enter-active {
        transition: all .5s ease;
    }
    .fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
</style>