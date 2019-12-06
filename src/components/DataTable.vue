<template>
  <table class="uk-table uk-table-divider">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.name" :class="column.class">{{ column.label }}</th>
      </tr>
    </thead>
    <tr v-for="(item, idx) in items" :key="idx">
      <td v-for="column in columns" :key="column.name">
        <component :is="column.type || 'span'" :column="column" :row="item">
          {{ item[column.name] }}
        </component>
      </td>
    </tr>
  </table>
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
