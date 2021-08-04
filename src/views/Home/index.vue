<template>
  <a-config-provider :locale="zh_CN">
    <a-layout id="components-layout-demo-custom-trigger" style="height:100%">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="[$route.path]" @click="menuClick">
          <a-menu-item key="/identify-extraction">
            <a-icon type="user" />
            <span>识别提取</span>
          </a-menu-item>
          <a-menu-item key="/base-table-config">
            <a-icon type="video-camera" />
            <span>基础表单配置</span>
          </a-menu-item>
          <a-menu-item key="/permission-controller">
            <a-icon type="upload" />
            <span>权限管理</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: 'auto' }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>
<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
export default {
  data() {
    return {
      zh_CN,
      collapsed: false,
    };
  },
  methods: {
    menuClick({key}){
      console.log(key)
      this.$router.push({
          path: key,
      })
    }
  }
};  
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
