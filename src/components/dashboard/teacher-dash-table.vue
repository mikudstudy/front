<template>
  <main class="dash-teacher-table">
    <h1 id="title">שיעורים</h1>
    <div class="dash-table-btns">
      <button @click="isFutureLesson = true" class="dash-table-btn btn d-btn-1" :class="{ active: isFutureLesson }">שיעורים קודמים</button>
      <button @click="isFutureLesson = false" class="dash-table-btn btn d-btn-2" :class="{ active: !isFutureLesson }">
        שיעורים עתידיים
      </button>
      <button @click="openLessonForm = !openLessonForm" class="add-lesson-btn"><i class="fa-solid fa-plus"></i></button>
    </div>
    <div class="table-teacher-header">
      <div></div>
      <div></div>
      <div>מחיר</div>
      <div>תאריך</div>
      <div>שם מורה</div>
      <div>מיקום</div>
      <div>מקצוע</div>
    </div>
    <div v-if="isFutureLesson" v-for="tableRow in pastLessons" class="table-teacher-row">
      <button @click="openLessonSumModal = true" class="btn">צפייה בסיכום שיעור</button>
      <button @click="openTeacherRevModal = true" class="btn add-lesson-sum-btn">הוספת סיכום שיעור</button>

      <div>{{ tableRow.price }}</div>
      <div>{{ tableRow.date }}</div>
      <div>{{ tableRow.tutor }}</div>
      <div>{{ tableRow.place }}</div>
      <div>{{ tableRow.subject }}</div>

      <teacherRevModal
        :lessonId="tableRow._id"
        @closeTeacherReviewModal="openTeacherRevModal = false"
        v-if="openTeacherRevModal"
      ></teacherRevModal>
    </div>
    <div v-if="!isFutureLesson" v-for="tableRow in futureLessons" class="table-teacher-row">
      <button @click="openLessonSumModal = true" class="btn">צפייה בסיכום שיעור</button>

      <div>{{ tableRow.num }}</div>
      <div>{{ tableRow.price }}</div>
      <div>{{ tableRow.date }}</div>
      <div>{{ tableRow.tutor }}</div>
      <div>{{ tableRow.place }}</div>
      <div>{{ tableRow.subject }}</div>
    </div>

    <addLessonForm @closeLessonform="openLessonForm = false" v-if="openLessonForm"></addLessonForm>

    <div v-if="openLessonSumModal" class="grey-div" @click="openLessonSumModal = false"></div>
    <div v-if="openTeacherRevModal" class="grey-div" @click="openTeacherRevModal = false"></div>
    <div v-if="openLessonSumModal" class="lesson-summary-cont">
      <h1>סיכום שיעור</h1>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum beatae consequatur nisi repellat! Numquam nulla omnis asperiores
        doloribus vel exercitationem molestias autem. Ut cupiditate atque corporis in doloribus, eos provident.
      </div>
      <button @click="openLessonSumModal = false" class="form-btn">סגור</button>
    </div>
  </main>
</template>
<script>
import addLessonForm from './add-lesson-form.vue'
import teacherRevModal from './teacher-lesson-rev.vue'
export default {
  components: { addLessonForm, teacherRevModal },
  data: () => {
    return {
      openLessonForm: false,

      openLessonSumModal: false,
      openTeacherRevModal: false,
      currentDate: null,
      future: false,
      sort: false,
      // tableRows: [
      //   {
      //     subject: 'חשבון',
      //     date: '2023-03-03',
      //     tutor: 'עדי בירנשטוק',
      //     place: 'בית ספר ביל"ו',
      //     price: '140₪',
      //   },
      //   {
      //     subject: 'חשבון',
      //     date: '2023-03-01',
      //     tutor: 'עדי בירנשטוק',
      //     place: 'בית ספר ביל"ו',
      //     price: '140₪',
      //   },
      //   {
      //     subject: 'עברית',
      //     date: '2023-04-02',
      //     tutor: 'ליאור קצמן',
      //     place: 'ברנדייס 5 רעננה',
      //     price: '140₪',
      //   },
      //   {
      //     subject: 'עברית',
      //     date: '2023-04-01',
      //     tutor: 'ליאור קצמן',
      //     place: 'ברנדייס 5 רעננה',
      //     price: '140₪',
      //   },
      //   {
      //     subject: 'עברית',
      //     date: '2023-02-05',
      //     tutor: 'ליאור קצמן',
      //     place: 'ברנדייס 5 רעננה',
      //     price: '140₪',
      //   },
      // ],
      isFutureLesson: true,
    }
  },
  methods: {
    openLessonSum() {},
    activateClass() {},
  },
  created() {
    // this.tableRows.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    // console.log('date:', new Date().getTime())
  },
  destroy() {
    this.currentDate = null
  },
  computed: {
    teacherLessons() {
      return this.$store.getters.teacherLessons
    },

    futureLessons() {
      return this.teacherLessons.filter((row) => new Date(row.date).getTime() > new Date().getTime())
    },

    pastLessons() {
      return this.teacherLessons.filter((row) => new Date(row.date).getTime() < new Date().getTime())
    },
  },
}
</script>

<style scoped></style>
