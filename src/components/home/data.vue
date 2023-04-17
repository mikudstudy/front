<template>
  <div class="data-cont">
    <div class="data-box flex main-layout">
      <div class="data-item">
        <h1>{{ mikudData.teachers }}+</h1>
        <h3>מורים מוכשרים ומנוסים</h3>
      </div>
      <div class="data-item">
        <h1>{{ mikudData.cities }}+</h1>
        <h3>ערי פעילות</h3>
      </div>
      <div class="data-item">
        <h1>{{ mikudData.students }}+</h1>
        <h3>תלמידי פעילות</h3>
      </div>
    </div>
  </div>
</template>
<script>
// import { timeStamp } from 'console'

export default {
  components: {},
  data: () => {
    return {
      mikudData: {
        cities: 0,
        teachers: 0,
        students: 0,
      },
    }
  },
  created() {},
  mounted() {
    this.changeCities()
    this.changeTeachers()
    this.changeStudents()
  },

  methods: {
    changeCities() {
      let i = 0
      const timer = setInterval(() => {
        this.mikudData.cities = i
        i++

        if (i === 51) {
          clearInterval(timer)
        }
      }, 50)
    },
    changeTeachers() {
      let i = 0
      const timer = setInterval(() => {
        this.mikudData.teachers = i
        i++

        if (i === 100) {
          clearInterval(timer)
        }
      }, 50)
    },
    changeStudents() {
      let i = 0
      const timer = setInterval(() => {
        this.mikudData.students = i
        i++

        if (i === 15) {
          clearInterval(timer)
        }
      }, 50)
    },
  },

  computed: {},
}
</script>
