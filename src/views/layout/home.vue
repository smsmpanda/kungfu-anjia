<template>
  <div class="common-layout  ym-height-filll">
    <el-container class="ym-height-filll">
      <el-aside class="home-main-left">
        <div class="ym-main-logo">
          <logo class="ym-logo" logoWidth="50" logoHeight="50" />
        </div>
        <div class="home-menu-wrap">
          <div class="home-menu-item" v-for="menu in data.menus" v-bind:key="menu.Id">
            <router-link class="home-menu-item-link" :to="menu.type">
              <div class="home-menu-icon">
                <img :src="menu.icon" />
              </div>
              <div class="home-menu-text">{{ menu.name }}</div>
            </router-link>
          </div>
        </div>
      </el-aside>
      <el-container class="ym-main-right">
        <el-header class="ym-header">
          <el-row class="ym-header-content" align="middle">
            <el-col :span="8" :offset="8">
              <el-input size="large" placeholder="全局搜索" v-model="data.searcContent" :prefix-icon="Search"></el-input>
            </el-col>
            <el-col :span="8">
              <ul class="ym-header-col">
                <li><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" /></li>
                <li><el-button type="primary" size="large" style="width:100px">登录</el-button></li>
              </ul>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import menus from '~/data.json';
import logo from '~/components/logo.vue'
import { Search, UserFilled } from '@element-plus/icons-vue'
import { reactive } from 'vue';

export default {
  name: 'home',
  components: {
    logo
  },
  setup() {
    let data = reactive({
      menus,
      searcContent: '',
      squareUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    })
    return {
      Search,
      UserFilled,
      data
    };
  }
}
</script>

<style scoped>
.home-main-left {
  width: 170px;
  background-color: var(--ym-background-color);
  color: var(--ym-global-color);
}

.ym-main-right {
  color: var(--ym-global-color);
  /* background-color: var(--ym-content-background-color); */
}

.ym-main-logo {
  position: relative;
  height: 50px;
}

.ym-logo {
  width: 100%;
}

.ym-header-col {
  display: flex;
  justify-content: end;
}

.ym-header-col li:not(:last-child) {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}

.ym-header {
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
}

.ym-header-content {
  flex: 1;
}

.home-menu-item-link {
  display: flex;
  text-decoration: none;
  height: 35px;
  line-height: 35px;
  color: rgba(255, 255, 255, .5);
  font-family: 'PingFang SC,DFPKingGothicGB-Medium,sans-serif';
  font-weight: 400;
}


.ym-menu-active {
  font-size: 16px;
  color: #fff;
}

.ym-menu-active .home-menu-icon>img {
  filter: opacity(1);
}

.home-menu-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home-menu-item {
  margin: 12px 20px 0 20px;
}

.home-menu-item-link:hover .home-menu-icon>img,
.home-menu-item-link:hover .home-menu-text {
  color: #fff;
  filter: opacity(1);
}

.home-menu-icon {
  padding: 0 12px 0 0;
  display: flex;
  align-items: center;

}

.home-menu-icon img {
  width: 24px;
  height: auto;
  filter: opacity(50%);
}

@media screen and (max-width: 1280px) {
  .home-main-left {
    width: 75px;
  }

  .home-menu-item-link {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    height: auto;
    line-height: 1;
  }

  .home-menu-item {
    margin: 8px 18px 0;
  }

  .home-menu-text {
    line-height: 25px;
    text-align: center;
  }

  .home-menu-icon {
    padding: 0;
  }
}
</style>
