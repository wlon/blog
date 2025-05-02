---
title: "Git 不提交已存在版本控制的本地修改"
date: 2014-03-10 21:58:10 +0800
description: ""
slug: "/blog/2014/git-ignore"
---

不提交本地修改可分为两种情况:

1. 删除 git 库中已存在的记录，并在本地忽略该文件

   ```
   git rm --cached <file>
   ```

   然后将这个文件加入`.gitignore`中

2. 忽略本地改动，但不删除已存在的记录

   ```
   git update-index --assume-unchanged <file>
   ```

   恢复

   ```
   git update-index --no-assume-unchanged <file>
   ```
