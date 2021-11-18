export function openMap({ gaodeUrl, gaodeObj }) {
  const u = navigator.userAgent
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
  if (isAndroid) {
    //这个是安卓操作系统
    var d = new Date()
    var t0 = d.getTime()
    window.location.href = gaodeUrl
    //判断是否切出浏览器
    setTimeout(() => {
      let hidden =
        window.document.hidden || window.document.mozHidden || window.document.msHidden || window.document.webkitHidden
      if (typeof hidden == 'undefined' || hidden == false) {
        //网页高德地址
        window.location.href = `https://uri.amap.com/marker?position=${gaodeObj.longitude},${gaodeObj.latitude}`
      }
    }, 2500)
  } else {
    //这个是ios操作系统
    var d = new Date()
    var t0 = d.getTime()
    window.location.href = gaodeUrl
    //判断是否切出浏览器
    setTimeout(() => {
      let hidden =
        window.document.hidden || window.document.mozHidden || window.document.msHidden || window.document.webkitHidden
      if (typeof hidden == 'undefined' || hidden == false) {
        //网页高德地址
        window.location.href = `https://uri.amap.com/marker?position=${gaodeObj.longitude},${gaodeObj.latitude}`
      }
    }, 2500)
  }
}
