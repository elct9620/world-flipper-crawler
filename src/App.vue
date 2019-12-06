<template>
  <div id="app">
    <div v-for="( weapon, idx) in weapons" :key="idx">
      <img :src="weapon.icon" />
      {{ weapon.name.zh || weapon.name.ja }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  created() {
    this.reloadWeapons()
  },
  computed: mapGetters({
    weapons: 'getWeapons',
  }),
  methods: {
    ...mapActions([
      'reloadWeapons'
    ])
  }
}
</script>

<style>
#app {
}
</style>
