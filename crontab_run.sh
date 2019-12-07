#!/bin/bash
#更改工作目录
cd /media/xian/Work/docker/zdns-python

#启动runserver.py
NAME="python3 ./runserver.py"
PROCESS="./runserver.py"
LOGDIR="./nohup.log"
ID=`ps -aux|grep "$NAME" | grep -v "grep" | awk '{print $2}'`
if [ -z "$ID" ];then
    nohup python3 $PROCESS  > $LOGDIR 2>&1 &
    echo "process $NAME start"
else
    echo "process $NAME already exist PID $ID"
fi

#启动run5min.py
NAME="python3 ./run5min.py"
PROCESS="./run5min.py"
LOGDIR="./nohup.log"
ID=`ps -aux|grep "$NAME" | grep -v "grep" | awk '{print $2}'`
if [ -z "$ID" ];then
    nohup python3 $PROCESS  > $LOGDIR 2>&1 &
    echo "process $NAME start"
else
    echo "process $NAME already exist PID $ID"
fi


#每一分钟执行一次
# crontab –e

# * * * * * /media/xian/Work/docker/zdns-python/crontab_run.sh
