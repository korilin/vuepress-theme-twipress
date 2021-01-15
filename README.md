# Twipress

---

这是一个仿照 Twitter 部分界面设计的 Vuepress 主题，可用于 Hexo 博客迁移到 Vuepress 上，但不代表能完全兼容 Hexo 博客（因为存在原博客文章在 Hexo 上有不兼容的自定义内容，或对插件依赖的可能），对于文章自定义内容较少的博客可尝试使用此主题迁移。

_注：_
_这是个人开发/使用的第一个 Vuepress 主题，因此不确定其它 Vuepress 博客是否能迁移到这个主题_


### 演示地址

Kori Lin 的博客：<https://korilin.com>

## 支持的文章 frontmatter

``` md
---
title: 标题
date: 日期（格式：yyyy-MM-DD）
category: 分类（最高优先级）
categories:
    - 分类1 （分类，当存在category时不会获取此frontmatter）
    - 分类2 （当设置了多个分类时，只会获取第一个，后面均不会获取）
tags:
    - 标签1
    - 标签2
---
```

## 配置

所有静态文件应当存放在 `.vuepress/public` 目录下，如下面代码示例中的 GitHub 图标存放在 `.vuepress/public/static/author/github.png`

``` js
// 作者信息
author: {
        name: "", // 作者名称
        avatar: "/static/avatar.jpg", // 作者头像
        description: "一个热爱开源的开发者", // 作者信息的简单描述
        communities: [ // 社交链接
            {
                id: "Github", // 此信息ID，鼠标移动到标签上面会显示此ID
                icon: "/static/author/github.png", // 图标位置
                text: "korilin", // 图标后面的文本，可以不设置
                url: "https://twitter.com/korilin_dev", // 跳转的链接地址
            },
            {
                id: "Twitter",
                icon: "/static/author/twitter.png",
                text: "korilin_dev",
                url: "https://twitter.com/korilin_dev",
            },
            {
                id: "Email",
                icon: "/static/author/email.png",
                text: "korilin.dev@gmail.com",
                url: "", // 当url为空或者没设置url时，将不会以链接的方式生成
            },
        ],
    },
    // Home主页中要展示的文章的分类，如果希望所有文章都展示，应当将所有分类都添加到此处
    homeShowCategories: ["技术理解"],
```

### 开发记录

- 出版开发时间：2021/1/8 ~ 2021/1/14