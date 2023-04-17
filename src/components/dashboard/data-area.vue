<template>
  <div class="dashboard-data-area">
    <barChart></barChart>
    <pieChart></pieChart>
  </div>
</template>
<script>
import barChart from './barChart.vue'
import pieChart from './pieChart.vue'
export default {
  components: { barChart, pieChart },
  data: () => {
    return {}
  },
  methods: {},
  computed: {},
}
</script>
