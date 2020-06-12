# -*- coding: UTF-8 -*-
 
import socket               # 导入 socket 模块
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)       # 创建 socket 对象
client.connect(('0.0.0.0', 1234))

#输入发送的消息
sendmsg = input("请输入:")
#如果客户端输入的是q，则停止对话并且退出程序
sendmsg = sendmsg
#发送数据，以二进制的形式发送数据，所以需要进行编码
client.send(sendmsg.encode("utf-8"))
msg = client.recv(1024)
#接收服务端返回的数据，需要解码
print(msg.decode("utf-8"))
client.close()