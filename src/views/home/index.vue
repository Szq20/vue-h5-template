<!-- home -->
<template>
  <div class="index-container">
    首页
    <a :href="gaodeUrl" :onerror="onerror"> 高德路线规划 </a>
  </div>
</template>

<script>
import {gotoTarget} from '@/api/map/map.js'
export default {
  data() {
    return {
      gaodeUrl:'',
      baiduUrl:''
    }
  },

  computed: {},

  created() {
    gotoTarget({address:'北京市朝阳区阜通东大街6号'}).then(gaodeUrl=>{
      console.log(gaodeUrl)
      this.gaodeUrl = gaodeUrl
    })
  },
  methods: {
  onerror(e){
    console.log(e,'onerror');
  }
  }
}
</script>
<style lang="scss" scoped>

</style>
