/**
 * @数组去重
 */

/* 双重for循环 */
function unique1 (array) {
  var res = []
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < res.length; j++) {
      if (res[j] === array[i]) {
        break
      }
    }
    if (j === res.length) {
      res.push(array[i])
    }
  }
  return res
}

/* indexOf */
function unique2 (array) {
  var res = []
  for (var i = 0; i < array.length; i++) {
    if (res.indexOf(array[i]) === -1) {
      res.push(array[i])
    }
  }
  return res
}

/* 排序去重 */
function unique3 (array) {
  var res = [],
        arrayCopy = array.concat().sort(),
        seen
  for (var i = 0; i < arrayCopy.length; i++) {
    if (!i || seen !== arrayCopy[i]) {
      res.push(arrayCopy[i])
    }
    seen =arrayCopy[i]
  }
  return res
}

/* filter */
function unique4 (array) {
  var res
  res = array.filter(function (item, index) {
    return array.indexOf(item) === index
  })
  return res
}

/* hash */
function unique5 (array) {
  var res = [],
        hashMap = {}
  for (var i = 0; i < array.length; i++) {
    if (hashMap[array[i]] !== array[i]) {
      res.push(array[i])
      hashMap[array[i]] = array[i]
    }
  }
  return res
}

/* set */
function unique6 (array) {
  return Array.from(new Set(array))
}

/* set */
function unique7 (array) {
  return [...new Set(array)]
}

var testArr = [1, 2, 'a', 'a', 2, 0, 0, '1']
var newArr = unique5(testArr)
console.log(newArr)
