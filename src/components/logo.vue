<template>
    <div class="logo">
        <span>{{ data.logoText }}</span>
    </div>
</template>

<script>
import { reactive } from 'vue'
   export default {
    name:'logo',
    setup(a,b){
        let data = reactive({
            logoText:'Y&m'
        })
        return {
            data
        }
    }
   }
</script>

<style scoped>
.logo{
    position: absolute;
    text-align: center;
    height: 30px;
    line-height: 30px;
    padding:5px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    color: #ffffff;
    font-stretch: semi-condensed;
    font-family: math;
    font-size: 20px;
    font-style: italic;
}
</style>