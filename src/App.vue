<template>
  <div id="app">
    <DataTable :items="weapons" :columns="columns" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DataTable from './components/DataTable'

export default {
  name: 'app',
  data() {
    return {
      columns: [
        { name: 'icon', class: 'uk-table-shrink', type: 'Icon' },
        { name: 'name', label: '名稱', type: 'LocalizedText' },
        { name: 'rank', label: '星級' },
        { name: 'element', label: '屬性' },
        { name: 'effects', label: '效果', type: 'Description' },
        { name: 'max_effects', label: 'MAX 效果', type: 'Description' },
        { name: 'hp', label: 'HP' },
        { name: 'atk', label: 'ATK' },
        { name: 'max_hp', label: 'MAX HP' },
        { name: 'max_atk', label: 'MAX ATK' },
        { name: 'sources', label: '獲取途徑', type: 'Description' },
      ]
    }
  },
  components: {
    DataTable,
  },
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
