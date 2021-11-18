<!-- home -->
<template>
  <div class="index-container">
    首页
    <!-- <a  :href="gaodeUrl" :onerror="onerror"> 高德路线规划 </a> -->
    <button v-on:click="openMap">北京市朝阳区阜通东大街6号</button>
  </div>
</template>

<script>
import { gotoTarget } from '@/api/map/map.js'
export default {
  data() {
    return {
      gaodeUrl: '',
      baiduUrl: ''
    }
  },

  computed: {},
  created() {
    gotoTarget({ address: '北京市朝阳区阜通东大街6号' }).then(gaodeObj => {
      console.log(gaodeObj)
      this.gaodeUrl = gaodeObj.gaodeUrl
      this.gaodeObj = gaodeObj.to
    })
  },
  methods: {
    openMap(e) {
      const u = navigator.userAgent
      const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
      console.log(`https://uri.amap.com/marker?position=${this.gaodeObj.longitude},${this.gaodeObj.latitude}`)
      if (isAndroid) {
        //这个是安卓操作系统
        var d = new Date()
        var t0 = d.getTime()
        window.location.href = this.gaodeUrl
        //判断是否切出浏览器
        setTimeout(() => {
          let hidden =
            window.document.hidden ||
            window.document.mozHidden ||
            window.document.msHidden ||
            window.document.webkitHidden
          if (typeof hidden == 'undefined' || hidden == false) {
            //应用宝下载地址
            window.location.href = `https://uri.amap.com/marker?position=${this.gaodeObj.longitude},${this.gaodeObj.latitude}`
          }
        }, 2500)
      } else {
        //这个是ios操作系统
        var d = new Date()
        var t0 = d.getTime()
        window.location.href = this.gaodeUrl
        //判断是否切出浏览器
        setTimeout(() => {
          let hidden =
            window.document.hidden ||
            window.document.mozHidden ||
            window.document.msHidden ||
            window.document.webkitHidden
          if (typeof hidden == 'undefined' || hidden == false) {
            //应用宝下载地址
            window.location.href = `https://uri.amap.com/marker?position=${this.gaodeObj.longitude},${this.gaodeObj.latitude}`
          }
        }, 2500)
      }
    }
  }
}
</script>
<style lang="scss" scoped></style>
