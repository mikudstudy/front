<template>
  <div class="subject">
    <h1>המקצועות שלי</h1>
    <ul>
      <li v-for="subject in allSubjects" key="subject" class="subject-list">
        <span>{{ allSubjects.indexOf(subject) + 1 }}</span> {{ subject }}
      </li>
    </ul>
    <pre>{{ new Date().toLocaleString('default', { month: 'long' }) }}</pre>
  </div>
</template>
<script>
export default {
  components: {},
  data: () => {
    return {}
  },
  methods: {},
  mounted() {},
  computed: {
    allSubjects() {
      return this.$store.getters.allSubjects
    },
  },
}
</script>
