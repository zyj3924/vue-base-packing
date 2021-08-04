<template>
    <div class="login-flex">
        <div class="form-user">
            <a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">
                <a-form-item>
                    <h1 class="t-center">订单自动识别系统</h1>
                </a-form-item>
                <a-form-item>
                    <a-input
                        v-decorator="[
                            'username',
                            {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入用户名!',
                                    },
                                ],
                            },
                        ]"
                        placeholder="请输入用户名"
                    >
                        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input
                        v-decorator="[
                            'password',
                            {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入密码!',
                                    },
                                ],
                            },
                        ]"
                        type="password"
                        placeholder="请输入密码"
                    >
                        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <!-- <a-checkbox
                        v-decorator="[
                            'remember',
                            {
                                valuePropName: 'checked',
                                initialValue: true,
                            },
                        ]"
                    >
                        记住我
                    </a-checkbox> -->
                    <a-button type="primary" :loading="loading" html-type="submit" class="login-form-button"> 登录 </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
import asyncRouter from '@/router/asyncRouter'
import { setCookies } from '@/utils/cookie'
import { UserLogin } from '@/api/Login'
export default {
    name: 'Login',
    data() {
        return {
            loading: false,
        }
    },
    computed: {},
    beforeCreate() {
        this.form = this.$form.createForm(this, { name: 'normal_login' })
    },
    mounted() {},
    methods: {
        handleSubmit(e) {
            e.preventDefault()
            this.loading = true
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values)

                    this.userLogin(values)
                }
            })
        },

        async userLogin(params) {
            const res = await UserLogin(params)
            if (res.success) {
                // 设置用户存储
                setCookies('userInfo', {
                    value: {
                        token: res.result.token,
                        username: res.result.username,
                    },
                })
                let newDynamicRouter = asyncRouter
                let meunList = res.result.authorityInfo
                let btnList = []
                for (let i in res.result.btnPermissionList) {
                    btnList.push(res.result.btnPermissionList[i].name)
                }
                newDynamicRouter['path'] = meunList[0].children[0].path
                newDynamicRouter['name'] = meunList[0].children[0].name
                this.$store.commit('saveMenuList', {
                    menuList: meunList,
                    asyncRouter: [newDynamicRouter],
                    btnList: btnList,
                })
                this.loading = false
                this.$message.success('登录成功！')
            } else {
                this.loading = false
                this.$message.error('登录失败！')
            }
        },
    },
}
</script>

<style lang="less" scoped>
.login-flex {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../../assets/img/login-bg.svg') no-repeat;

    .form-user {
        width: 300px;
        height: 400px;

        .t-center {
            text-align: center;
        }

        #components-form-demo-normal-login .login-form {
            max-width: 300px;
        }
        #components-form-demo-normal-login .login-form-forgot {
            float: right;
        }
        #components-form-demo-normal-login .login-form-button {
            width: 100%;
        }
    }
}
</style>
