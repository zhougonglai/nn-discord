// 简单的IndexedDB封装
/**
用法
let db=this.$idb("表名","库名"=default)
db.set(id,{name:"222"})
let db=await db.get(id)
*/
import { Store, keys, get, set, del } from 'idb-keyval'
export default function ({ app: { store, $axios } }, inject) {
  function init(tabName, storeName = 'default') {
    const db = new Store(storeName, tabName)
    return {
      get: async (key) => await get(key, db),
      del: async (key) => await del(key, db),
      keys: async () => await keys(db),
      set: async (key, value) => await set(key, value, db),
    }
  }
  inject('idb', init)

  /**
  缓存
  ExpiredTime=600000 过期时间10分钟 1000*60*10

  用法:
  let user= await this.$icache("user").get(id,getuser(id))
  */
  function icache(tabName, ExpiredTime = 600000) {
    const db = init(tabName, 'cache')
    const set = (key, data) =>
      db.set(key, { data, Expired: new Date() - 0 + ExpiredTime })
    return {
      /**
      key
      ,funGet 获取值的函数
      Refresh 是否立即刷新
      */
      get: async (key, funGet, Refresh = false) => {
        // eslint-disable-next-line prefer-const
        let _data = await db.get(key)
        let data = _data && _data.data
        if (Refresh || _data === undefined || new Date() - 0 > _data.Expired) {
          data = await funGet()
          set(key, data)
        }
        return Promise.resolve(data)
      },
      set,
      del: db.del,
      keys: db.keys,
      /**
      数组混合数据,防止重复请求
      */
      async mixing(list, getkey, getdata, mixing) {
        const keys = [...new Set(list.map(getkey))] // 不重复的key
        await Promise.all(keys.map((k) => this.get(k, getdata))) // 获取数据
        return list.map((data) => mixing(data)) // 混合数据
      },
    }
  }
  inject('icache', icache)
}
