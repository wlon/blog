---
title: "Nginx 忽略大小写"
date: 2013-03-16 21:16
description: ""
slug: "/blog/2013/nginx-ignore-case"
---

Nginx 当文件中有大小写文件时，用户访问时必须和文件大小写一致才能访问，通过添加 Perl 表达式可以对文件大小写进行转换。

1. 下载源文件[Nginx 下载](http://nginx.org/en/download.html)

2. 安装 Perl 开发包`apt-get install libperl-dev`

3. 使用 Passenger 安装,选择第二项

   - 如有权限问题,可使用`rvmsudo`提升权限。

   - Nginx 编译选项，配置 perl 支持，`--with-http_perl_module` 仅需添加 perl module，其他选项默认添加。

4. 修改 config 文件，添加相关语法忽略大写小。

{% highlight Nginx config files %}
perl*set $url '
        sub {
                my $r = shift;
my $re = lc($r->uri);
return $re;
        }
    ';  
    
server {
	        listen       80;
	        server_name  www.abc.com;
	        root /www/web/dol;
	        index index.html index.htm;     
			if ($uri ~ [A-Z]){
rewrite ^(.*)$ $url last;
}
location ~ .\_\.(gif|jpg|jpeg|png|bmp|swf)$ {
	                expires      30d;
	        }
	
	        location ~ .*\.(js|css|html|htm)$ {
expires 2d;
}
}
{% endhighlight %}
