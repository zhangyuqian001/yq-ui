module.exports = {
    title: 'yq-vue-ui', // 设置网站标题
    description: 'ui 库', //描述
    dest: './build', // 设置输出目录
    port: 8080, //端口
    themeConfig: { //主题配置
        nav: [{
                text: '主页',
                link: '/'
            }, // 导航条
            {
                text:'Angular组件库',
                link:'/'
            },
            {
                text:'React组件库',
                link:'/'
            },
            {
                text:'GitHub',
                link:'https://github.com/zhangyuqian001/yq-vue-ui'
            },
            {
                text:'npm地址',
                link:'https://www.npmjs.com/package/yq-vue-ui'
            }
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/components/': [{
                    collapsable: true,
                    children: [
                        'button',
                        'dialog',
                        'loading',
                        'input'
                    ]
                }
            ]
        }
    }
}