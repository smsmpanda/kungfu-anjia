<template>
  <div class="common-layout anjia-login-wrap">
    <el-container class="anjia-height-fill">
      <el-header></el-header>
      <el-main el-main></el-main>
      <el-footer class="anjia-login-footer">
        <el-button @click="startLoveTravel" type="danger" plain>Let's Go ♥</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    startLoveTravel() {
      this.$router.push('/home');
    },
  },
};
</script>

<style>
.anjia-login-wrap {
  height: 100%;
  background: url(../assets/login-ba.png) no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: contain;
}
.anjia-login-footer {
  text-align: center;
}
</style>
