---
title: "Linux下使用正则和sed命令替换文本"
date: 2012-11-27 22:37
description: ""
slug: "/blog/2012/replace-string-with-sed"
---

linux 下使用一下命令可以替换一个目录下面所有的正则匹配到的字符串

{% highlight Bash shell scripts %}
sed -i "s/origin_string/replace-string/g" `grep origin_string -rl /path`
{% endhighlight %}

多行字符串替换, 注意 `&` 符号需要用 `&amp;` 替换

{% highlight Bash shell scripts %}
sed -i 's#</body>#<!-- JiaThis Button BEGIN -->\n<script type="text/javascript" src="http://v3.jiathis.com/code/jiathis_r.js?uid=1353130564443815\&move=0\&amp;btn=r4.gif" charset="utf-8"></script>\n<!-- JiaThis Button END -->\n</body>#g' `grep '</body>' -rl src`
{% endhighlight %}

替换测试

{% highlight Bash shell scripts %}
echo "</body>" | sed -e 's#</body>#<!-- JiaThis Button BEGIN -->\n<script type="text/javascript" src="http://v3.jiathis.com/code/jiathis_r.js?uid=1353130564443815\&move=0\&amp;btn=r4.gif" charset="utf-8"></script>\n<!-- JiaThis Button END -->\n</body>#g'
{% endhighlight %}
