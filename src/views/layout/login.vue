<template>
  <div class="common-layout anjia-height-fill">
    <el-container class="anjia-height-fill">
      <el-main class="login-main"></el-main>
      <el-aside width="400px">
        <el-input v-model="account" class="w-50 m-2" size="large" placeholder="Please Input" />
        <el-input v-model="password" class="w-50 m-2" size="large" placeholder="Please Input" />
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account:'',
      password:''
    };
  },
  methods: {
    startLoveTravel() {
      this.$router.push('/home');
    },
  },
};
</script>

<style>
.login-main {
  height: 100%;
  background: url(~/assets/login-bg.png) no-repeat;
  background-position: center center;
  background-size:contain;
}
.anjia-login-footer {
  text-align: center;
}
</style>
