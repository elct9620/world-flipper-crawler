<template>
  <div>
    <div v-for="(description, idx) in descriptions" :key="idx">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataTable.Description',
  props: {
    column: Object,
    row: Object
  },
  computed: {
    descriptions() {
      return this.row[this.column.name]
    }
  }
}
</script>
