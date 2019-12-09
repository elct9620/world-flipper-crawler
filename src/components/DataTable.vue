<template>
  <vk-table :data="items">
    <vk-table-column  v-for="column in columns" :key="column.name" :title="column.label" :cell="column.name">
      <slot slot-scope="{ cell, selected, allSelected }">
      <component :is="column.type || 'span'" :column="column" v-bind="{ cell, selected, allSelected }">
        {{ cell }}
      </component>
      </slot>
    </vk-table-column>
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
  }
}
</script>
