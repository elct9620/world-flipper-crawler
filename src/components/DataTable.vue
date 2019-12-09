<template>
  <vk-table :data="sortedItems" :sorted-by.sync="sortedBy" cellMiddle>
    <component :is="column.sortable ? 'vk-table-column-sort' : 'vk-table-column'"
      v-for="column in columns"
      :key="column.name"
      :title="column.label"
      :cell="column.name"
      >
      <slot slot-scope="{ cell, selected, allSelected }">
      <component :is="column.type || 'span'" :column="column" v-bind="{ cell, selected, allSelected }">
        {{ cell }}
      </component>
      </slot>
    </component>
  </vk-table>
</template>

<script>
import Icon from './DataTable/Icon'
import LocalizedText from './DataTable/LocalizedText'
import Description from './DataTable/Description'

export default {
  name: 'DataTable',
  data() {
    return {
      sortedBy: { rank: 'desc' }
    }
  },
  components: {
    Icon,
    LocalizedText,
    Description,
  },
  props: {
    items: Array,
    columns: Array
  },
  computed: {
    sortedItems() {
      const column = Object.keys(this.sortedBy)[0] // Support one sort column for now
      let items = Array.from(this.items).sort((a, b) => a[column] - b[column])
      if (this.sortedBy[column] == 'desc') {
        items.reverse()
      }

      return items
    }
  }
}
</script>
