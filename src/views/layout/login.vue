<template>
  <div class="common-layout anjia-height-fill">
    <el-container class="anjia-height-fill">
      <el-header class="login-header">Y&m</el-header>
      <el-main>
        <el-card class="login-box-wrap">
          <div class="login-item">
            <el-input v-model="data.account" class="w-50 m-2" size="large" placeholder="账号名/邮箱/手机" :prefix-icon="User" />
          </div>
          <div class="login-item">
            <el-input v-model="data.password" type="password" class="w-50 m-2" size="large" placeholder="请输入登录密码"
              :prefix-icon="Key" />
          </div>
          <div class="login-item">
            <el-button class="login-btn" type="primary" :loading-icon="Eleme" :loading="data.loginBtnIsShowLoading"
              @click="login">{{
                data.loginBtnContent }}</el-button>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>

import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { Calendar, Search, User, Loading, Key, Eleme } from '@element-plus/icons-vue'

export default {
  name: 'login',
  setup() {
    const router = useRouter()
    let data = reactive({
      account: 'test',
      password: 'password',
      loginBtnContent: '登录',
      loginBtnIsShowLoading: false,
    })

    function login() {
      data.loginBtnIsShowLoading = true;
      data.loginBtnContent = '登录中...';
      router.push('/home');
    }

    return {
      Calendar, Search, User, Loading, Key, Eleme,
      data,
      login
    }
  }
};
</script>

<style>
.login-header {
  background-color: #0635ff;
  color: #fff;
  line-height: 60px;
}

.login-main {
  height: 100%;
  background: url(~/assets/login-bg.png) no-repeat;
  background-position: center center;
  background-size: contain;
}

.login-box-wrap {
  position: absolute;
  top: 50%;
  right: 0;
  width: 350px;
  transform: translate(-100px, -50%);
}

.anjia-login-footer {
  text-align: center;
}

.login-item {
  margin: 20px 10px;
}

.login-btn {
  width: 100%;
  height: 40px
}
</style>
