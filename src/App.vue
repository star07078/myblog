<template>
  <div class="main">
    <Left class="left" />
    <router-view></router-view>
  </div>
</template>

<script>
import Left from './components/Left'
import Ps from './components/Ps'
export default {
  name: 'App',
  components: {
    Left,
    Ps
  },
  computed: {

  },
  created(){
    this.$axios.get('http://lishaokai.cn:8080/notestype')
    .then(item=>{this.$store.commit('setStudyType',item.data)})

    this.$axios.get('http://lishaokai.cn:8080/notes/page')
    .then(item=>{this.$store.commit('setStudyList',item.data)})

    this.$axios.get('http://lishaokai.cn:8080/webnavtype')
    .then(item=>{this.$store.commit('setWebnavType',item.data)})

    if(!sessionStorage.getItem('fineList')){
      this.$axios.get('http://lishaokai.cn:8080/love/page')
      .then(item=>{this.$store.commit('setFineList',item.data)})
    }

    this.$axios.get('http://lishaokai.cn:8080/finetype')
    .then(item=>{this.$store.commit('setFineType',item.data)})

    this.$axios.get('http://lishaokai.cn:8080/webnav/list?name=圈子')
    .then(item=>{this.$store.commit('setWebnavList',item.data)})
  }
}
</script>

<style scoped>
  .main{
    height: 100%;
    display: flex;
  }
</style>

