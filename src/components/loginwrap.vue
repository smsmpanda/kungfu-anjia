<template>
    <div class="ym-login-wrap">
        <div class="ym-login-nav">
            <div class="ym-login-title">{{ loginOption }}</div>
            <div class="ym-login-subtitle "></div>
        </div>
        <div class="ym-login-contentwarp">
            <slot name="content">
            </slot>
        </div>
        <div class="ym-login-footer">
            <slot name="foot"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginWrap",
    props: {
        loginOption: String
    },
    setup() {
        function switchLoginMethod() {

        }
        return {
            switchLoginMethod
        }
    }
}
</script>
<style scoped>
.ym-login-wrap {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
}

.ym-login-title {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #10141A;
    text-align: center;
}

.ym-login-subtitle {
    font-size: 12px;
    line-height: 16px;
    color: rgba(11, 18, 26, 0.6);
    text-align: center;
    margin-top: 8px;
    margin-bottom: 32px;
}

.ym-login-nav {
    color: #10141A;
    text-align: center;
    padding-top: 40px;
}

.ym-login-footer {
    padding: 16px 0 17px;
    border-top: solid 1px #EBEFF2;
    font-size: 12px;
    line-height: 16px;
    color: rgba(11, 18, 26, 0.6);
    text-align: center;
}

.ym-login-contentwarp {
    flex: 1;
}

.ym-login-other {
    text-decoration: none;
}
</style>