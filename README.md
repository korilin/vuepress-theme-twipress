# Twipress

---

这是一个仿照 Twitter 部分界面设计的 VuePress 主题，可用于 Hexo 博客迁移到 VuePress 上，但不代表能完全兼容 Hexo 博客（因为存在原博客文章在 Hexo 上有不兼容的自定义内容，或对插件依赖的可能），对于文章自定义内容较少的博客可尝试使用此主题迁移。

_注：这是个人开发 / 使用的第一个 VuePress 主题，因此不确定其它 VuePress 博客是否能迁移到这个主题_

## 文档与演示地址

切换文档：中文 | [English](./README_EN.md)

Kori Lin 的博客：<https://korilin.com>

## 支持的文章 frontmatter

`title`：标题，它将作为文章标题显示在主页、归档页面、文章页面

`date`：日期，格式为 yyyy-MM-DD，如果有更加精确的时分秒将会被忽略

`category/categories`：
- 分类，由于 HEXO 博客系统使用的是`categories`，所以在本主题中这两个 frontmatter 都支持
- 当有`category`标签时优先使用该标签
- 使用`categories`时，如果拥有多个分类，优先选择第一个作为文章分类，其它的不会获取

`tags`：标签，你需要以列表的方式设置标签，即便你的标签只有一个

整体支持的 frontmatter 配置应当如下：

``` md
---
title: 标题
date: 2021-1-1
category: 分类（最高优先级）
categories: （分类，当存在category时不会获取此frontmatter）
    - 分类1 （当设置了多个分类时，只会获取第一个，后面均不会获取）
    - 分类2
tags:
    - 标签1 （以列表的方式配置多个标签，即便你只有一个标签）
    - 标签2
---
```

## 主题配置

所有静态文件应当存放在 `.vuepress/public` 目录下，如下面代码示例中 GitHub 图标的存放为 `.vuepress/public/author/github.png`。

所有博客配置应当遵循 VuePress 要求写在 `.vuepress/config.js` 文件中的`themeConfig`下面，如下：

```js
module.exports = {
    themeConfig: {
        // 在这写你的博客配置
    },
};
```

如果你 clone 了本仓库来将本项目作为主题引入，那么提供的`config.js`应当会提供一个正确的模板。

### 博客开始时间

你可以设置你的博客开始年份，它将以“©开始年份 - 至今”的方式显示在博客最底端。

在配置文件的`themeConfig`下配置`startTime`。

```js
// .vuepress/config.js
// themeConfig
startTime: 2018,
```

### ICP 备案号

在中国，如果你要将博客部署到自己的云服务器上，并使用自己已备案的域名，需要将备案号放到网站 / 博客底部，你可以在主题添加 ICP 配置，它可以帮助你自动将你的备案号放到博客。

工信部：https://beian.miit.gov.cn/#/Integrated/index

```js
// .vuepress/config.js
// themeConfig
ICP: "备案号",
```

### 作者信息

作者信息为博客所有者 / 文章编写者的信息，它将显示在主页、归档、关于页面的上端的个人信息处。

你可以在 author 配置相关的信息，最基础的配置包括名称、头像、简介

```js
// .vuepress/config.js
// themeConfig
author: {
    name: "Kori Lin",
    avatar: "/static/avatar.jpg", // 作者头像
    description: "一个热爱开源的开发者", // 作者信息的简单描述
}
```

你还可以配置`communities`将社交平台的链接以“图标 + 描述”的方式放到个人信息处。

它以列表的形式存储每个社交配置，每个配置都有如下 4 个字段：
- `id`：该社交信息的 ID，鼠标移动到标签上面会显示此 ID
- `icon`：显示的图标存储位置（可以不设置，但还没测试过）
- `text`：图标后面的文本，可以不设置
- `url`：该配置指向的链接，点击图标或文本会打开新标签页跳转到该链接，当没有此字段或为""时，将不会以链接的方式生成

```js
// .vuepress/config.js
// themeConfig
author: {
    communities: [ // 社交链接
        {
            id: "Github", // 此信息ID，鼠标移动到标签上面会显示此ID
            icon: "/static/author/github.png", // 图标位置
            text: "korilin", // 图标后面的文本，可以不设置
            url: "https://github.com/korilin", // 跳转的链接地址
        },
        {
            id: "Email",
            icon: "/static/author/email.png",
            text: "korilin.dev@gmail.com",
            url: "", // 当url为空或者没设置url时，将不会以链接的方式生成
        },
    ],
}
```

### 主页显示的文章的分类

该配置项以分类的来显示博客主页的文章，博客主页只会隐藏本配置项列表里的分类的文章。

它可以帮助你隐藏一些你不想直接展示在主页的分类，但要这些文章依旧存在，你可以在归档里看到它们并访问他们。

以列表的方式配置`homeNotShowCategories`，如果你希望所有文章都显示在主页，则这里放空。

```js
// .vuepress/config.js
// themeConfig
homeNotShowCategories: ["不显示的分类1", "不显示的分类2"],
```

### 完整的配置例子

``` js
// 博客开始时间
startTime: 2018,
// 备案号（如果有）
ICP: "粤ICP备xxxxx号",
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
                url: "https://github.com/korilin", // 跳转的链接地址
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
homeShowCategories: ["不显示的分类1", "不显示的分类2"],
```

## 主页文章摘要

显示在主页的文章会显示文章摘要，如果没有文章摘要将什么都不会显示。

如果你希望该篇文章可以显示摘要，可以在 markdown 文件中添加 `<!-- more -->`注释，VuePress 将会把该注释前面的内容提取作为摘要。

*注意：VuePress 和 Hexo 不同，它对该注释有严格的格式要求，more 前后应当都有且只有一个空格，如果你写成了这样`<!--more-->`，VuePress 将不会提取出摘要*

## 问题反馈

目前该主题完成了初版，但依旧有很多没有进行测试的地方，如果对本主题有什么意见或使用过程出现了问题请在本仓库开启一个 issue。

如果对主题设计或代码有优化的建议也可以 fork 本仓库，并提交一个合并请求。

## 开发记录

- 初版开发时间：2021/1/8 ~ 2021/1/18
