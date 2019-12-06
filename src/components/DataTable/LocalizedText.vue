<template>
  <span>{{ text }}</span>
</template>

<script>
export default {
  name: 'DataTable.LocalizedText',
  props: {
    column: Object,
    row: Object
  },
  computed: {
    text() {
      const value = this.row[this.column.name]
      return value.zh || value.ja
    }
  }
}
</script>
