/* 包装一个防抖函数 */
function debounce (func, wait, immediate) {
  var timer,
        wait = wait || 300
  return function () {
    var _this = this, // 保存this指向和参数
          args = arguments
    timer && clearTimeout(timer)
    if (immediate) {
      var callNow = !timer
      timer = setTimeout(function () {
        func.apply(_this, args)
      }, wait)
      callNow && func.apply(_this, args)
    } else {
      timer = setTimeout(function () {
        func.apply(_this, args)
      }, wait)
    }
  }
}
