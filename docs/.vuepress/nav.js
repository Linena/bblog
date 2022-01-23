module.exports = [
    {text: 'Home', link: '/'},
    {
        text: 'Windows',
        items: [
            {text: '高效工具', link: '/pages/Windows/'},
            {text: '软件中心', link: 'https://pc.qq.com'},
        ]
    },
    {
        text: 'Linux',
        items: [
            {text: "配置文件", link: '/pages/Linux/Config'},
            {text: "生产工具", link: '/pages/Linux/Tool'},
            {text: 'Manjaro入门到生产', link: 'https://github.com/orangbus/tool'},
            {
                text: '开发环境', items: [
                    {text: 'Laradock', link: 'http://laradock.io'},
                    {text: '宝塔Linux面板', link: 'https://www.bt.cn/'},
                    {text: 'laragon-window', link: 'https://laragon.org/'},
                ]
            },
            {
                text: 'Linux发行版', items: [
                    {text: 'Deepin', link: 'https://www.deepin.org/zh/'},
                    {text: 'Manjaro', link: 'https://manjaro.org/'},
                    {text: 'Ubuntu', link: 'https://cn.ubuntu.com/'},
                    {text: 'centos', link: 'https://www.centos.org/'},
                ]
            },
            {
                text: 'Laradock实战', items: [
                    {
                        text: 'Docker入门到实战',
                        link: 'https://yeasy.gitbooks.io/docker_practice/install/mirror.html'
                    },
                    {text: 'Laradock官网', link: 'http://laradock.io'},
                    {text: 'Docker在线学习调试', link: 'https://labs.play-with-docker.com/'},
                    {
                        text: 'Kubernetes互动教程',
                        link: 'https://k8smeetup.github.io/docs/tutorials/kubernetes-basics/deploy-interactive/'
                    },
                ]
            }
        ]
    },
    {text: "Docker", link: "/Docker/"},
    {
        text: "Note", link: "/pages/Note/",
        items: [
            {text: 'HTML', link: "/pages/Note/HTML"},
            {
                text: 'CSS', link: "/pages/Note/CSS",
                items:[
                    {
                        text: 'mac 苹果系统 安装scss', link: "/pages/Note/mac 苹果系统 安装scss",
                    }
                ]
            },
        ]
    },
    {
        text: 'More',
        items: [
            {text: 'QQ', link: "2776217800"}
        ]
    },
]