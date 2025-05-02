---
title: "ASP.NET MVC 中获得当前的URL、Controller、Action"
date: 2012-03-22 09:08
description: ""
---

##URL 的获取，ASP.NET 通用：
【1】获取 完整 url （协议名+域名+虚拟目录名+文件名+参数）
string url=Request.Url.ToString();

【2】获取 虚拟目录名+页面名+参数：
string url=Request.RawUrl;
(或 string url=Request.Url.PathAndQuery;)

【3】获取 虚拟目录名+页面名：
string url=HttpContext.Current.Request.Url.AbsolutePath;
(或 string url= HttpContext.Current.Request.Path;)

【4】获取 域名：
string url=HttpContext.Current.Request.Url.Host;

【5】获取 参数：
string url= HttpContext.Current.Request.Url.Query;

【6】获取 端口：
Request.Url.Port

##当前 controller、action 的获取
RouteData.Route.GetRouteData(this.HttpContext).Values["controller"]
RouteData.Route.GetRouteData(this.HttpContext).Values["action"]
或
RouteData.Values["controller"]
RouteData.Values["action"]

如果在视图中可以用
ViewContext.RouteData.Route.GetRouteData(this.Context).Values["controller"]
ViewContext.RouteData.Route.GetRouteData(this.Context).Values["action"]
或
ViewContext.RouteData.Values["controller"]
ViewContext.RouteData.Values["action"]
