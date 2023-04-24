<template>
    <el-button type="danger">fsdf</el-button> <br />
    <el-switch v-model="data.toggle" @change="toggleTheme" />
</template>
<script>
import { reactive } from 'vue'
import { toggleDark } from '~/utils'

export default {
    name: 'sport',
    setup() {
        let data = reactive({
            toggle: true,
        })
        function toggleTheme(data) {
            toggleDark()
        }
        return {
            data,
            toggleTheme
        }
    }
}
</script>