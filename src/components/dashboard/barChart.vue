<template>
  <!-- <pre> {{ setLessonsByMonth }}</pre> -->
  <div class="bar-chart-cont">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: 'BarChart',
  components: { Bar },
  data: () => {
    return {
      chartOptions: {
        responsive: true,
        // maintainAspectRatio: true,
      },
    }
  },
  methods: {},

  computed: {
    setLessonsByMonth() {
      return this.$store.getters.setLessonsByMonth
    },
    chartData() {
      return {
        // hi: this.setLessonsByMonth,
        labels: [this.setLessonsByMonth.pastMonth, this.setLessonsByMonth.currMonth, this.setLessonsByMonth.nextMonth],
        datasets: [
          {
            label: 'מספר השיעורים בחודשים האחרונים',
            backgroundColor: '#ffa216',
            data: [
              this.setLessonsByMonth.lastMonthLessonCount,

              this.setLessonsByMonth.currMonthLessonCount,
              this.setLessonsByMonth.nextMonthLessonCount,
            ],
            // data: [this.hi.lastMonthLessonCount, this.hi.currMonthLessonCount, this.hi.nextMonthLessonCount],
            // data: [4, 5, 6],
          },
        ],
      }
    },
  },
}
</script>

<style>
#my-chart-id {
  width: 50%;
}
</style>
