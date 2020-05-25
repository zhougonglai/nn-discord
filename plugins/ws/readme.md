## websocket

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

> 聊天记录存储在indexedDB
>
> 状态在vuex chat.js

#### vuex事件

```js
 /**
  进入聊天室
  type:0未进入聊天 1:私聊 2:
  id:4945//相关id
  */
this.$store.dispatch("chat/enter",{type:1,id:4945})

  /**
  离开聊天室
  type:0未进入聊天 1:私聊 2:
  id:4945//相关id 比如
  */
this.$store.dispatch("chat/exit",{type:1,id:4945})
```

#### 获取当前聊天的聊天记录

```js
私聊:存储位置在 "当前用户id|对方用户id","chat-p2p"
this.$idb("${store.getters.USER_ID}|${uid}","chat-p2p").keys()
群聊:存储位置在 "当前用户id|聊天室id","chat-group"
```

