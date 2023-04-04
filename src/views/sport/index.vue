<template>
    <el-button type="danger" @click="toast">fsdf</el-button> <br />

    <div class="my-2 text-center flex flex-wrap justify-center items-center">
        <el-button @click="count++">count is: {{ count }}</el-button>
        <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
        <el-button type="success" @click="count++">count is: {{ count }}</el-button>
        <el-button type="warning" @click="count++">count is: {{ count }}</el-button>
        <el-button type="danger" @click="count++">count is: {{ count }}</el-button>
        <el-button type="info" @click="count++">count is: {{ count }}</el-button>
    </div>

    <el-switch v-model="toggle" @change="toggleDark" />
</template>
<script>

import { toggleDark } from '~/utils'

export default {
    data() {
        return {
            count: 0,
            toggle: false
        }
    },
    methods: {
        toast() {
            alert(2)
        },
        toggleDark() {
            toggleDark()
        }
    }
}
</script>