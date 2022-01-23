const nav = require("./nav");

module.exports = {
    title: 'Line Blog',
    description: '路遥知马力，且行且珍惜',
    lang: 'zh-CN',

    themeConfig:{
        logo: "/img/logo.png", //导航页Logo
        // displayAllHeaders: true, //显示所有页面的标题链接
        activeHeaderLinks: true, // 活动的标题链接
        sidebar: 'auto', //自动生成侧边栏
        smoothScroll: true,
        search: true, //开启搜索
        searchMaxSuggestions: 10, //搜索显示结果条数
        lastUpdated: 'Last Updated', // string | boolean
        lang: 'zh-CN',
        // 上 / 下一篇链接
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        // //Git 仓库和编辑链接
        // repo: 'https://github.com/Linena/blog',
        // repoLabel: '查看源码',
        // docsDir: 'docs',
        // // 假如文档放在一个特定的分支下：
        // docsBranch: 'master',
        // // 默认是 false, 设置为 true 来启用
        // editLinks: true,
        // // 默认为 "Edit this page"
        // editLinkText: '帮助我们改善此页面！',
        // sidebar
        nav,
        sidebar: {
            '/node/': [
                ['', 'node目录'],
                ['path', '作为前端也需要知道的路径知识'],
                ['stream', 'node核心模块-stream'],
            ],
            '/web/': [
                ['', '前端'],
                {
                    title: 'css',
                    name: 'css',
                    collabsable: false,
                    children: [
                        ['css/', '目录'],
                        ['css/1', 'css常考面试题'],
                    ],
                },
            ],
        },
    },
    //插件
    plugins: [
        [
            '@vuepress/back-to-top', //回到顶部
            'vuepress-plugin-helper-live2d',
            {
                log: true,
                live2d: {
                    // 是否启用(关闭请设置为false)(default: true)
                    enable: true,
                    // 模型名称(default: hibiki)>>>取值请参考：
                    // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
                    model: 'shizuku',//hibiki  shizuku
                    display: {
                        // position: "right", // 显示位置：left/right(default: 'right')
                        width: 135, // 模型的长度(default: 135)
                        height: 300, // 模型的高度(default: 300)
                        hOffset: 65, //  水平偏移(default: 65)
                        vOffset: 0, //  垂直偏移(default: 0)
                    },
                    mobile: {
                        show: false // 是否在移动设备上显示(default: false)
                    },
                    react: {
                        opacity: 0.8 // 模型透明度(default: 0.8)
                    }
                }
            }
        ],
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['@vuepress/back-to-top'],
        ['@vuepress/last-updated'],
        ['@vuepress/pwa'],//浏览器兼容
        ['vuepress-plugin-seo'], //优化 SEO
        ['vuepress-plugin-reading-progress'], //阅读进度条
        ['vuepress-plugin-code-copy', true], //添加一个代码Copy按钮
        ['vuepress-plugin-baidu-autopush'], //添加百度推送
        [
            'sitemap', {
            hostname: 'https://doc.orangbus.cn'
        },
        ], //生成站点的Sitemap，有助于SEO。
        ['@vuepress/medium-zoom'], //图片放大
        ["vuepress-plugin-auto-sidebar",{}]
    ],
    head: [
        ['link', { rel: 'shortcut icon', href: "/img/logo.ico", type: 'image/jpg' }],
        ["meta",{name: "keywords", content: "html,css,jquery,vue,uni-app"}],
        ["meta",{name: "description", content: "路遥知马力，且行且珍惜"}],
        ["meta",{name: "author", content: "Line"}],

        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
        ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }],

        ['script', {},
        `
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?e4f927d450af136af0b561715b21b9ea";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
        `],
        // 以下文件非必须
        // ["script",{src:'/js/jquery-3.5.min.js'}],
        // ["script",{src:'/js/cursor.min.js'}],
    ],
}
