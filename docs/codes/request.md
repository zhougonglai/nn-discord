# 网络请求

```
提供$http 普通的网络请求
$api 默认的接口封装  返回名称统一成code,msg,data
```

# api 封装

```js
this.$api
  .put(action, data)
  .then((code, msg, data) => {
    //code==100的视为正常
  })
  .watch((code, msg, data) => {
    //code!=100,增加通用的错误处理 500也加入到code里面
  })
```

# websocket

> websocket 兼容 ie10,所以不需要 socket.io

# 全局断网提示

> 
