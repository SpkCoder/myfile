# -*- coding: UTF-8 -*-
from threading import Thread
import socket
 
socketserver = socket.socket(socket.AF_INET, socket.SOCK_STREAM)         # 创建 socket 对象
socketserver.bind(('0.0.0.0', 1234))        # 绑定端口
socketserver.listen(5)                 # 等待客户端连接
print('listen：1234')

def dowork(socketclient, addr):
    print('Connection from %s:%s' % addr)
    #接收客户端的请求
    recvmsg = socketclient.recv(1024)
    #把接收到的数据进行解码
    str_data = recvmsg.decode("utf-8")
    print("收到:"+str_data)
    msg = input("回复:")
    #对要发送的数据进行编码
    socketclient.send(msg.encode("utf-8"))
    socketclient.close()
    print('Connection from %s:%s closed.' % addr)

while True:
    socketclient,addr = socketserver.accept()     # 建立客户端连接
    # 创建新线程来处理TCP连接:
    t = Thread(target=dowork, args=(socketclient, addr))
    t.start()

socketserver.close()                # 关闭连接