<template>
  <div class="timeline-card">
    <div class="timeline-item">
      <div class="circle-time">{{ timeCard.id + 1 }}</div>
      <div class="hii"></div>
      <Transition appear @before-enter="beforeEnter" @enter="enter">
        <div class="time-line-txt">
          <div ref="inner1" class="heb">{{ heb }}</div>
          <div ref="inner2" class="en">{{ en }}</div>
        </div>
      </Transition>
    </div>

    <div class="empty-timeline-div"></div>
  </div>
</template>
<script>
// import { gsap, ScrollTrigger } from 'gsap/all'
// import timelineCard from './timeline-card.vue'
// gsap.registerPlugin(ScrollTrigger)
export default {
  // props: ['timeCard', 'varX'],
  components: {},
  data: () => {
    return {
      heb: 'סיפורת מציאותית - יכולה להתרחש, על אף שאינה נכונה. כמו כן, כמה מהאירועים, המקומות והאנשים בה יכולים להתקיים במציאות. ',
      en: 'We envision a world where everyone has a role to play, no matter what age, in solving problems for the good of others. ',
    }
  },
  watch: {
    // whenever question changes, this function will run
    // varX(newX, oldQuestion) {
    //   this.curtainss(newX)
    // },
  },
  methods: {
    // curtainss(X) {
    //   var elWidth = el.currentTarget.offsetWidth
    //   var percent = (X / elWidth) * 100

    //   this.$refs.inner1.style = ` -webkit-mask: linear-gradient(90deg, rgba(65, 0, 114, 1) ${percent}%, rgba(255, 162, 0, 0) ${percent}%);`
    //   this.$refs.inner2.style = ` -webkit-mask: linear-gradient(90deg,  rgba(255, 162, 0, 0)  ${percent}%, rgba(65, 0, 114, 1) ${percent}%);`
    // },
    beforeEnter(el) {
      console.log('hi', this.timeCard.id / 2 === 0)
      if (this.timeCard.id / 2 === 0 || this.timeCard.id === 2) {
        el.style.opacity = 0
        el.style.transform = 'translate(300px)'
      } else {
        el.style.opacity = 0
        el.style.transform = 'translate(-300px)'
      }
    },
    enter(el) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        // delay: el.dataset.index * 0.2,
        scrollTrigger: {
          trigger: el,
          toggleActions: 'restart',
          delay: 0.2,
        },
      })
    },
  },
  computed: {},
}
</script>
