<template>
  <div class="flex home-open main-layout">
    <svgg />
    <div class="home-txt">
      <h5 class="title3">קבל את הכלים הנחוצים להצלחתך כאן <span>ועכשיו</span></h5>
      <h1 class="title2">לא משנה מהן המטרות הלימודיות שלך, אנחנו כאן לעבור דרך עד שנגיע ליעדים. זה הזמן שלך לחוות את תחושת ההצלחה.</h1>

      <div class="open-btns-cont">
        <a aria-label="Chat on WhatsApp" href="https://wa.me/972547799529" class="btn">דבר עם איש צוות</a>
        <button class="btn btn-1" @click="openForm = true">קבע שיעור פרטי</button>
      </div>
      <div v-if="openForm" class="grey-div" @click="openForm = false"></div>
      <div v-if="openForm" class="lesson-register">
        <signupLesson></signupLesson>
        <button @click="openForm = false" class="form-btn">סגור</button>
      </div>
    </div>
  </div>
</template>
<script>
import svgg from './svgs/svg-openhome.vue'
import signupLesson from '../students/signupLesson.vue'
export default {
  components: {
    svgg,
    signupLesson,
  },
  data() {
    return {
      openForm: false,
    }
  },
  created() {},
  methods: {},
  computed: {},
  unmounted() {},
}
</script>
<style scoped>
a {
  color: rgb(255, 255, 255);
}
.btn-1 {
  margin: 0.5rem;
}

.down-arrow-enter-active {
  animation: wobble 0.5s ease 1s infinite;
}

@keyframes wobble {
  0% {
    transform: translate(10px);
  }

  50% {
    transform: translate(20px);
  }
  100% {
    transform: translate(25px);
  }
}
</style>
