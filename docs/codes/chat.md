# websocket

```
codecCommon/PktType
消息类型
E_CMD_PACKET_UNKNOWN = 0,
E_CMD_PACKET_HEARBEAT = 1,
E_CMD_PACKET_HEARBEATACK = 2,
E_CMD_PACKET_BIND = 3,
E_CMD_PACKET_BINDACK =4,
E_CMD_PACKET_OFFLINE = 5,
E_CMD_PACKET_OFFLINEACK = 6,
E_CMD_PACKET_KICKOFF = 7,
E_CMD_PACKET_KICKOFFACK = 8,
E_CMD_P2PMSG = 9，    //私聊消息类型
E_CMD_GROUPMSG = 10，//群聊消息类型
E_CMD_CHATROOMMSG =11，//聊天室消息类型
E_CMD_MSGACK = 12,   //ACK消息类型
E_CMD_CHATROOM_USERACTION=13,//聊天室用户操作
E_CMD_CHATROOM_USERACTIONACK=14,//聊天室用户操作ACK
E_CMD_CHATROOM_SETTINGS=15,//聊天室设置
E_CMD_CHATROOM_SETTINGSACK=16,//聊天室设置ACK
E_CMD_CHATROOM_USERLIST =17,//聊天室用户列表
E_CMD_CHATROOM_USERLISTACK =18,//聊天室用户列表ACK

```

## 数据存储

> 聊天记录存储在 indexedDB
>
> 状态在 vuex chat.js

#### vuex 事件

```js
/**
  进入聊天室
  type:0未进入聊天 1:私聊 2:
  id:4945//相关id
  */
this.$store.dispatch('chat/enter', { type: 1, id: 4945 })

/**
  离开聊天室
  type:0未进入聊天 1:私聊 2:
  id:4945//相关id 比如
  */
this.$store.dispatch('chat/exit')
```

#### 获取当前聊天记录

```js
私聊:存储位置在 "当前用户id|对方用户id","chat-p2p"
this.$idb("${store.getters.USER_ID}|${uid}","chat-p2p").keys()
群聊:存储位置在 "当前用户id|聊天室id","chat-group"
```

#### 消息处理

聊天消息不包含用户信息,展示时需要通过用户 id 来获取资料,比如头像,昵称,状态等信息

##### 界面数据格式【待定】

```js
{
msg:{
"fromUid": 4889,
"timestamp": 1590129590935
},
user:{}
}
```

##### 发送消息

> 默认状态为发送中  
> 收到 ACK 状态 12 改为发送成功
> 如果\${n}秒后没有变就改为发送失败,界面上显示重新发送

```js
//发送消息
//type:0:文字消息 1:图片 2:音频文件
this.$store.dispatch('chat/send', { type: 0, data: '内容|http://' })
//修改消息状态
//state:0  发送中，发送失败，发送成功，未读，已读【待定】
this.$store.dispatch('chat/update-msg-state', { id, state: 1 })
```

# 数据记录

## p2p 9

```js
{
  "head": {
    "serialNo": 432,
    "flag": 0,
    "msgType": 9
  },
  "body": {
    "ecodeType": 0,
    "msgType": 9,
    "fromUid": 4889,
    "toUid": 4945,
    "timestamp": 1590148893269,
    "deviceId": 1590146022393,
    "data": {
      "direction": 0,
      "status": 0,
      "messageType": 0,
      "tId": "1",
      "sequence": 1,
      "prevMsgId": 0,
      "nextMsgId": 1,
      "createTime": 1590148893269,
      "messageId": 0,
      "content": "发送消息2",
      "clientFileId": 0,
      "sliceId": 0,
      "sliceEnd": 0
    }
  }
}
```

## ACK 12

```js
{
  "head": {
    "serialNo": 31637,
    "flag": 0,
    "msgType": 12
  },
  "body": {
    "msgType": 12,
    "toUid": 4945,
    "data": {
      "msgId": "100016074",
      "tId": 1
    },
    "fromUid": 4889,
    "deviceId": 1590146022393,
    "ecodeType": 0,
    "timestamp": 1590148893269
  }
}
```
