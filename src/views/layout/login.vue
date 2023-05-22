<template>
  <div class="common-layout ym-height-fill">
    <el-container class="ym-height-fill">
      <el-header class="login-header">
        <div class="login-header-content">
          <logo style="width:80px;top:10px" :logoWidth="50" :logoHeight="50" />
        </div>
      </el-header>
      <el-main>
        <div class="login-wrap login-box-wrap">
          <!--账号密码登录-->
          <LoginWrap loginOption="账号密码登录">
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
                <!-- <router-link to="/resetpwd">找回密码</router-link> | <router-link to="/register">快速注册</router-link> -->
              </div>
            </template>
            <template #foot>
              未开通小窝坊帐号可通过
              <a class="ym-login-mehtod-item" href="" @click.prevent="switchLoginOption('weChatLogin')">其他方式登录</a>
            </template>
          </LoginWrap>
          <div class="login-wrap login-wrap-hide" :class="{ 'login-slide-show': !data.loginMethod.accountLogin }">
            <!--微信扫码登录-->
            <LoginWrap loginOption="微信扫码登录" v-show="data.loginMethod.weChatLogin">
              <template #content>
                <div class="login-qrcode">
                  <div class="login-qrcode-wrap">
                    <el-image :src="data.loginEwm" fit="cover" style="width:150px; height:150px" />
                  </div>
                </div>
              </template>
              <template #foot>
                <div class="ym-login-methods">
                  <a class="ym-login-mehtod-item no-select" href="" @click.prevent="switchLoginOption('accountLogin')">
                    <el-icon>
                      <ArrowLeft />
                    </el-icon>
                    账号密码
                  </a>
                  <a class="ym-login-mehtod-item" :class="{ 'no-select': !data.loginMethod.weChatLogin }" href=""
                    @click.prevent="switchLoginOption('weChatLogin')">微信</a>
                  <a class="ym-login-mehtod-item" :class="{ 'no-select': !data.loginMethod.phoneLogin }" href=""
                    @click.prevent="switchLoginOption('phoneLogin')">手机号</a>
                </div>
              </template>
            </LoginWrap>
            <!--手机号码登录-->
            <LoginWrap loginOption="手机号码登录" v-show="data.loginMethod.phoneLogin">
              <template #content>

              </template>
              <template #foot>
                <div class="ym-login-methods">
                  <a class="ym-login-mehtod-item no-select" href="" @click.prevent="switchLoginOption('accountLogin')">
                    <el-icon>
                      <ArrowLeft />
                    </el-icon>
                    账号密码
                  </a>
                  <a class="ym-login-mehtod-item" :class="{ 'no-select': !data.loginMethod.weChatLogin }" href=""
                    @click.prevent="switchLoginOption('weChatLogin')">微信</a>
                  <a class="ym-login-mehtod-item" :class="{ 'no-select': !data.loginMethod.phoneLogin }" href=""
                    @click.prevent="switchLoginOption('phoneLogin')">手机号</a>
                </div>
              </template>
            </LoginWrap>
          </div>
        </div>
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
import { Calendar, Search, User, Loading, Key, Eleme, ArrowLeft } from '@element-plus/icons-vue'
import LoginWrap from '~/components/loginwrap.vue'
import loginEwm from '~/assets/ewm.png'
import logo from '~/components/logo.vue'

//configuration
const LoginMethodOption = {
  WeChatLogin: 'weChatLogin',
  PhoneLogin: 'phoneLogin',
  AccountLogin: 'accountLogin'
}

export default {
  name: 'login',
  components: {
    logo,
    ArrowLeft,
    LoginWrap
  },
  setup() {
    const router = useRouter()
    let data = reactive({
      account: 'test',
      password: 'password',
      loginBtnContent: '登录',
      loginBtnIsShowLoading: false,
      loginEwm: loginEwm,
      loginMethod: {
        weChatLogin: false,
        phoneLogin: false,
        accountLogin: true
      }
    })

    //登录
    function login() {
      data.loginBtnIsShowLoading = true;
      data.loginBtnContent = '登录中...';
      router.push('/home');
    }

    //切换至账号密码登录方式
    function switchLoginOption(loginOption) {
      for (const key in data.loginMethod) {
        if (key === loginOption) {
          data.loginMethod[loginOption] = !data.loginMethod[loginOption]
        }
        else {
          data.loginMethod[key] = false
        }
      }
    }

    return {
      //icon
      Calendar,
      Search,
      User,
      Loading,
      Key,
      Eleme,
      ArrowLeft,
      //data
      data,
      //methods
      login,
      switchLoginOption
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

.login-wrap {
  width: 340px;
  height: 415px;
  position: absolute;
}

.login-box-wrap {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #FFF;
  overflow: hidden;
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

.ym-login-methods {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

.ym-login-methods>a {
  position: relative;
  width: 33%;
}

.ym-login-methods :not(:first-child):before {
  content: '';
  height: 13px;
  width: 1px;
  border-radius: 10px;
  display: inline-block;
  background-color: rgb(238, 238, 238);
  position: absolute;
  left: 0;
  top: 1px;
}


.ym-login-mehtod-item {
  text-decoration: none;
}

.no-select {
  color: #7a7777;
}

.login-wrap-hide {
  left: 100%;
  transition: all .2s ease-in-out;
}

.login-slide-show {
  left: 0;
}

.login-qrcode {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-qrcode-wrap {
  padding: 10px;
  border: 1px solid #f1eeee;
  border-radius: 5px;
}

.login-header-content {
  width: var(--ym-min-width);
  height: 100%;
  margin: 0 auto;
}
</style>
