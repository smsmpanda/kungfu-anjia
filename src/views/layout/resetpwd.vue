<template>
    <layout :module-name="data.moduleName">
        <template #content>
            {{ data.module }}
        </template>
    </layout>
</template>

<script>
import { reactive } from 'vue'
import layout from '~/components/layout.vue'

export default {
    components: {
        layout
    },
    name: 'resetpwd',
    setup() {

        let data = reactive({
            module: '重置密码',
            moduleName: '重置密码....'
        })
        return {
            data
        }
    }
}
</script>