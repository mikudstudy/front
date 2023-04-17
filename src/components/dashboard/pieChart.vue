<template>
  <div class="pie-chart-cont">
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
//   import * as chartConfig from './chartConfig.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  // name: 'App',
  components: {
    Pie,
  },
  data() {
    return {
      chartData: {
        labels: ['שיעורים נותרים', 'שיעורים שבוצעו'],
        datasets: [
          {
            backgroundColor: ['#828feb', '#E46651'],
            data: [7, 3],
            width: 100,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
}
</script>
