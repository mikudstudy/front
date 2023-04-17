<template>
  <div class="main-layout">
    <h1 class="marathons-title">המרתונים שלנו
      <div>
        <subject-filter @filter="filterLevel"></subject-filter>
        <school-filter @filter="filterSubject"></school-filter>
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
        >
        </maratonCard>
      </div>
    </div>
    <button @click="loadMoreM" class="btn-marathon" v-if="((filterBy.school === '' || filterBy.school === 'הכל' ) && (filterBy.subject === '' || filterBy.subject === 'הכל'))">
        {{ displayButton }} <el-icon v-if="!loadMore"><ArrowDown /></el-icon>
        <el-icon v-if="loadMore"><ArrowUp /></el-icon>
      </button>
  </div>
</template>

<script>
import subjectFilter from "./subjectSchoolFilter.vue";
import schoolFilter from "./SchoolNameFilter.vue";
import maratonCard from "../students/maraton-card.vue";

export default {
  components: {
    subjectFilter,
    schoolFilter,
    maratonCard,
  },
  data() {
    return {
      loadMore: false,

      filterBy: {
        subject: "הכל",
        school: "הכל",
      },
      allMarathons: [
        {
          maratonDescription: '5 י"ח',
          school: "מתמטיקה",
          date: "28/05/23",
          teacher: "עדי בירנשטוק",
          isDone: false,
        },
        {
          maratonDescription: '5 י"ח',
          school: 'אנגלית',
          date: "23/02/23",
          teacher: "עדי בירנשטוק",
          isDone: true,
        },
        {
          maratonDescription: 'בסיסי',
          school: 'ספרות',
          date: "28/05/23",
          teacher: "עדי בירנשטוק",
          isDone: false,
        },
        {
          maratonDescription: 'בסיסי',
          school: 'היסטוריה',
          date: "28/05/23",
          teacher: "עדי בירנשטוק",
          isDone: false,
        },
        {
          maratonDescription: '4 י"ח',
          school: "מתמטיקה",
          date: "28/05/23",
          teacher: "עדי בירנשטוק",
          isDone: false,
        },
        {
          maratonDescription: '4 י"ח',
          school: 'אנגלית',
          date: "28/05/23",
          teacher: "עדי בירנשטוק",
          isDone: false,
        },
        {
          maratonDescription: '5 י"ח',
          school: 'היסטוריה',
          date: "28/05/23",
          teacher: "עדי בירנשטוק",
          isDone: false,
        },
        {
          maratonDescription: '3 י"ח',
          school: "מתמטיקה",
          date: "28/05/23",
          teacher: "עדי בירנשטוק",
          isDone: false,
        },
        {
          maratonDescription: '5 י"ח',
          school: 'היסטוריה',
          date: "28/05/23",
          teacher: "עדי בירנשטוק",
          isDone: false,
        },
        {
          maratonDescription: '3 י"ח',
          school: 'ספרות',
          date: "28/05/23",
          teacher: "עדי בירנשטוק",
          isDone: false,
        },
        {
          maratonDescription: '5 י"ח',
          school: 'ספרות',
          date: "28/05/23",
          teacher: "עדי בירנשטוק",
          isDone: false,
        },
        {
          maratonDescription: '4 י"ח',
          school: 'ספרות',
          date: "28/05/23",
          teacher: "עדי בירנשטוק",
          isDone: false,
        },
        
      ],
    };
  },

  methods: {
    filterSubject(subject) {
      this.filterBy.subject = subject;
    },
    filterLevel(school) {
      this.filterBy.school = school;
    },
    loadMoreM() {
      this.loadMore = !this.loadMore;
    },
  },

  computed: {
    marathonsToDisplay() {
      return this.marathons.slice(
        this.curSlide,
        this.curSlide + this.marathonsNumInPage
      );
    },
    allMarathonsFilter() {
      if (
        this.filterBy.subject === "הכל" &&
        this.filterBy.school === "הכל" &&
        !this.loadMore
      ) {
        return this.allMarathons.slice(0, 6);
      } else if (
        this.filterBy.subject === "הכל" &&
        this.filterBy.school === "הכל" &&
        this.loadMore
      ) {
        return this.allMarathons;
      }
      // if (!this.value) return this.marathons

      return this.allMarathons.filter((marathon) => {
        if (
          this.filterBy.school !== "הכל" &&
          this.filterBy.subject !== "הכל" &&
          this.filterBy.subject &&
          this.filterBy.school
        ) {
          return (
            marathon.maratonDescription.includes(this.filterBy.subject) &&
            marathon.school.includes(this.filterBy.school)
          );
        }
        if (this.filterBy.subject !== "הכל" && this.filterBy.subject) {
          return marathon.maratonDescription.includes(this.filterBy.subject);
        }
        if (this.filterBy.school !== "הכל" && this.filterBy.school) {
          return marathon.school.includes(this.filterBy.school);
        }
      });
    },
    displayButton() {
      if (!this.loadMore) {
        return "טען עוד";
      } else {
        return "הסתר";
      }
    },
  },
};
</script>

<style scoped></style>