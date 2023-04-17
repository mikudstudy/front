<template>
  <div class="student-lesson-rev-cont">
    <form @submit.prevent="addStntRevToLesson" class="student-lesson-rev">
      <button @click="$emit('closeStudentReviewModal')">x</button>
      <h1>חוות דעת שלי על השיעור:</h1>
      <textarea v-model="value.text" class="input text-area" placeholder="טקסט חופשי" name="" id="" cols="40" rows="5"></textarea>

      <div class="student-rate">
        <div>הבנתי את החומר:</div>
        <el-rate v-model="value.material" />
      </div>
      <div class="student-rate">
        <div>המורה הגיע מוכן לשיעור:</div>
        <el-rate v-model="value.teacher" />
      </div>
      <div class="student-rate">
        <div>האם קיבלתי שיעורי בית?</div>
        <el-rate v-model="value.homework" />
      </div>

      <button type="submit">הוסף</button>
    </form>
  </div>
</template>
<script>
export default {
  props: ['lessonId'],
  components: {},
  data: () => {
    return {
      // curLessonId: this.lessonId || '',
      value: {
        text: '',
        material: '',
        teacher: '',
        homework: '',
      },
    }
  },
  methods: {
    async addStntRevToLesson() {
      // console.log('LESSON ID: ', this.lessonId)
      // console.log(' value: ', this.value)
      await this.$store.dispatch({ type: 'addStntRevToLesson', studentRev: { ...this.value }, lessonId: this.lessonId })
    },
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
  },
}
</script>
