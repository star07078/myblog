import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        studyType: [],
        studyList: {},
        webnavType: [],
        webnavList: {},
        fineType: [],
        fineList: {},
        studyTypeName: 'http://lishaokai.cn:8080/notes/page',
        love: 'http://lishaokai.cn:8080/love/page',
    },
    getters: {
        
    },
    mutations: {
        setStudyType(state,obj){
            state.studyType = obj;
        },
        setStudyList(state,obj){
            state.studyList = obj
        },
        setWebnavType(state,obj){
            state.webnavType = obj;
        },
        setWebnavList(state,obj){
            state.webnavList = obj
        },
        setFineType(state,obj){
            state.fineType = obj
        },
        setFineList(state,obj){
            state.fineList = obj;
        },
        setStudyTypeName(state, obj){
            state.studyTypeName = obj;
        },
        setLove(state, obj){
            state.love = obj
        }
    }
})