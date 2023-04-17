<template>
  <div class="home-page">
    <open />

    <offers />

    <aboutUs />
    <dataApp />

    <events />

    <ourWays />

    <learningTypes />

    <reviews />
    <timeline />
    <team></team>
  </div>
</template>
<script>
import open from '../components/home/open.vue'
import offers from '../components/home/offers.vue'
import events from '../components/home/events.vue'
import aboutUs from '../components/home/about.vue'
import learningTypes from '../components/home/learning-types.vue'
import reviews from '../components/home/reviews.vue'
import ourWays from '../components/home/our-ways.vue'
import dataApp from '../components/home/data.vue'
import timeline from '../components/home/timeline.vue'
import team from '../components/home/team.vue'


export default {
  components: { open, offers, aboutUs, learningTypes, reviews, ourWays, dataApp, timeline, team, events },
  data: () => {
    return {}
  },
  methods: {},
  computed: {},
}
</script>

<style></style>
