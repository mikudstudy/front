<template>
  <div class="dash-title">
    <!-- <img class="profile-img" src="../../../src/styles/imgs/logo.png" alt="" /> -->
    <div @load="getRandomColor" ref="profileImg" class="profile-img">
      <div class="">{{ user.username }}</div>
    </div>
    <div class="user-info-username">{{ user.username }}</div>
    <div class="user-info-username"><i class="fa-regular fa-pen-to-square"></i></div>

    <button @click="showPlans = !showPlans" class="form-btn">
      {{ textPlans }}
    </button>
    <hr class="user-info-hr" />

    <div class="user-info-deats-cont">
      <div class="user-info-deats">
        <div>רעננה</div>
        <div>
          מיקום
          <i class="fa-solid fa-location-dot"></i>
        </div>
      </div>
      <div class="user-info-deats">
        <div>יוני 2023</div>
        <div>
          פתיחת חשבון
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="grey-div" v-if="showPlans" @click="ToggleShow"></div>
  <div class="plan-content" v-if="showPlans">
    <h1>תוכניות</h1>
    <CardContainer> </CardContainer>
    <button @click="showPlans = !showPlans" class="form-btn">סגור</button>
  </div>
</template>
<script>
import CardContainer from '../CardContainer.vue'
export default {
  components: { CardContainer },
  data: () => {
    return {
      showPlans: false,
      // randomColor: ' #ffffff',
    }
  },
  methods: {
    getRandomColor() {},
  },
  mounted() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16)
    console.log('randomColorrrrrr: ', randomColor)
    this.$refs.profileImg.style = `background-color: #${randomColor};`
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    textPlans() {
      if (this.showPlans) {
        return 'הסתר תוכניות'
      } else {
        return 'רכישת שיעורים'
      }
    },
  },
}
</script>
