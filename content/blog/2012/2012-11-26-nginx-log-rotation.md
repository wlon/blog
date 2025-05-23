---
title: "Nginx log 分割"
date: 2012-11-26 22:42
description: ""
slug: "/blog/2012/nginx-log-rotation"
---

转自 Nginx 中文站

nginx 的日志文件没有 rotate 功能。如果你不处理，日志文件将变得越来越大，还好我们可以写一个 nginx 日志切割脚本来自动切割日志文件。

第一步就是重命名日志文件，不用担心重命名后 nginx 找不到日志文件而丢失日志。在你未重新打开原名字的日志文件前，nginx 还是会向你重命名的文件写日志，linux 是靠文件描述符而不是文件名定位文件。

第二步向 nginx 主进程发送 USR1 信号。

nginx 主进程接到信号后会从配置文件中读取日志文件名称，重新打开日志文件(以配置文件中的日志名称命名)，并以工作进程的用户作为日志文件的所有者。

重新打开日志文件后，nginx 主进程会关闭重名的日志文件并通知工作进程使用新打开的日志文件。

工作进程立刻打开新的日志文件并关闭重名名的日志文件。

然后你就可以处理旧的日志文件了。

nginx 日志按日期自动切割脚本如下

```
#nginx日志切割脚本
#author: http://www.nginx.cn

#!/bin/bash
#设置日志文件存放目录
logs_path="/usr/local/nginx/logs/"
#设置pid文件
pid_path="/usr/local/nginx/nginx.pid"

#重命名日志文件
mv ${logs_path}access.log ${logs_path}access_$(date -d "yesterday" +"%Y%m%d").log

#向nginx主进程发信号重新打开日志
kill -USR1 `cat ${pid_path}`

```

保存以上脚本 nginx_log.sh,或者点此下载

添加执行权限：

chmod 744 /root/nginx_log.sh

让 shell 每天凌晨执行

crontab -e

添加内容

0 0 \* \* \* sh /usr/local/nginx/nginx_log.sh

保存退出：wq

这样就每天的 0 点 0 分把 nginx 日志重命名为日期格式，并重新生成今天的新日志文件。
