---
title: "Nginx 用地址重写进行地址重定向"
date: 2013-03-17 15:14
description: ""
---

```
server{
        listen 6001;
        server_name soft.wlon.net;
        rewrite ^/(.*) http://static.hanghaimeng.com/$1 permanent;
        access_log off;
}
server{
        listen 6000;
        server_name soft.wlon.net;
        rewrite ^/(.*) http://static.hanghaimeng.com/$1 permanent;
        access_log off;
}
```
