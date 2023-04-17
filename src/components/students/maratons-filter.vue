<template>
  <el-select-v2 @submit="filter" v-model="filterBy.subject" :options="options" placeholder="הקלד/י מקצוע" size="large" />
  <div>{{ filterBy.subject }}dfdf</div>
</template>
<script>
const initials = ['גרפיקה', 'אלגברה', 'אינפי', 'סוציולוגיה']
import { ref } from 'vue'

export default {
  components: {},
  data: () => {
    return {
      filterBy: {
        subject: '',
        school: '',
      },

      value: ref(),
      options: initials.map((initial, idx) => ({
        value: `${initial}`,
        label: `${initial}`,
      })),
    }
  },
  methods: {
    filter() {
      console.log('filter', this.filterBy)
      this.$emit('filter', this.filterBy)
    },
  },
  computed: {},
}
</script>
