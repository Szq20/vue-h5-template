<!-- home -->
<template>
  <div class="index-container">
    首页
    <button v-on:click="openMap({ gaodeUrl, gaodeObj })">北京市朝阳区阜通东大街6号</button>
  </div>
</template>

<script>
import { gotoTarget } from '@/api/map/map.js'
import { openMap } from '@/utils/map/openMap.js'

export default {
  data() {
    return {}
  },

  computed: {},
  created() {
    /**
     * 高德地图导航使用
     */
    this.openMap = openMap
    gotoTarget({ address: '北京市朝阳区阜通东大街6号' }).then(gaodeObj => {
      this.gaodeUrl = gaodeObj.gaodeUrl
      this.gaodeObj = gaodeObj.to
    })
  },
  methods: {}
}
</script>
<style lang="scss" scoped></style>
