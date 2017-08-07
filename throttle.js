/* 基于时间戳实现 */
function throttle (func, wait) {
  var previous = 0
  return function () {
    var _this = this,
          args = arguments
    var now = Date.now()
    if (now - previous > wait) {
      func.apply(_this, args)
      previous = now
    }
  }
}

/* 基于计时器实现 */
function throttle (func, wait) {
  var timer
  return function () {
    var _this = this,
          args = arguments
    if (!timer) {
      timer = setTimeout(function () {
        timer = null
        func.apply(_this, args)
      }, wait)
    }
  }
}

/**
 * 区别:
 * 基于时间戳实现-- 1、事件会立即执行  2、事件停止触发后没有办法再执行事件
 * 基于计时器实现-- 1、事件会延迟执行  2、事件停止触发后依然会再执行一次事件
 */
