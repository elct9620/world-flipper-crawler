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
        { name: 'id', label: 'ID', sortable: true },
        { name: 'icon', class: 'uk-table-shrink', type: 'Icon' },
        { name: 'name', label: '名稱', type: 'LocalizedText' },
        { name: 'rank', label: '星級', sortable: true },
        { name: 'element', label: '屬性' },
        { name: 'effects', label: '效果', type: 'Description' },
        { name: 'max_effects', label: 'MAX 效果', type: 'Description' },
        { name: 'hp', label: 'HP', sortable: true },
        { name: 'atk', label: 'ATK', sortable: true },
        { name: 'max_hp', label: 'MAX HP', sortable: true },
        { name: 'max_atk', label: 'MAX ATK', sortable: true },
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
