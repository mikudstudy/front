<template>
  <div class="admin">
    <h1 class="title-prf">חשבון מנהל</h1>
    <div class="dash-tables-cont main-layout">
      <teacherDashTable></teacherDashTable>
    </div>
    <div class="dash-tables-cont main-layout">
      <marathonDashTable></marathonDashTable>
    </div>
  </div>
  <pre>
    <!-- {{ marathons }} -->
    
  </pre>
</template>
<script>
import teacherDashTable from '../dashboard/teacher-dash-table.vue'
import marathonDashTable from '../dashboard/marathon-dash-table.vue'

export default {
  name: 'ProjectApp',
  components: { teacherDashTable, marathonDashTable },
  data() {
    return {}
  },
  // async created() {
  //   await this.$store.dispatch({ type: 'loadMarathons' })
  // },
  methods: {},
  computed: {
    // marathons() {
    //   return this.$store.getters.marathons
    // },
  },
  unmounted() {},
}
</script>
<style></style>
