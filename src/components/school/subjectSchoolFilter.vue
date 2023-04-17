<template>
    <el-select-v2
      v-model="value"
      :options="options"
      placeholder="בחר מקצוע "
      size="large"
    />
  </template>
  
  <script>
  import { ref } from "vue";
  const initials = ['הכל' ,'אנגלית', 'מתמטיקה', 'ספרות', 'היסטוריה',];
  export default {
    components: {},
    data: () => {
      return {
        value: ref(),
        options: initials.map((initial, idx) => ({
          value: `${initial}`,
          label: `${initial}`,
        })),
      };
    },
    methods: {},
    computed: {},
    watch: {
      value() {
        this.$emit("filter", this.value);
        console.log("this.value:", this.value);
      },
    },
  };
  </script>