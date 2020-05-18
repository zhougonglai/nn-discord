# 网络请求

```
提供$http 普通的网络请求
$api 默认的接口封装  返回名称统一成code,msg,data
```

# api 封装

```js
this.$axios.get('friend/is/1/2').then(({ data, code, msg }) => {
  console.log(data)
})
```

# websocket

> websocket 兼容 ie10,所以不需要 socket.io

# 全局断网提示

>
