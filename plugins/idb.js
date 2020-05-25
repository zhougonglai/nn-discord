/**
用法

*/
import Dexie from 'dexie'

const version = 1 // 修改结构需要增加版本号
export default function ({ app: { store, $axios } }, inject) {
  const $db = new Dexie('default')
  // $db.version(version).stores({ chat: '++id,timestamp,fromUid,msgType,messageId' })
  inject('idb', $db)

  /**
  缓存
  ExpiredTime=600000 过期时间10分钟 1000*60*10

  用法:
  let user= await this.$icache("user").get(id,getuser(id))
  */
  function icache(tabName, ExpiredTime = 600000) {
    const dbcache = new Dexie('cache')
    dbcache.version(version).stores({ db: 'key,Expired' })
    const db = $db.cache
    const set = (key, data) =>
      db.put({
        key: `${tabName}}${key}`,
        tabName,
        data,
        Expired: new Date() - 0 + ExpiredTime,
      })
    return {
      db,
      /**
      key
      ,funGet 获取值的函数
      Refresh 是否立即刷新
      */
      get: async (key, funGet, Refresh = false) => {
        // eslint-disable-next-line prefer-const
        let _data = await db.get(`${tabName}}${key}`)
        let data = _data && _data.data
        if (Refresh || _data === undefined || new Date() - 0 > _data.Expired) {
          data = await funGet()
          set(`${tabName}}${key}`, data)
        }
        return Promise.resolve(data)
      },
      set,
      delete: db.delete,
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
