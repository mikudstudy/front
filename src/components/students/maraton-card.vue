<template>
  <div class="student-item" name="marathon-card" :class="doneClass">
    <p v-if="done" class="done">
      <el-icon><Check /></el-icon>בוצע
    </p>
    <div class="student-item-info flex space-between">
      <h3>{{ school }}</h3>
      <h4>{{ date }}</h4>
    </div>
    <div class="date-teacher flex space-between">
      <h4>{{ maratonDescription }}</h4>
      <h4>{{ teacher }}</h4>
    </div>
    <hr />
    <button class="doneB" v-if="done">לצפייה בהקלטה</button>
    <button class="student-btn" @click="toggleDetails" v-else>
      לפרטים ולהרשמה <i class="fa-solid fa-angle-left"></i>
    </button>
  </div>
  <div v-if="detailsAreVisible" class="grey-div" @click="toggleDetails"></div>
  <div v-if="detailsAreVisible" class="blank-background">
    <div class="container">
      <h1>{{ school }}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque tenetur
        omnis iure nam facilis dolores commodi quasi repudiandae quidem ipsam
        velit, maxime ad, quisquam quaerat mollitia, saepe atque similique
        aperiam!
      </p>
      <a href="" class="register-btn">הרשמה</a>
    </div>
    <button @click="toggleDetails" class="form-btn">סגור</button>
  </div>
</template>
<script>
export default {
  props: ["school", "date", "teacher", "maratonDescription", "done"],
  components: {},
  data: () => {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
  computed: {
    doneClass() {
      return {
        doneC: this.done,
        doneB: this.done,
      };
    },

  },
};
</script>

<style scoped>

</style>
