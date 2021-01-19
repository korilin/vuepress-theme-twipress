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

You can set the year your blog started in, it will show at the bottom of the blog as "@ StartTime - Now".

Configure `startTime` in `themeConfig`.

```js
// .vuepress/config.js
// themeConfig
startTime: 2018,
```

### ICP

If you want to deploy your blog to your cloud server and use your domain name, then you need to put the ICP at the bottom of the website/blog. You can add the ICP configuration in `themeConfig`, which will help you automatically put your ICP into your blog.

MIIT: https://beian.miit.gov.cn/#/Integrated/index

```js
// .vuepress/config.js
// themeConfig
ICP: "your icp",
```

### Author

Author information is the blog owner or article writer information, which will show on Home, Archive and About pages, in the personal infomation section at the top of the page.

You can configure relevant information in `author`. The most basic configuration includes name, avatar and description.

```js
// .vuepress/config.js
// themeConfig
author: {
    name: "Kori Lin",
    avatar: "/static/avatar.jpg", // author avatar
    description: "一个热爱开源的开发者", // author intro
}
```

You can also configure `communities` to place links to social platforms in the profile as "icon + description".

It stores each social configuration as a list, and each configuration has the following four fields：
- `id`: The ID of the social info, which is displayed when the mouse hover the this social label.
- `icon`: The icon location storage space (can be unset, bug not tested yet)
- `text`: The text after the icon (can be unset, bug not tested yet)
- `url`: The link to which this social configuration points. Clicking the icon or text will open a new page to jump to this link. If this field isn't present or is "", there will not generated as a link.

```js
// .vuepress/config.js
// themeConfig
author: {
    communities: [ // social link
        {
            id: "Github",
            icon: "/static/author/github.png",
            text: "korilin",
            url: "https://github.com/korilin",
        },
        {
            id: "Email",
            icon: "/static/author/email.png",
            text: "korilin.dev@gmail.com",
            url: "", // When the url isn't present or is "", this configuration will not be generated as a link.
        },
    ],
}
```

### HomeShowCategories

This configuration manage articles display on the blog home page by category. The blog home page will only display articles which the category in this configuration list.

It can help you hide articles that you don't want to show directly on the home page, but the articles still exist, you can see them in the archive and access them.

Configure `homeShowCategories` as a list, if you want to display all posts on the home page, all categories should be added here.

```js
// .vuepress/config.js
// themeConfig
homeShowCategories: ["category 1", "category 2"],
```

### Example

``` js
// blog start time
startTime: 2018,
// ICP(if have)
ICP: "粤ICP备xxxxx号",
// 作者信息
author: {
        name: "", // author name
        avatar: "/static/avatar.jpg", // author avatar
        description: "一个热爱开源的开发者", // author intro
        communities: [ // social link
            {
                id: "Github",
                icon: "/static/author/github.png",
                text: "korilin",
                url: "https://github.com/korilin",
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
                url: "", // When the url isn't present or is "", this configuration will not be generated as a link.
            },
        ],
    },
// The categories of articles which will be displayed on the home page.
// if you want all articles to be displayed, you should add all categories here.
homeShowCategories: ["category 1", "category 2"],
```

## Article Excerpt

Articles displayed on the home page will show the excerpt of the article, there will show a blank if the article has not excerpt.

If you want the article to show a excerpt, you must add a `<!-- more -->` annotation in the Markdown file and VuePress will extract the content before the annotation as a excerpt.

*note: Unlike Hexo, VuePress has strict formatting requirements for this annotation. `more` should be preceded and followed by only one space. If you write like this `<!--more-->`, VuePress will not extract the excerpt.*

## Feedback

At present, the first version of this theme has been completed, but there are still many places that have not been tested. If you have any comments on this theme or have problems in the use process, please open an issue in this repository.

If you have suggestions for optimization of the theme design or code, fork the repository and submit a merge reuqest.

## History

- First Version Develop Time: 2021/1/8 ~ 2021/1/18
