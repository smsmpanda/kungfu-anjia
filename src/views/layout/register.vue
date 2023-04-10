<template>
    <layout :module-name="data.moduleName">
        <template #content>
            <h1>{{ data.module }}</h1>
        </template>
    </layout>
</template>

<script>
import { reactive } from 'vue'
import layout from '~/components/layout.vue'

export default {
    name:'resetpwd',
    components:{
        layout
    },
    setup(){
        let data= reactive({
            module:'注册',
            moduleName:'注册界面...'
        });
        return {
            data
        }
    }
}
</script>