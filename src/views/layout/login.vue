<template>
  <div style="background-color: var(--ym-primary);" class="common-layout ym-height-fill">
    <el-container class="ym-height-fill">
      <el-header class="login-header">
        <logo style="width:80px;top:10px" :logoWidth="50" :logoHeight="50" />
      </el-header>
      <el-main>
        <el-card class="login-box-wrap">
          <el-row>
            <el-col :span="12">
              <el-image style="width:auto;height: 100%;" :src="data.loginImg"></el-image>
            </el-col>
            <el-col :span="12" style="position:relative">
              <div class="login-module-box">
                <loginwrap loginOption="微信">
                  <template #content>
                    <div class="login-item">
                      <el-input v-model="data.account" class="login-input w-50 m-2" size="large" placeholder="账号名/邮箱/手机"
                        :prefix-icon="User" />
                    </div>
                    <div class="login-item">
                      <el-input v-model="data.password" type="password" class="login-input w-50 m-2" size="large"
                        placeholder="请输入登录密码" :prefix-icon="Key" />
                    </div>
                    <div class="login-item">
                      <el-button class="login-input login-btn" type="primary" :loading-icon="Eleme"
                        :loading="data.loginBtnIsShowLoading" @click="login">{{
                          data.loginBtnContent }}</el-button>
                    </div>
                    <div class="login-item">
                      <router-link to="/resetpwd">找回密码</router-link> | <router-link to="/register">快速注册</router-link>
                    </div>
                  </template>
                </loginwrap>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-main>
      <el-footer>
        <div class="login-footer"></div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { Calendar, Search, User, Loading, Key, Eleme } from '@element-plus/icons-vue'
import loginwrap from '~/components/loginwrap.vue'
import loginImg from '~/assets/logo-main.png'
import logo from '~/components/logo.vue'

export default {
  name: 'login',
  components: {
    logo
  },
  setup() {
    const router = useRouter()
    let data = reactive({
      account: 'test',
      password: 'password',
      loginBtnContent: '登录',
      loginBtnIsShowLoading: false,
      loginImg: loginImg
    })

    function login() {
      data.loginBtnIsShowLoading = true;
      data.loginBtnContent = '登录中...';
      router.push('/home');
    }

    return {
      //icon
      Calendar,
      Search,
      User,
      Loading,
      Key,
      Eleme,
      //data
      data,
      //methods
      login
    }
  }
};
</script>

<style scoped>
.login-header {
  position: relative;
}

.login-main {
  background: url(~/assets/login.png) no-repeat;
  background-position: center center;
}

.login-box-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 85%;
  transform: translate(-50%, -50%);
}

.ym-login-footer {
  text-align: center;
}

.login-item {
  margin: 20px 10px;
  text-align: center;
}


.login-btn {
  width: 100%;
  height: 40px
}

.login-input {
  width: 85%;
}

.login-footer {
  line-height: 60px;
  color: var(--ym-color);
  text-align: center;
  font-size: 12px;
}

.login-module-box {
  position: absolute;
  width: 340px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
}
</style>
