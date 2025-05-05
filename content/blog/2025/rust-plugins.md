---
title: "Rust 腐蚀自建服务器插件"
date: 2025-05-05T17:15:00+08:00
description: ""
slug: "/blog/2025/rust-plugins"
---

[Auto Doors 自动关门](https://rustsb.com/resources/416/)

```
使用/ad <type | t>和/ad <single | s> 指令时必须看着门。
/ad - 开启/关闭自动关门
/ad <时间(秒)> - 设置自动关门时间（不包含type和single的单独设置）
/ad <all | a> <时间rustsb.com(秒)> - 设置所有门的自动关门时间
/ad <single | s> - 开启/关闭面前门的自动关门。
/ad <single | s> <时间(秒)> - 设置面前的门的自动关门时间
/ad <type | t> - 开启/关闭面前的门的类型的自动关门
/ad <type | t> <时间(秒)> - 设置面前门的类型的自动关门时间
/ad <help | h> - 获取帮助
```

[Blueprint Manager 蓝图管理](https://rustsb.com/resources/488/)

[NTeleportation 传送系统](https://rustsb.com/resources/361/)

```
home add NAME - 将当前位置保存为位置NAME。(别名sethome)
home list - 显示您保存的所有位置的列表。(别名listhomes)
home remove NAME - 从您保存的主页中删除位置NAME。(别名removehomrustsb.come)
home NAME - 将您传送到主页位置。
home NAME pay - 将您传送到主页位置NAME,通过从您的Economics余额支付来绕过冷却。
tpr - 向玩家发送传送请求。
tpa - 接受传入的传送请求。
tpc - 取消传送或请求。
town - 将自己传送到城镇(如果设置)。
outpost - 将自己传送到哨站(如果设置)。
bandit - 将自己传送到强盗城镇(如果设置)。
town/outpost/bandit pay - 将你传送到town/outpost/bandit,通过从你的Economics余额支付来绕过冷却。例如/town pay
tpinfo - 显示限制和冷却时间。
tphelp - 显示帮助。
island <number> - 将你传送到指定的岛屿
island add - 在管理员当前位置添加一个出生点(不要添加玩家可以建造的位置)
tpat - 为特定玩家切换自动tpa开/关
```



[Remover Tool 拆除工具](https://rustsb.com/resources/225/)

```
/remove [时间(秒)] - 启用/禁用拆除工具
/remove <admin | a> [时间(秒)] - 启用管理员模式，在该模式下可以拆除任何物体且不受限制
/remove all [时间(秒)] - 全部拆除模式，会拆除你所看到的整个建筑物及其相邻的物体，如果有相邻的建筑物也会一并拆除
/remove <structure | s> [时间(秒)] - 拆除建筑模式，会拆除你看向的整个建筑物（不会拆除相邻的物体/建筑）
/remove <external | e> [时间(秒)] - 拆rustsb.com除高墙模式，会拆除面前和其相邻的高墙
```

[Gather Manager 采集倍数](https://rustsb.com/resources/159/)

```
/gather - 向玩家显示当前服务器设置的倍数，并向管理员显示可用的控制台命令
```

[Corpse Location 尸体位置](https://rustsb.com/resources/650/)

```
/where - 显示玩家的尸体距离自己有多远及在哪个rustsb.com地图网格中。

/where tp - 传送到自己的尸体。

/return - 返回到传送尸体前的位置。

/tpcorpse 名字/ID - 传送到指定玩家/Steamid的尸体的位置。
```

[Backpacks 扩展背包](https://rustsb.com/resources/384/)

```
backpack / backpack.open - 打开自己的背包。需要backpacks.userustsb.com权限。如果背包已经打开，将切换到下一页，如果没有更多页面，则关闭背包。

backpack.fetch <物品短名称/id> <数量> - 从背包提取物品。

backpackgui - 开启关闭GUI按钮显示。

backpack.setgathermode <All|Existing|Off> <页数> - 为指定的扩展背包页面设置收集模式。如果未指定页数，则应用于第一页。这个指令对于通过绑定按键快速更改收集模式非常有用，而无需打开背包。 注：如果要始终通过聊天而不是控制台接收此指令的消息提示，则应该绑定这样绑定 bind <按键> chat.say "/backpack.setgathermode All" 而不是 bind <按键> backpack.setgathermode All。
```

[BuildingSkins 建筑皮肤](https://rustsb.com/resources/46/)

```
/bskin - 打开 UI 来设置默认建筑皮肤（可以在配置文件中更改）。

/bskin build - 更新您正在查看的建筑的皮肤以及与其接触的所有物体的皮肤。

/bskin all - 更新玩家拥有的所有建筑的外观。

/bskin all <steam id> - 更新指定玩家所有建筑的外观。（例如：/bskin all 765611000000000000）
```

[Map Note Teleport - 地图标记传送](https://rustsb.com/resources/577/)
```
/mnt 时间（秒） - 设置传送冷却时间
/mnt t - 启用/禁用地图标记传送
/mnt n - 启用/禁用聊天通知
```

