<template>
  <main class="user-info-mobile-cont">
    <div class="user-info-mobile main-layout">
      <div ref="profileImgMobile" class="user-info-mobile-image">
        <div>{{ user.username }}</div>
      </div>
      <div class="user-info-mobile-username">{{ this.user.username }}</div>
    </div>
  </main>
  <h1 class="user-info-mobile-title main-layout">החשבון שלי</h1>
</template>
<script>
export default {
  components: {},
  data: () => {
    return {}
  },
  mounted() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16)
    this.$refs.profileImgMobile.style = `background-color: #${randomColor};`
  },
  methods: {},
  computed: {
    user() {
      return this.$store.getters.user
    },
  },
}
</script>
