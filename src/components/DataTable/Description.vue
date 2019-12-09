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
    cell: String,
    selected: Boolean,
    allSelected: Boolean
  },
  computed: {
    descriptions() {
      return this.cell
    }
  }
}
</script>
