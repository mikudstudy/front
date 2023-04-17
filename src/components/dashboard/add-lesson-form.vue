<template>
  <div class="add-lesson-form-cont">
    <div class="grey-div"></div>

    <form @submit.prevent="addLesson" class="add-lesson-form">
      <button class="add-lesson-btn" @click="$emit('closeLessonform')">x</button>
      <h1>נתוני השיעור ששתרצה להוסיף:</h1>
      <input v-model="newLesson.subject" class="input" type="text" placeholder="מקצוע" />
      <input v-model="newLesson.place" class="input" type="text" placeholder="מיקום" />
      <input v-model="newLesson.time" class="input" type="text" placeholder="שעה" />
      <input v-model="newLesson.studentEmail" class="input" type="text" placeholder="אימייל התלמיד" />
      <input v-model="newLesson.date" class="input" type="date" />

      <button class="form-btn" type="submit">הוסף</button>
    </form>
  </div>
</template>
<script>
export default {
  components: {},
  data: () => {
    return {
      newLesson: {
        subject: '',
        place: '',
        date: '',
        time: '',
        studentEmail: '',
        teacherId: '',
      },
    }
  },
  methods: {
    async addLesson() {
      // newLesson.teacherFullName=this.user.fullName
      await this.$store.dispatch({ type: 'addLesson', cred: { ...this.newLesson, teacherId: this.user._id } })
      console.log('this.newLesson:', { ...this.newLesson, teacherId: this.user._id })

      //   this.$router.push(`/dashboard/${this.user._id}`)
    },
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
  },
}
</script>
