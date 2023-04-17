<template>
  <main class="dash-teacher-table">
    <h1 id="title">מרתונים</h1>
    <div class="dash-table-btns">
      <button @click="isFutureMarathon = true" class="dash-table-btn btn d-btn-1" :class="{ active: isFutureMarathon }">
        מרתונים קודמים
      </button>
      <button @click="isFutureMarathon = false" class="dash-table-btn btn d-btn-2" :class="{ active: !isFutureMarathon }">
        מרתונים עתידיים
      </button>
      <button @click="openMarathonForm = !openMarathonForm" class="add-lesson-btn"><i class="fa-solid fa-plus"></i></button>
    </div>
    <div class="table-teacher-header">
      <div></div>
      <div></div>
      <div>מחיר</div>
      <div>תאריך</div>
      <div>שם מורה</div>
      <div>מוסד לימודי</div>
      <div>מקצוע</div>
    </div>
    <div v-if="isFutureMarathon" v-for="tableRow in pastMarathons" class="table-teacher-row">
      <button @click="openRecordModal = true" class="btn">צפייה במרתון</button>
      <button class="btn add-lesson-sum-btn">הוספת הקלטה</button>

      <div>{{ tableRow.price }}</div>
      <div>{{ tableRow.date }}</div>
      <div>{{ tableRow.teacher }}</div>
      <div>{{ tableRow.school }}</div>
      <div>{{ tableRow.subject }}</div>
    </div>
    <div v-if="!isFutureMarathon" v-for="tableRow in futureMarathons" class="table-teacher-row">
      <button @click="openRecordModal = true" class="btn">צפייה במרתון</button>

      <div>{{ tableRow.num }}</div>
      <div>{{ tableRow.price }}</div>
      <div>{{ tableRow.date }}</div>
      <div>{{ tableRow.teacher }}</div>
      <div>{{ tableRow.school }}</div>
      <div>{{ tableRow.subject }}</div>
    </div>

    <addMarathonForm @closeMarathonform="openMarathonForm = false" v-if="openMarathonForm"></addMarathonForm>

    <div v-if="openRecordModal" class="grey-div" @click="openRecordModal = false"></div>
    <div v-if="openRecordModal" class="lesson-summary-cont">
      <h1>הקלטה של מרתון</h1>
      <!-- <video width="400" controls>
                <source src="mov_bbb.mp4" type="video/mp4">
                <source src="mov_bbb.ogg" type="video/ogg">
                Your browser does not support HTML video.
            </video> -->

      <p>
        Video of
        <a href="https://www.bigbuckbunny.org/" target="_blank">Big Buck Bunny</a>.
      </p>
      <button @click="openRecordModal = false" class="form-btn">סגור</button>
    </div>
  </main>
</template>
<script>
import addMarathonForm from './add-marathon-form.vue'

export default {
  name: 'ProjectApp',
  components: { addMarathonForm },
  data() {
    return {
      openMarathonForm: false,
      openRecordModal: false,
      isFutureMarathon: true,
      currentDate: null,
      sort: false,
      tableRows: [
        {
          school: 'אוניברסיטת תל אביב',
          subject: 'אינפי',
          date: '23/02/23',
          teacher: 'עדי בירנשטוק',
          isDone: true,
          price: '140₪',
        },
        {
          // school: 1,
          school: 'אוניברסיטת אריאל',
          subject: 'מבוא לסוציולוגיה',
          date: '16/02/23',
          teacher: 'ליאור קצמן',
          isDone: true,
          price: '140₪',
        },
        {
          // school: 2,
          school: 'הטכניון',
          subject: 'מבוא למדמ"ח ',
          date: '19/02/23',
          teacher: 'דינה אנגלרד',
          isDone: false,
          price: '140₪',
        },
        {
          // school: 3,
          school: 'הטכניון',
          subject: 'גרפיקה',
          date: '20/02/23',
          teacher: 'דינה אנגלרד',
          isDone: false,
          price: '140₪',
        },
        {
          // school: 4,
          school: 'אוניברסיטת בן גוריון',
          subject: 'כימיה אורגנית',
          date: '18/02/23',
          teacher: 'איילת הלחמי',
          isDone: false,
          price: '140₪',
        },
        {
          // school: 5,
          school: 'הטכניון',
          subject: 'גרפיקה',
          date: '20/02/23',
          teacher: 'דינה אנגלרד',
          isDone: false,
          price: '140₪',
        },
        {
          // school: 0,
          school: 'אוניברסיטת תל אביב',
          subject: 'אלגברה לינארית 1 א',
          date: '23/02/23',
          teacher: 'עדי בירנשטוק',
          isDone: false,
          price: '140₪',
        },
        {
          // school: 1,
          school: 'אוניברסיטת אריאל',
          subject: 'מבוא לסוציולוגיה',
          date: '16/02/23',
          teacher: 'ליאור קצמן',
          isDone: false,
          price: '140₪',
        },
        {
          // school: 2,
          school: 'הטכניון',
          subject: 'מבוא למדמ"ח ',
          date: '19/02/23',
          teacher: 'דינה אנגלרד',
          isDone: false,
          price: '140₪',
        },
        {
          // school: 3,
          school: 'הטכניון',
          subject: 'גרפיקה',
          date: '20/02/23',
          teacher: 'דינה אנגלרד',
          isDone: false,
          price: '140₪',
        },
        {
          // school: 4,
          school: 'אוניברסיטת בן גוריון',
          subject: 'כימיה אורגנית',
          date: '18/02/23',
          teacher: 'איילת הלחמי',
          isDone: false,
          price: '140₪',
        },
        {
          // school: 5,
          school: 'הטכניון',
          subject: 'גרפיקה',
          date: '20/02/23',
          teacher: 'דינה אנגלרד',
          isDone: false,
          price: '140₪',
        },
      ],
    }
  },

  methods: {},
  created() {
    this.tableRows.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    console.log('date:', new Date().getTime())
  },
  destroy() {
    this.currentDate = null
  },
  computed: {
    futureMarathons() {
      return this.tableRows.filter((row) => new Date(row.date).getTime() > new Date().getTime())
    },
    pastMarathons() {
      return this.tableRows.filter((row) => new Date(row.date).getTime() < new Date().getTime())
    },
  },
}
</script>
<style></style>
