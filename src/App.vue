<template>
   <el-config-provider namespace="ep">
      <home />
   </el-config-provider>
</template>

<script>

import home from '~/views/layout/home.vue'
export default {
   name: 'app',
   components: {
      home
   }
}
</script>

<style></style>