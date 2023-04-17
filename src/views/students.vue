<template>
  <div class="students-cont">
    <div class="main-layout">
      <h1 class="students-title">שיעורים פרטיים</h1>

      <div class="students-open">
        <studentSvg2 class="students-svg"></studentSvg2>
        <div class="students-txt">{{ studentsTxt }}</div>
      </div>

      <signupLesson></signupLesson>
      <h1 class="students-title">מרתונים</h1>

      <div class="students-open">
        <div class="students-txt">{{ studentsTxt }}</div>
        <studentSvg class="students-svg"></studentSvg>
      </div>
    </div>
    
    <div>
      <h1 class="all-marathons-title">
        כל המרתונים...
        <h1></h1>
        <div>
          <subjectFilter @filter="filterSubject" />
          <schoolFilter @filter="filterSchool" />
        </div>
      </h1>
      <div></div>
      <div class="all-marathons-cont">
        <div class="all-marathons-cont-main main-layout">
          <maratonCard
            v-for="marathon in allMarathonsFilter"
            :school="marathon.school"
            :date="marathon.date"
            :maratonDescription="marathon.maratonDescription"
            :teacher="marathon.teacher"
            :done="marathon.isDone"
            key="marathons.indexOf(marathon)"
          ></maratonCard>
        </div>
      </div>
      <button
        @click="loadMoreM"
        class="btn-marathon"
        v-if="
          (filterBy.school === '' ||
            (filterBy.school === 'הכל' &&
              filterBy.school !== 'אוניברסיטת אריאל' &&
              filterBy.school !== 'אוניברסיטת בר אילן' &&
              filterBy.school !== 'אוניברסיטת רייכמן' &&
              filterBy.school !== 'אוניברסיטת תל אביב' &&
              filterBy.school !== 'הטכניון')) &&
          (filterBy.subject === '' ||
            (filterBy.subject === 'הכל' &&
              filterBy.subject !== 'גרפיקה' &&
              filterBy.subject !== 'אלגברה' &&
              filterBy.subject !== 'אינפי' &&
              filterBy.subject !== 'סוציולוגיה'))
        "
      >
        {{ displayButton }} <el-icon v-if="!loadMore"><ArrowDown /></el-icon>
        <el-icon v-if="loadMore"><ArrowUp /></el-icon>
      </button>
    </div>
    <h1></h1>
    <!-- <br>
    <h1></h1>
    <br>
    <h1></h1>
    <br> -->
    <!-- <reviews /> -->
    
    <addContact></addContact>
  </div>
</template>
<script>
import reviews from '../components/home/reviews.vue'
import maratonCard from '../components/students/maraton-card.vue'
import trial from '../components/home/team.vue'
import trialCard from '../components/students/trialCard.vue'
import studentSvg from '../components/home/svgs/svg-students.vue'
import studentSvg2 from '../components/home/svgs/svg-students2.vue'
import addContact from '../components/students/add-contact.vue'
import signupLesson from '../components/students/signupLesson.vue'
import subjectFilter from '../components/students/subjectFilter.vue'
import schoolFilter from '../components/students/schoolFilter.vue'

export default {
  components: {
    studentSvg,
    studentSvg2,
    addContact,
    maratonCard,
    trial,
    trialCard,
    signupLesson,
    subjectFilter,
    schoolFilter,
    reviews,
  },
  data: () => {
    return {
      loadMore: false,
      filterBy: {
        subject: 'הכל',
        school: 'הכל',
      },
      // value: ref(),
      // options: initials.map((initial, idx) => ({
      //   value: `${initial}`,
      //   label: `${initial}`,
      // })),

      slide: 0,
      curSlide: 0,
      marathonsNumInPage: null,
      initialScreenWidth: null,

      studentsTxt:
        'הנוער של היום זה לא הנוער של פעם, אה?הם נהדרים, הם מקסימים, הם חכמים, הם סקרנים. המתבגריo והמתבגרות האלה הם דור ההווה ודור העתיד, הם גדלים בעולם חדשני, מרתק ומאתגר. אתם עובדים איתם ביום יום, והאמת שאנחנו מתפעלים מכם ומהעבודה שלכם כל פעם מחדש. נשמח להשתלב בתוך העשייה שלך, לסייע בדרך שלנו, בארגז הכלים שיש לנו. נביא תהליכים קצרים או ארוכים, נעבוד עם כיתות מסויימות או נפיק אירועים בית ספריים. מזמינים אתכם להצטרף לעשרות בתי הספר שעובדים איתנו בתהליכים ארוכים ומרתקים ובאירועים מעניינים ומפתיעים. תסתכלו מה יש כאן, אבל תזכרו שעבורנו, השמיים הם לא גבול. ',

    }
  },
  methods: {
    filterSubject(subject) {
      //את הפרמטר קיבלתי מהילד
      this.filterBy.subject = subject //משנים את הפילטר ביי שבדטה
      // console.log('this.filterBy:', this.filterBy.subject)
    },
    filterSchool(school) {
      //את הפרמטר קיבלתי מהילד
      this.filterBy.school = school //משנים את הפילטר ביי שבדטה
      // console.log('this.filterBy:', this.filterBy.school)
    },

    myEventHandler(e) {
      if (e.target.innerWidth < 650) {
        this.marathonsNumInPage = 1
      } else if (e.target.innerWidth < 900) {
        this.marathonsNumInPage = 2
      } else if (e.target.innerWidth < 1100) {
        this.marathonsNumInPage = 3
      } else if (e.target.innerWidth < 1400) {
        this.marathonsNumInPage = 4
      } else if (e.target.innerWidth < 1800) {
        this.marathonsNumInPage = 5
      }
    },
    loadMoreM() {
      this.loadMore = !this.loadMore
    },
  },
  computed: {
    allMarathons() {
      return this.$store.getters.marathons
    },
    marathonsToDisplay() {
      return this.marathons.slice(this.curSlide, this.curSlide + this.marathonsNumInPage)
    },
    allMarathonsFilter() {
      if (this.filterBy.subject === 'הכל' && this.filterBy.school === 'הכל' && !this.loadMore) {
        return this.allMarathons.slice(0, 6)
      } else if (this.filterBy.subject === 'הכל' && this.filterBy.school === 'הכל' && this.loadMore) {
        return this.allMarathons
      }
      // if (!this.value) return this.marathons

      return this.allMarathons.filter((marathon) => {
        if (this.filterBy.school !== 'הכל' && this.filterBy.subject !== 'הכל' && this.filterBy.subject && this.filterBy.school) {
          return marathon.maratonDescription.includes(this.filterBy.subject) && marathon.school.includes(this.filterBy.school)
        }
        if (this.filterBy.subject !== 'הכל' && this.filterBy.subject) {
          return marathon.maratonDescription.includes(this.filterBy.subject)
        }
        if (this.filterBy.school !== 'הכל' && this.filterBy.school) {
          return marathon.school.includes(this.filterBy.school)
        }
      })
    },
    displayButton() {
      if (!this.loadMore) {
        return 'טען עוד'
      } else {
        return 'הסתר'
      }
    },
  },

  async created() {
    await this.$store.dispatch({ type: 'loadMarathons' })
    window.addEventListener('resize', this.myEventHandler)
    this.initialScreenWidth = window.innerWidth

    if (this.initialScreenWidth < 650) {
      this.marathonsNumInPage = 1
    } else if (this.initialScreenWidth < 900) {
      this.marathonsNumInPage = 2
    } else if (this.initialScreenWidth < 1100) {
      this.marathonsNumInPage = 3
    } else if (this.initialScreenWidth < 1400) {
      this.marathonsNumInPage = 4
    } else if (this.initialScreenWidth < 1800) {
      this.marathonsNumInPage = 5
    }

    setInterval(() => {
      this.curSlide = this.curSlide + this.marathonsNumInPage
      if (this.curSlide > this.allMarathons.length - 1) this.curSlide = 0
      // console.log('this.curSlide', this.curSlide)
    }, 3000)
  },

  unmounted() {
    window.addEventListener('resize', this.myEventHandler)
  },
}
</script>

<style>
.student-items {
  animation: wobble 20s;
  animation-iteration-count: infinite;
}

@keyframes wobble {
  0% {
    transform: translate(0);
  }

  /* 50% {
    transform: translate(180%);
  } */
  100% {
    transform: translate(50%);
  }
}
</style>

<!-- <style>
.student-items {
  animation: wobble 3s ease;
  animation-iteration-count: infinite;
}

@keyframes wobble {
  0% {
    /* transform: translate(10px); */
    opacity: 0.7;
    transform: translate(10px);
  }
  10% {
    opacity: 1;
  }

  90% {
    opacity: 1;
    /* background-color: blue; */
  }
  100% {
    opacity: 0.7;
    transform: translate(0px);
  }
}
</style> -->
