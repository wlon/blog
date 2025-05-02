---
title: "Deploy rails on windows"
date: 2012-01-06 14:33
description: ""
slug: "/blog/2012/deploy-rails-on-window"
---

###转自
[kloboHYZ](http://www.cnblogs.com/klobohyz/archive/2011/12/27/2303450.html)

由于 mongrel 已经年久失修、不支持最新的 1.9.2 版本了、所以现在使用 thin 作为 rails 服务器、再加上 nginx 作反向代理、
首先安装 thin 吧、在 windows 平台下、需要先安装 eventmachine、否则不能安装 thin 服务器

```
gem install eventmachine --pre
gem install thin
```

安装完成后只需要在 rails 的项目目录上输入 thin start 就可以启动 thin 服务器了、

P.S.:有时候启动 thin 的时候会遇到这种错误、You have already activated rack 1.3.0, but your Gemfile requires rack 1.2.3.
这是因为迩安装了多个 rack 版本、环境造成混乱、请卸载掉不需要的版本或者修改了 Gemfile 再执行一次 bundle install

接着莪们配置一下 nginx 吧、首先去 nginx 的官网找来 nginx 的 windows 版本、传送门：http://wiki.nginx.org/Install、下载完成后解压就可以使用了、进入nginx的conf目录、打开nginx.conf文件进行以下配置、

{% highlight Nginx config files %}
worker_processes 1;
error_log C:/StandAlone/nginx/logs/error.log;
events {
worker_connections 1024;
}
http {
include mime.types;
default_type application/octet-stream;
log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                       '$status $body_bytes_sent "$http_referer" '
'"$http_user_agent" "$http_x_forwarded_for"';

     sendfile        on;
     #keepalive_timeout  0;
     keepalive_timeout  65;
     #gzip  on;
     include C:/StandAlone/nginx/sites_enabled/*.txt;

}
{% endhighlight %}

注意 error_log、include 一定要切换成迩自己的实际目录、其中 include 狠重要、这个意思是从这个目录时加载其它外部配置、按着配置文件、莪们在 nginx 目录下新建 sites_enabled 文件夹吧、接下来在里面建立 mystandaloneapp.com.txt 文件、输入以下内容

```
upstream mystandaloneapp {
     server 127.0.0.1:3000;
 }

 server {
     listen       80;
     server_name  localhost;
     #charset koi8-r;

     access_log C:/StandAlone/www/mystandaloneapp.com/log/access.log;
     error_log  C:/StandAlone/www/mystandaloneapp.com/log/error.log;
     root       C:/StandAlone/www/mystandaloneapp.com;
     index      index.html;

     location / {
         proxy_set_header  X-Real-IP  $remote_addr;
         proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header  Host $http_host;
         proxy_redirect    off;
         try_files C:/StandAlone/www/maintenance.html $uri $uri/index.html $uri.html @ruby;
     }

     location @ruby {
         proxy_pass http://mystandaloneapp;
     }
 }
```

这里的配置就是把 thin 的 3000 端口转化成正常的 80 端口、、注意目录都要填写迩的实际目录、然后运行 nginx 命令便可以成功运行了

Nginx 的命令

```
nginx -s [ stop | quit | reopen | reload ]
```
