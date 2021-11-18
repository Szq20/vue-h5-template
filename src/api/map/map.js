import api from "./index"
// axios
import request from '@/utils/request'
import {getMapScheme} from '@/utils/map/getMapScheme.js'

export function getGeocode({address}) {
    return request({
      url: api.geocode+`?key=${api.key}&address=${encodeURIComponent(address)}`,
      method: 'get',
    })
  }

export  async function gotoTarget ({address}) {
  const res =  await getGeocode({address})
    const position = res.geocodes[0].location // 上面拿到的经纬度
    const latitude = position.split(',')[1]
    const longitude = position.split(',')[0]
    const from = {}  // 出发地，不传则默认当前位置
    const to = { name: address, longitude, latitude }; // address：目的地
    const gaodeUrl = getMapScheme(from, to, "gaode")
    // const baiduUrl = getMapScheme(from, to, "baidu")
    console.log(gaodeUrl);
    return gaodeUrl
}
