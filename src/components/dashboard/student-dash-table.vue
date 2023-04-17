<template>
  <main class="dash-table">
    <h1 id="title">שיעורים</h1>
    <div class="dash-table-btns">
      <button @click="isFutureLesson = true" class="dash-table-btn btn d-btn-1" :class="{ active: isFutureLesson }">שיעורים קודמים</button>
      <button @click="isFutureLesson = false" class="dash-table-btn btn d-btn-2" :class="{ active: !isFutureLesson }">
        שיעורים עתידיים
      </button>
    </div>
    <div class="table-header">
      <div></div>
      <div class="empty-table-col"></div>
      <!-- <div class="empty-table-box"></div> -->
      <div>מחיר</div>
      <div>תאריך</div>
      <div>שם מורה</div>
      <div>פרונטלי/ זום</div>
      <div>מקצוע</div>
    </div>
    <div v-if="isFutureLesson" v-for="tableRow in pastLessons" class="table-row">
      <button @click="openLessonSumModal = true" class="btn">צפייה בסיכום שיעור</button>
      <!-- <div class="empty-table-col"></div> -->
      <button @click="openStudentReviewModal = true" class="btn student-btn">משוב התלמיד</button>

      <!-- <div>{{ tableRow.num }}</div> -->
      <div>{{ tableRow.price }}</div>
      <div>
        {{ new Date(tableRow.date).getDate() }}/{{ new Date(tableRow.date).getMonth() + 1 }}/{{ new Date(tableRow.date).getFullYear() }}
      </div>
      <!-- <div>{{ tableRow.date }}</div> -->
      <div>{{ tableRow.teacherId.fullName }}</div>
      <div>{{ tableRow.place }}</div>
      <div>{{ tableRow.subject }}</div>

      <studentLessonReview
        :lessonId="tableRow._id"
        @closeStudentReviewModal="openStudentReviewModal = false"
        v-if="openStudentReviewModal"
      ></studentLessonReview>

      <!-- <button @click="openLessonSumModal = true" class="btn">צפייה בסיכום שיעור</button> -->
    </div>
    <div v-if="!isFutureLesson" v-for="tableRow in futureLessons" class="table-row">
      <button @click="openLessonSumModal = true" class="btn">צפייה בסיכום שיעור</button>
      <div class="empty-table-col"></div>

      <!-- <div>{{ tableRow.num }}</div> -->
      <div>{{ tableRow.price }}</div>
      <div>{{ tableRow.date }}</div>
      <div>{{ tableRow.teacherId.fullName }}</div>
      <div>{{ tableRow.place }}</div>
      <div>{{ tableRow.subject }}</div>
    </div>

    <div v-if="openStudentReviewModal" class="grey-div" @click="openStudentReviewModal = false"></div>

    <div v-if="openLessonSumModal" class="grey-div" @click="openLessonSumModal = false"></div>
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
import studentLessonReview from './student-lesson-rev.vue'
export default {
  components: {
    studentLessonReview,
  },
  data: () => {
    return {
      // allLessons: this.lessons,
      // lessonsLearn: [],
      openLessonSumModal: false,
      openStudentReviewModal: false,
      currentDate: null,
      future: false,
      sort: false,
      tableRows: [
        {
          subject: 'חשבון',
          date: '2023-03-03',
          tutor: 'עדי בירנשטוק',
          place: 'בית ספר ביל"ו',
          price: '140₪',
        },
        {
          subject: 'חשבון',
          date: '2023-03-01',
          tutor: 'עדי בירנשטוק',
          place: 'זום',
          price: '140₪',
        },
        {
          subject: 'עברית',
          date: '2023-04-02',
          tutor: 'ליאור קצמן',
          place: 'ברנדייס 5 רעננה',
          price: '140₪',
        },
        {
          subject: 'עברית',
          date: '2023-04-01',
          tutor: 'ליאור קצמן',
          place: 'ברנדייס 5 רעננה',
          price: '140₪',
        },
        {
          subject: 'עברית',
          date: '2023-02-05',
          tutor: 'ליאור קצמן',
          place: 'ברנדייס 5 רעננה',
          price: '140₪',
        },
      ],
      isFutureLesson: true,
    }
  },
  methods: {
    openLessonSum() {},

    activateClass() {},
  },
  created() {
    this.tableRows.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    console.log('date:', new Date().getTime())
  },
  destroy() {
    this.currentDate = null
  },
  // .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  computed: {
    StudentLessons() {
      return this.$store.getters.studentLessons
    },
    futureLessons() {
      return this.StudentLessons.filter((row) => new Date(row.date).getTime() > new Date().getTime())
    },

    pastLessons() {
      return this.StudentLessons.filter((row) => new Date(row.date).getTime() < new Date().getTime())
    },
    // pastLessons() {
    //   return this.StudentLessons.filter((row) => new Date(row.date).getTime() < new Date().getTime())
    // },
  },
}
</script>

<style scoped></style>
