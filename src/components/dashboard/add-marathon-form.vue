<template>
  <div class="add-lesson-form-cont">
    <div class="grey-div"></div>
    <form @submit.prevent="addMarathon" class="add-lesson-form">
      <button @click="$emit('closeMarathonform')">x</button>
      <h1>נתוני המרתון שתרצה להוסיף:</h1>
      <input v-model="newMarathon.subject" class="input" type="text" placeholder="מקצוע" />
      <input v-model="newMarathon.school" class="input" type="text" placeholder="מוסד לימודים " />
      <input v-model="newMarathon.date" class="input" type="date" placeholder="תאריך" />
      <input v-model="newMarathon.teacherName" class="input" type="text" placeholder="שם המורה " />
      <input v-model="newMarathon.paymentLink" class="input" type="text" placeholder="לינק לתשלום  " />

      <button type="submit">הוסף</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'ProjectApp',
  components: {},
  data() {
    return {
      newMarathon: {
        subject: '',
        school: '',
        date: '',
        teacherName: '',
        paymentLink: '',
      },
    }
  },
  created() {},
  methods: {
    async addMarathon() {
      await this.$store.dispatch({ type: 'addMarathon', cred: { ...this.newMarathon } })
      console.log('this.newMarathon:', { ...this.newMarathon })
      // await this.$store.dispatch({ type: 'addMarathon', cred: { ...this.newMarathon} })
      // console.log('this.newMarathon:', { ...this.newMarathon})
    },
  },
  computed: {},
  unmounted() {},
}
</script>
<style></style>
