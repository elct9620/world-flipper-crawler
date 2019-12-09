<template>
  <img :src="cell" class="uk-preserve-width" />
</template>

<script>
export default {
  name: 'DataTable.Icon',
  props: {
    column: Object,
    cell: String,
    selected: Boolean,
    allSelected: Boolean
  }
}
</script>
