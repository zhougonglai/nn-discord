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

### 1.1.1.   通讯头(Head)结构：

| **字段** | **描述**   | **长度**                                                     |
| -------- | ---------- | :----------------------------------------------------------- |
| msgLen   | 消息长  度 | 定长，2字节，表示总长度                                      |
| msgType  | 消息类型   | 定长，1字节                                                  |
| serialNo | 消息流水号 | 定长，1字节                                                  |
| flag     | 标记值     | 定长，1字节   <br />0000 0000    不加密消息  <br />0000 0001    rc4加密消息   <br />0000 0011    加密+上行客户端版本号参数   <br />0000 0111    加密+上行客户端版本号+添加网络状态参数 |
| body     | 消息内容   | 变长，由size可计算出长度。                                   |