import Router from 'vue-router'
import Vue from 'vue'

// 学习笔记
import Study from '../components/Study'
import StudyList from '../views/study/StudyList'
import StudyDetail from '../views/study/StudyDetail'
// 前端导航
import WebNav from '../components/WebNav'
// 平面作品
import Ps from '../components/Ps'
import No from '../components/no'
import No1 from '../components/no1'
import No2 from '../components/no2'

// 我的履历
import Resume from '../components/Resume'
// 精美句子
import Fine from '../components/Fine'

Vue.use(Router)

const router = new Router({
    
//   mode: 'history',

    routes: [
        {
            path: '/',
            redirect: '/Study',
        },
        {
            path: '/Study',
            name: 'Study',
            component: Study,
            children: [
                {
                    path: '/',
                    redirect: 'StudyList'
                },
                {
                    path: 'StudyList',
                    name: 'StudyList',
                    component: StudyList,
                },
                {
                    path: 'StudyDetail',
                    name: 'StudyDetail',
                    component: StudyDetail
                }
            ]
        },
        {
            path: '/WebNav',
            name: 'WebNav',
            component: WebNav
        },
        {
            path: '/Fine',
            name: 'Fine',
            component: Fine
        },
        {
            path: '/Ps',
            name: 'Ps',
            component: Ps
        },
        {
            path: '/No',
            name: 'No',
            component: No
        },
        {
            path: '/No1',
            name: 'No1',
            component: No1
        },
        {
            path: '/No2',
            name: 'No2',
            component: No2
        },
        {
            path: '/Resume',
            name: 'Resume',
            component: Resume
        }
    ]
})

// 导出路由
export default router;