<template>
  <img :src="row[column.name]" class="uk-preserve-width" />
</template>

<script>
export default {
  name: 'DataTable.Icon',
  props: {
    column: Object,
    row: Object
  }
}
</script>
