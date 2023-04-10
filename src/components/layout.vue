<template>
    <div>
        {{ moduleName }}
    </div>
    <div>
        <slot name="content"></slot>
    </div>
    <div></div>
</template>
<script>
export default {
    name: 'layout',
    props: {
        moduleName: String
    },
    setup() {

    }
}
</script>