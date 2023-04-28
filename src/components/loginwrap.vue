<template>
    <div>
        <div>{{ loginOption }}</div>
        <slot name="content">

        </slot>
    </div>
</template>

<script>
export default {
    name: "loginwrap",
    props: {
        loginOption: String
    },
    setup() {

    }
}
</script>