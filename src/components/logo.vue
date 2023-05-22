<template>
    <div class="logo">
        <svg t="1682172519291" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="53263" :width="logoWidth" :height="logoHeight">
            <path d="M745.6 345.9m-99.7 0a99.7 99.7 0 1 0 199.4 0 99.7 99.7 0 1 0-199.4 0Z" fill="#FFCF48" p-id="53264">
            </path>
            <path
                d="M650.3 528.6l-62 60.9 59.2 59.9c11.8 11.9 3.2 31.9-13.7 31.9-5.2 0-10.1-2.1-13.7-5.7l-281.5-280-241 382.2h830.7l-278-249.2z"
                fill="#49A0E8" p-id="53265"></path>
        </svg>
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    name: 'logo',
    props: {
        logoWidth: Number,
        logoHeight: Number
    },
    setup(a, b) {
        let data = reactive({
            logoText: 'Y&m'
        })
        return {
            data
        }
    }
}
</script>

<style scoped>
.logo {
    position: absolute;
    text-align: center;
    height: 40px;
    line-height: 30px;
    padding: 5px;
    /* background: rgba(255, 255, 255, 0.1); */
    border-radius: 2px;
    color: #ffffff;
    font-stretch: semi-condensed;
    font-family: math;
    font-size: 20px;
    box-sizing: border-box;
}
</style>