import asyncRouter from '@/router/asyncRouter'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        collapsed: false,
        menuList: [],
        btnList: [],
        asyncRouter: [asyncRouter],
    },
    mutations: {
        toggleCollapsed: (state, param) => {
            state.collapsed = param.collapsed
        },
        saveMenuList: (state, param) => {
            state.menuList = param.menuList
            state.asyncRouter = param.asyncRouter
            state.btnList = param.btnList
            router.push({
                name: param.menuList[0].children[0].name,
            })
        },
    },
    getters: {},
    modules: {},
    plugins: [
        createPersistedState({
            storage: window.sessionStorage,
        }),
    ],
})
