<template>
    <div class="home-container enable-col-flex">
        <div class="home-header">
            <div class="home-header-content">
                <div></div>
            </div>
        </div>
        <div class="home-center enable-row-flex">
            <div class="home-center-main">
                <ul class="home-content-nav clearfix" @tab-click="handleClick">
                    <li v-for="tabKind in data.tabKinds" v-bind:key="tabKind.tabUrl">
                        <router-link :to="tabKind.tabUrl">{{ tabKind.lable }}</router-link>
                    </li>
                </ul>
                <div class="home-content-nav-detail">
                    <router-view></router-view>
                </div>
            </div>
            <div class="home-center-aside">
                <div class="home-personal-center">
                    <div class="home-idea enable-row-flex">
                        <div>
                            <div>f</div>
                            <div>发视频</div>
                        </div>
                        <div>
                            <div>f</div>
                            <div>发视频</div>
                        </div>
                        <div>
                            <div>f</div>
                            <div>发视频</div>
                        </div>
                    </div>
                    <div>
                        <el-button type="primary" plain>进入创作中心</el-button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import logo from '~/components/logo.vue'
import { Search, UserFilled } from '@element-plus/icons-vue'
import { reactive, computed, watch } from 'vue'

export default {
    name: 'home',
    setup() {

        let data = reactive({
            tabKinds: [
                { tabUrl: 'follow', lable: '关注' },
                { tabUrl: 'recommend', lable: '推荐' },
                { tabUrl: 'hot', lable: '热榜' },
                { tabUrl: 'video', lable: '视频' }
            ]
        })

        //methods
        function handleClick(tab, event) {
            console.log(tab, event)
        }

        //computed
        const cpuActiveName = computed(() => data.tabKinds.find(t => t.active).name)

        return {
            Search,
            UserFilled,
            handleClick,
            cpuActiveName,
            data,
        }
    },
}
</script>

<style scoped>
body {
    overflow: auto;
}

.home-container {
    background-color: #f6f6f6;
}

.home-header {
    position: sticky;
    top: 0;
    height: 50px;
    background-color: #fff;
    box-shadow: 0 1px 3px hsla(0, 0%, 7%, .1);
}

.home-header-content {
    width: var(--ym-min-width);
    margin: 0 auto;
}

.home-center {
    flex: 1;
    margin: 10px auto;
    width: var(--ym-min-width);
}

.home-center-main {
    flex: 1;
    background-color: #fff;
    height: 2000px;
}

.home-center-aside {
    width: 300px;
    margin-left: 20px;
    background-color: #fff;
}

.home-personal-center {
    padding: 20px;
}

.home-idea {
    align-items: center;
    justify-content: space-between;
}

.home-idea>div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.home-personal-center>div:not(:last-child) {
    margin-bottom: 20px;
}

.home-content-nav {
    border-bottom: 1px solid #f0f2f7;
    overflow: hidden;
}

.home-content-nav li {
    float: left;
    height: 55px;
    line-height: 55px;
    padding-right: 40px;
}

.home-content-nav li:first-child {
    padding-left: 20px;
}

.home-content-nav-detail {}
</style>
