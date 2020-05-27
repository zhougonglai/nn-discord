/**
导出函数
pinyinfirst

Sorter排序方法

//返回值为[ {key:"A":value:[]}]
groupby(list)
*/
import { strChineseFirstPY, oMultiDiff } from './pinyin_code'
// 拼音首字母,其他内容改为#
export function pinyinfirst(name) {
  const first = query(name)
  return /[A-Z]/.test(first) ? first : '#'
}
/**
 * 字母排序
 * @param a
 * @param b
 * @returns {number}
 */
export function Sorter(a, b) {
  a = query(a) // 获取首字母
  b = query(b) // 获取首字母
  if (/^\d/.test(a) ^ /^\D/.test(b)) return a > b ? 1 : a === b ? 0 : -1
  return a > b ? -1 : a === b ? 0 : 1
}
// 首字母分组
export function groupby(list, getkey) {
  const db = list.map((m) => ({ key: pinyinfirst(getkey(m)), value: m }))
  return [...new Set(db.map((a) => a.key))].sort(Sorter).map((key) => {
    return { key, value: db.filter((a) => a.key === key).map((a) => a.value) }
  })
}
/**
 *查看拼音首字母缩写
 */
function query(str) {
  if (str === '') return
  const arrRslt = makePy(str)
  let spelling
  // 判断是否为多音字
  if (arrRslt.length > 1) {
    spelling = arrRslt[1]
  } else {
    spelling = arrRslt[0]
  }
  return spelling.substr(0, 1)
}

/**
 * 参数,中文字符串
 * 返回值:拼音首字母串数组
 * @param str
 * @returns {*}
 */
function makePy(str) {
  if (typeof str !== 'string')
    throw new Error(-1, '函数makePy需要字符串类型参数!')
  const arrResult = [] // 保存中间结果的数组
  for (let i = 0, len = str.length; i < len; i++) {
    // 获得unicode码
    const ch = str.charAt(i)
    // 检查该unicode码是否在处理范围之内,在则返回该码对映汉字的拼音首字母,不在则调用其它函数处理
    arrResult.push(checkCh(ch))
  }
  // 处理arrResult,返回所有可能的拼音首字母串数组
  return mkRslt(arrResult)
}

// 检出拼音
function checkCh(ch) {
  const uni = ch.charCodeAt(0)
  // 如果不在汉字处理范围之内,返回原字符,也可以调用自己的处理函数
  if (uni > 40869 || uni < 19968) return ch // dealWithOthers(ch);
  // 检查是否是多音字,是按多音字处理,不是就直接在strChineseFirstPY字符串中找对应的首字母
  return oMultiDiff[uni]
    ? oMultiDiff[uni]
    : strChineseFirstPY.charAt(uni - 19968)
}

// 处理arrResult,返回所有可能的拼音首字母串数组
function mkRslt(arr) {
  let arrRslt = ['']
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i]
    const strlen = str.length
    if (strlen === 1) {
      for (let k = 0; k < arrRslt.length; k++) {
        arrRslt[k] += str
      }
    } else {
      const tmpArr = arrRslt.slice(0)
      arrRslt = []
      for (let k = 0; k < strlen; k++) {
        // 复制一个相同的arrRslt
        const tmp = tmpArr.slice(0)
        // 把当前字符str[k]添加到每个元素末尾
        for (let j = 0; j < tmp.length; j++) {
          tmp[j] += str.charAt(k)
        }
        // 把复制并修改后的数组连接到arrRslt上
        arrRslt = arrRslt.concat(tmp)
      }
    }
  }
  return arrRslt
}
