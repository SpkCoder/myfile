#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
os.chdir('/home')  #切换工作目录

#启动
LIST_PROCESS=['python3 ./runserver.py', 'python3 ./run5min.py']
for item in LIST_PROCESS:
    result = os.popen('ps -aux|grep "'+item+'" | grep -v "grep" | awk \'{print $2}\'').read().strip()
    if result:
        pid = result.replace('\n',',')
        print(f'process {item} already exist PID {pid}')
    else:
        os.system(f'nohup {item} > ./nohup.log 2>&1 &')
        print(f'process {item} start')

# 每一分钟执行一次
# crontab –e
# * * * * * /media/xian/Work/docker/zdns-python/crontab_run.py
