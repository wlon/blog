---
title: "Ubuntu 安装配置"
date: 2013-07-23 22:54
description: ""
---

本文主要记录自己在西部数码 VPS 安装 ubuntu 的过程

### 添加 root 用户

`#adduser user` 这个命令可以创建 Home 目录和 Shell 路径，`useradd` 则不会自动创建 Home 目录

### Ubuntu 重启不能进入 VPS

原因：查看 /boot/grub/grub.cfg

```
if [ "${recordfail}" = 1 ]; then
set timeout=-1
else
set timeout=2
```

正是被这个-1 给停留到启动界面的

解决办法：
先将/boot/grub/grub.cfg 默认只读修改为可写入
cd /boot/grub
chmod 644 grub.cfg 修改成 root 用户可写

然后
vi /boot/grub/grub.cfg 找到 timeout

```
if [ "${recordfail}" = 1 ]; then
set timeout=-1  改为 0
```

### 国内镜像

以 Precise(12.04)为例, 编辑/etc/apt/sources.list 文件, 在文件最前面添加以下条目(操作前请做好相应备份)

```
deb http://mirrors.163.com/ubuntu/ precise main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ precise-security main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ precise-updates main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ precise-proposed main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ precise-backports main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ precise main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ precise-security main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ precise-updates main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ precise-proposed main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ precise-backports main restricted universe multiverse
```

### DNS 配置

修改以下配置，然后重启 `shutdown -r now`

```
/etc/network/interfaces
dns-nameservers 8.8.8.8
```

### 更新系统

### MySQL 安装配置

### 禁止 root 用户 ssh 登录
