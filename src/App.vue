<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Notification />
  </div>
</template>

<script>
import Notification from './components/Notification'
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Notification,
    Navbar
  }
}
</script>
