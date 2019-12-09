<template>
  <span>{{ text }}</span>
</template>

<script>
export default {
  name: 'DataTable.LocalizedText',
  props: {
    column: Object,
    cell: String,
    selected: Boolean,
    allSelected: Boolean
  },
  computed: {
    text() {
      return this.cell.zh || this.cell.ja
    }
  }
}
</script>
