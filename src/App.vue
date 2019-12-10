<template>
  <div id="app">
    <vk-sticky :top="0">
      <vk-navbar>
        <vk-navbar-nav>
          <router-link v-for="(item, idx) in navbarItems" :to="item.to" :key="idx" v-slot="{ href, isActive, navigate }">
            <vk-navbar-nav-item :title="item.name" :href="href" :active="isActive" @click="navigate"></vk-navbar-nav-item>
          </router-link>
        </vk-navbar-nav>
        <vk-navbar-nav slot="right">
          <vk-navbar-nav-item :href="dataSource" title="資料來源" target="_blank"></vk-navbar-nav-item>
          <vk-navbar-nav-item icon="github" href="https://github.com/elct9620/world-flipper-crawler" title="" target="_blank"></vk-navbar-nav-item>
        </vk-navbar-nav>
      </vk-navbar>
    </vk-sticky>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      navbarItems: [
        { name: '裝備', to: '/' },
      ],
      // TODO: Allow set multiple sources
      dataSource: 'https://docs.google.com/spreadsheets/d/1rpdOVhqE8NBQx23zUMq-KRWAU2LCwg6toPXj0xzqgD4'
    }
  }
}
</script>
