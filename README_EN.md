# Twipress

---

This is a VuePress theme that model part of Twitter interface design. It can be use in Hexo blog on migrat to VuePress, but doesn't represent can fully compatible with Hexo blog (beacuse of the possibility that the original blog post has incompatble customizations on Hexo, or dependencies on plug-ins)

_Note: This is the fist VuePress theme that I developed and used, so I'm not sure that other VuePress blogs be able to migrate to this theme._

## Document and Preview

Language: [中文](README.md) | English

Kori Lin's Blog: <https://korilin.com>

## Supported Frontmatter

`title`: It will show on Home, Archive, Post route page as article title.

`date`: The date format is "yyyy-MM-DD", if there are more precise hours, minutes and seconds will be ignored.

`category/categories`:
- `category` and `categories` are supported in this theme because the Hexo engine uses `categories`.
- `category` is used preferentially.
- When using `categories`, if you have multiple categories, the first one is preferred as the article category and the others are not taken.

`tags`: You need to set your tags as a list, even if you only have one tag.

The overall supported frontmatter configuration should be as follows:

``` md
---
title: Article Title
date: 2021-1-1
category: category 0 (Highest Priority First)
categories: (This frontmatter isn't fetched when category exists)
    - category 1 (When more tan one category is set, only the first one will be get)
    - category 2
tags:
    - tag 1 (Configure as lists, even if you only have one tag)
    - tag 2
---
```

## Theme Config

All static files should be stored in `.vuepress/public`. As the foolowing code example, the GitHub icon is stored as `.vuepress/public/author/github.png`.

All blog configurations should follow the VuePress requirements written in `themeConfig` in the `.vuepress/config.js` file：

```js
module.exports = {
    themeConfig: {
        // Write your blog configuration here
    },
};
```

If you clone this repository to introduce this project as your VuePress theme, the `config.js` will provide a correct template.

### Blog Start Time

你可以设置你的博客开始年份，它将以“©开始年份 - 至今”的方式显示在博客最底端。

在配置文件的`themeConfig`下配置`startTime`。

```js
// .vuepress/config.js
// themeConfig
startTime: 2018,
```

### ICP

在中国，如果你要将博客部署到自己的云服务器上，并使用自己已备案的域名，需要将备案号放到网站 / 博客底部，你可以在主题添加 ICP 配置，它可以帮助你自动将你的备案号放到博客。

```js
// .vuepress/config.js
// themeConfig
ICP: "备案号",
```

### Author

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
- `id`: 该社交信息的 ID，鼠标移动到标签上面会显示此 ID
- `icon`: 显示的图标存储位置（可以不设置，但还没测试过）
- `text`: 图标后面的文本，可以不设置
- `url`: 该社交配置指向的链接，点击图标或文本会打开新窗口跳转到该链接，当没有此配置项或为""时，将不会以链接的方式生成

```js
// .vuepress/config.js
// themeConfig
author: {
    communities: [ // 社交链接
        {
            id: "Github", // 此信息ID，鼠标移动到标签上面会显示此ID
            icon: "/static/author/github.png", // 图标位置
            text: "korilin", // 图标后面的文本，可以不设置
            url: "https://github.com/korilin",, // 跳转的链接地址
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

### HomeShowCategories

该配置项以分类的来显示博客主页的文章，博客主页只会显示在本配置项列表里的分类的文章。

它可以帮助你隐藏一些你不想直接展示在主页的分类，但要这些文章依旧存在，你可以在归档里看到它们并访问他们。

以列表的方式配置`homeShowCategories`

```js
// .vuepress/config.js
// themeConfig
homeShowCategories: ["分类1", "分类2"],
```

### Example

``` js
// 博客开始时间
startTime: 2018,
// 备案号（如果有）
ICP: "粤ICP备19149652号",
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
                url: "https://github.com/korilin",, // 跳转的链接地址
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

## Article Excerpt

显示在主页的文章会显示文章摘要，如果没有文章摘要将什么都不会显示。

如果你希望该篇文章可以显示摘要，可以在 markdown 文件中添加 `<!-- more -->`注释，VuePress 将会把该注释前面的内容提取作为摘要。

*注意：VuePress 和 Hexo 不同，它对该注释有严格的格式要求，more 前后应当都有且只有一个空格，如果你写成了这样`<!--more-->`，VuePress 将不会提取出摘要*

## Feedback

目前该主题完成了初版，但依旧有很多没有进行测试的地方，如果对本主题有什么意见或使用过程出现了问题请在本仓库开启一个 issue。

如果对主题设计或代码有优化的建议也可以 fork 本仓库，并提交一个合并请求。

## History

- First Version Develop Time: 2021/1/8 ~ 2021/1/18
