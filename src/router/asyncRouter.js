const asyncRouter = {
    path: '',
    name: '',
    filePath: 'Home',
    meta: {
        T: '订单识别提取 首页',
        D: '展示端--首页描述',
        K: '展示端--首页关键字',
        N: '首页',
    },
    children: [
        {
            path: '/identify-extraction',
            name: 'identify-extraction',
            filePath: 'identify-extraction.vue',
            meta: {
                T: '订单识别提取',
                D: '展示端--首页描述',
                K: '展示端--首页关键字',
                N: '订单识别提取',
            },
        },
        {
            path: '/base-table-config',
            name: 'base-table-config',
            filePath: 'base-table-config.vue',
            meta: {
                T: '基础表配置',
                D: '展示端--首页描述',
                K: '展示端--首页关键字',
                N: '基础表配置',
            },
        },
        {
            path: '/permission-controller',
            name: 'permission-controller',
            filePath: 'permission-controller.vue',
            meta: {
                T: '权限管理',
                D: '展示端--首页描述',
                K: '展示端--首页关键字',
                N: '权限管理',
            },
        }
    ],
}

export default asyncRouter
