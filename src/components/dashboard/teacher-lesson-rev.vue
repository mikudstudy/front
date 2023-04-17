<template>
  <div class="teacher-lesson-rev-cont">
    <form @submit.prevent="addTeacherRevToLesson" class="teacher-lesson-rev">
      <button class="add-teacher-rev-btn" @click="$emit('closeTeacherReviewModal')">x</button>
      <h1>סיכום שיעור-המורה</h1>
      <textarea v-model="value.text" class="input text-area" placeholder="טקסט חופשי" name="" id="" cols="40" rows="5"></textarea>

      <div class="teacher-rate">
        <div>התלמיד הבין את החומר</div>
        <el-rate v-model="value.student" />
      </div>
      <div class="teacher-rate">
        <div>התלמיד הכין את שיעורי הבית:</div>
        <el-rate v-model="value.homework" />
      </div>

      <button class="add-teache-rev-btn" type="submit">הוסף</button>
    </form>
  </div>
</template>
<script>
export default {
  props: ['lessonId'],
  components: {},
  data: () => {
    return {
      value: {
        text: '',
        student: '',
        homework: '',
      },
    }
  },
  methods: {
    async addTeacherRevToLesson() {
      await this.$store.dispatch({ type: 'addTeacherRevToLesson', teacherRev: { ...this.value }, lessonId: this.lessonId })
    },
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
  },
}
</script>
