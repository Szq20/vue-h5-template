
// 获取地图scheme， 经纬度坐标类型要求为gcj02不然位置会有偏差from 从哪里
export function getMapScheme (from, to, mapType = "gaode") {
    const u = navigator.userAgent;
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  
    const andriodBaidu = (to) => {
      return `bdapp://map/direction?destination=name:${to.name}|latlng:${to.latitude},${to.longitude}&coord_type=gcj02&mode=driving&src=andr.jianghu.jianhao`
    }
  
    const iOSBaidu = (to) => {
      return `baidumap://map/direction?destination=name:${to.name}|latlng:${to.latitude},${to.longitude}&coord_type=gcj02&mode=driving&src=ios.jianghu.jianhao`
    }
  
    const andriodGaode = (to) => {
      return `amapuri://route/plan/?sourceApplication=mhc&dlat=${to.latitude}&dlon=${to.longitude}&dname=${to.name}&dev=0&t=0`
    }
  
    const iOSGaode = (to) => {
      return `iosamap://path?sourceApplication=mhc&dlat=${to.latitude}&dlon=${to.longitude}&dname=${to.name}&dev=0&t=0`
    }
    if(mapType == "baidu") {
      if(isAndroid) {
        return andriodBaidu(to)
      } else {
        return iOSBaidu(to)
      }
    } else if(mapType == "gaode") {
      if (isAndroid) {
        return andriodGaode(to)
      } else {
        return iOSGaode(to)
      }
    }
  }