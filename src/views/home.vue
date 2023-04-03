<template>
  <div class="common-layout  anjia-height-fill">
    <el-container class="anjia-height-fill">
      <el-aside class="anjia-main-left">
        <div class="anjia-main-logo"></div>
        <div class="anjia-menu-wrap">
          <div class="anjia-menu-item" v-for="menu in menus" v-bind:key="menu.Id">
            <router-link class="anjia-menu-item-link" :to="menu.type">
              <div class="anjia-menu-icon">
                  <img :src="menu.icon" />
              </div>
              <div class="anjia-menu-text">{{ menu.name }}</div> 
            </router-link>
        </div>
        </div>
      </el-aside>
      <el-container class="anjia-main-right">
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import menus from '../data.json';

export default {
  data() {
    return {
      menus,
    };
  }
}
</script>

<style scoped>
.anjia-main-left{
  width: 170px;
  background-color: var(--anjia-background-color);
  color: var(--anjia-global-color);
}
.anjia-main-right{
  color: var(--anjia-global-color);
  background-color: var(--anjia-content-background-color);
}
.anjia-main-logo{
  height: 50px;
}

.anjia-menu-item-link{
  display: flex;
  text-decoration: none;
  height: 35px;
  line-height: 35px;
  color:rgba(255, 255, 255, .5);
  font-family: 'PingFang SC,DFPKingGothicGB-Medium,sans-serif';
  font-weight: 400;
}


.anjia-menu-active{
  font-size: 16px;
  color: #fff;
}
.anjia-menu-active .anjia-menu-icon > img{
  filter: opacity(1);
}

.anjia-menu-wrap{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.anjia-menu-item{
  margin: 12px 20px 0 20px;
}
.anjia-menu-item-link:hover .anjia-menu-icon > img,
.anjia-menu-item-link:hover .anjia-menu-text{
  color: #fff;
  filter: opacity(1);
}

.anjia-menu-icon{
    padding:0 12px 0 0;
    display: flex;
    align-items: center;
   
}
.anjia-menu-icon img {
  width: 24px; 
  height: auto;
  filter: opacity(50%);
}

@media screen and (max-width: 1280px) {
  .anjia-main-left {
    width: 75px;
  }
  .anjia-menu-item-link{
    display: flex;
    flex-direction: column;
    font-size: 12px;
    height: auto;
    line-height: 1;
  }
  .anjia-menu-item{
    margin: 8px 18px 0;
  }
  .anjia-menu-text{
    line-height: 25px;
    text-align: center;
  }
  .anjia-menu-icon{
    padding:0;
  }
}
</style>>
