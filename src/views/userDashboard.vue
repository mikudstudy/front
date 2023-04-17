<template>
  <adminDashboard v-if="user.isAdmin" />
  <div v-if="!user.isAdmin">
    <h1 class="title-prf">החשבון שלי</h1>
    <userInfoMobile></userInfoMobile>

    <div class="table-profile-dets main-layout">
      <userInfo></userInfo>

      <div class="dash-tables-cont">
        <button class="is-student-btn" v-if="user.isTeacher && user.isStudent" @click="studentView = !studentView">
          {{ studentView ? 'החלף למורה' : 'החלף לתלמיד' }}
        </button>
        <studentDashTable v-if="user.isStudent && studentView"></studentDashTable>
        <teacherDashTable v-if="(user.isTeacher && !user.isStudent) || (user.isTeacher && !studentView)"></teacherDashTable>
        <!-- <teacherDashTable v-if="user.isTeacher && !studentView"></teacherDashTable> -->
      </div>
    </div>

    <div class="subject-pay-cont main-layout">
      <div class="dash-data-eval-cont">
        <dataArea></dataArea>
        <studentEvaluation></studentEvaluation>
      </div>
      <subjects></subjects>
    </div>
  </div>
</template>
<script>
import CardContainer from '../components/CardContainer.vue'
import studentDashTable from '../components/dashboard/student-dash-table.vue'
import teacherDashTable from '../components/dashboard/teacher-dash-table.vue'
import dataArea from '../components/dashboard/data-area.vue'
import subjects from '../components/dashboard/subjects.vue'
import userInfo from '../components/dashboard/user-info.vue'
import userInfoMobile from '../components/dashboard/user-info-mobile.vue'

import studentEvaluation from '../components/dashboard/studentEvaluation.vue'

import adminDashboard from '../components/dashboard/adminDashboard.vue'

export default {
  components: {
    CardContainer,
    studentDashTable,
    teacherDashTable,
    dataArea,
    subjects,
    userInfo,
    userInfoMobile,

    studentEvaluation,

    adminDashboard,
  },
  data: () => {
    return {
      studentView: true,
      showPlans: false,
    }
  },

  async created() {
    await this.$store.dispatch({ type: 'loadLessons' })
  },
  methods: {},
  computed: {
    user() {
      return this.$store.getters.user
    },
  },
}
</script>

<style scoped>
.title-prf {
  margin-top: 2%;
  text-align: center;
  font-size: 30px;
  color: #393939;
}

h1 {
  text-align: center;
  margin: 0 auto;
  color: #393939;
}
</style>
