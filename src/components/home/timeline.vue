<template>
  <main ref="cardsCont" @mousemove="curtainss($event)" class="timeline-cont">
    <div ref="first" class="first-timeline-cont">
      <div class="first-timeline-title">
        <h1>מחפשים שיעור פרטי?</h1>
        <h3>כך נוכל לעזור...</h3>
      </div>
    </div>
    <div ref="second" class="second-timeline-cont">
      <div class="second-timeline-title">
        <h1>זוהי השיטה שלנו...</h1>
        <h3>כל הדרך להצלחה!</h3>
      </div>
    </div>

    <div class="cards-cont main-layout">
      <div class="timeline-card">
        <div class="timeline-item">
          <div class="circle-time">{{ timeCards[0].id + 1 }}</div>
          <Transition appear @before-enter="beforeEnter(0, $event)" @enter="enter(0, $event)">
            <div class="time-line-txt">
              <div ref="inner1" class="heb">{{ heb }}</div>
              <div ref="inner2" class="en">{{ en }}</div>
            </div>
          </Transition>
        </div>

        <div class="empty-timeline-div"></div>
      </div>
      <div class="timeline-card">
        <div class="timeline-item">
          <div class="circle-time">{{ timeCards[1].id + 1 }}</div>
          <Transition appear @before-enter="beforeEnter(1, $event)" @enter="enter(1, $event)">
            <div class="time-line-txt">
              <div ref="inner3" class="heb">{{ heb }}</div>
              <div ref="inner4" class="en">{{ en }}</div>
            </div>
          </Transition>
        </div>

        <div class="empty-timeline-div"></div>
      </div>
      <div class="timeline-card">
        <div class="timeline-item">
          <div class="circle-time">{{ timeCards[2].id + 1 }}</div>
          <Transition appear @before-enter="beforeEnter(2, $event)" @enter="enter(2, $event)">
            <div class="time-line-txt">
              <div ref="inner5" class="heb">{{ heb }}</div>
              <div ref="inner6" class="en">{{ en }}</div>
            </div>
          </Transition>
        </div>

        <div class="empty-timeline-div"></div>
      </div>
      <div class="timeline-card">
        <div class="timeline-item">
          <div class="circle-time">{{ timeCards[3].id + 1 }}</div>
          <Transition appear @before-enter="beforeEnter(3, $event)" @enter="enter(3, $event)">
            <div class="time-line-txt">
              <div ref="inner7" class="heb">{{ heb }}</div>
              <div ref="inner8" class="en">{{ en }}</div>
            </div>
          </Transition>
        </div>

        <div class="empty-timeline-div"></div>
      </div>
      <!-- <timeline-card :curtainss="curtainss" :timeCard="timeCards[0]" />
      <timeline-card :curtainss="curtainss" :timeCard="timeCards[1]" />
      <timeline-card :curtainss="curtainss" :timeCard="timeCards[2]" />
      <timeline-card :curtainss="curtainss" :timeCard="timeCards[3]" /> -->

      <!-- <div v-for="(timeCard, index) in timeCards" :data-index="index" :key="timeCard.id" class="timeline-card">
        <div class="timeline-item">
          <div class="circle-time">{{ timeCard.id + 1 }}</div>
          <div :ref="setItemRef" class="hii"></div>
          <Transition appear @before-enter="beforeEnter" @enter="enter">
            <div class="time-line-txt">
              <h1>{{ timeCard.title }}</h1>

              <p>{{ timeCard.subTitle }}</p>
            </div>
          </Transition>
        </div>

        <div class="empty-timeline-div"></div>
      </div> -->
    </div>
  </main>
</template>
<script>
import { gsap, ScrollTrigger } from 'gsap/all'
import timelineCard from './timeline-card.vue'
gsap.registerPlugin(ScrollTrigger)
export default {
  components: { timelineCard },
  data: () => {
    return {
      heb: 'סיפורת מציאותית - יכולה להתרחש, על אף שאינה נכונה. כמו כן, כמה מהאירועים, המקומות והאנשים בה יכולים להתקיים במציאות. ',
      en: 'We envision a world where everyone has a role to play, no matter what age, in solving problems for the good of others. ',
      itemRefs: [],
      timeCards: [
        {
          id: 0,
          title: 'משאירים פרטים',
          subTitle: 'חשוב לציין את סיבת הפנייה כדי שניתן מענה מיטבי',
        },
        {
          id: 1,
          title: 'חלקת הניהול מקבלת את הפניה',
          subTitle: 'חשוב לציין את סיבת הפנייה כדי שניתן מענה מיטבי',
        },
        {
          id: 2,
          title: 'יצירת קשר',
          subTitle: 'צירת קשר חזרה עם הלקוח מתבצעת באותו יום',
        },
        {
          id: 3,
          title: 'ביעת תכנית שיעורים מול הלקוח',
          subTitle: 'ניית תכנית מותאמת אישית לצרכי הלקוח וסגירת העסקה',
        },
      ],
    }
  },

  methods: {
    setItemRef(el) {
      if (el) {
        this.itemRefs.push(el)
      }
    },
    curtainss(el) {
      var X = el.clientX
      var elWidth = this.$refs.cardsCont.clientWidth
      var itemWidth = this.$refs.inner3.clientWidth
      var marginWidth = (elWidth - 1200) / 2
      var percent = (X / elWidth) * 100

      if (X > marginWidth + itemWidth && marginWidth > 0) {
        var percentt = ((X - marginWidth - itemWidth) / itemWidth) * 100
      } else {
        var percentt = (percent - 50) * 2
      }
      this.$refs.inner3.style = ` -webkit-mask: linear-gradient(90deg, rgba(65, 0, 114, 1) ${percentt}%, rgba(255, 162, 0, 0) ${percentt}%);`
      this.$refs.inner4.style = ` -webkit-mask: linear-gradient(90deg,  rgba(255, 162, 0, 0)  ${percentt}%, rgba(65, 0, 114, 1) ${percentt}%);`

      this.$refs.inner7.style = ` -webkit-mask: linear-gradient(90deg, rgba(65, 0, 114, 1) ${percentt}%, rgba(255, 162, 0, 0) ${percentt}%);`
      this.$refs.inner8.style = ` -webkit-mask: linear-gradient(90deg,  rgba(255, 162, 0, 0)  ${percentt}%, rgba(65, 0, 114, 1) ${percentt}%);`
      if (marginWidth <= X && marginWidth > 0) {
        var percenttt = ((X - marginWidth) / itemWidth) * 100
        console.log(':percenttt:', percenttt)
      } else if (0 < X < marginWidth) {
        var percenttt = 0
      } else {
        var percenttt = percent * 2
      }

      this.$refs.inner1.style = ` -webkit-mask: linear-gradient(90deg, rgba(65, 0, 114, 1) ${percenttt}%, rgba(255, 162, 0, 0) ${percenttt}%);`
      this.$refs.inner2.style = ` -webkit-mask: linear-gradient(90deg,  rgba(255, 162, 0, 0)  ${percenttt}%, rgba(65, 0, 114, 1) ${percenttt}%);`

      this.$refs.inner5.style = ` -webkit-mask: linear-gradient(90deg, rgba(65, 0, 114, 1) ${percenttt}%, rgba(255, 162, 0, 0) ${percenttt}%);`
      this.$refs.inner6.style = ` -webkit-mask: linear-gradient(90deg,  rgba(255, 162, 0, 0)  ${percenttt}%, rgba(65, 0, 114, 1) ${percenttt}%);`

      this.$refs.first.style = ` -webkit-mask: linear-gradient(90deg, rgba(65, 0, 114, 1) ${percent}%, rgba(255, 162, 0, 0) ${percent}%);`
      this.$refs.second.style = ` -webkit-mask: linear-gradient(90deg,  rgba(255, 162, 0, 0)  ${percent}%, rgba(65, 0, 114, 1) ${percent}%);`
    },
    beforeEnter(num, el) {
      // console.log('hi', num, el)
      if (num / 2 === 0 || num === 2) {
        el.style.opacity = 0
        el.style.transform = 'translate(100%)'
      } else {
        el.style.opacity = 0
        el.style.transform = 'translate(-100%)'
      }
    },
    enter(num, el) {
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
    reveal() {
      var reavelItem = this.$refs.hi
      var windowHeight = window.innerHeight
      var revealTop = reavelItem.getBoundingClientRect().top
      var revealPoint = -150
      if (revealTop < windowHeight - revealPoint) {
        reavelItem.classList.add('ho')
        // console.log('hi', this.$refs.hi.classList)
      } else {
        reavelItem.classList.remove('ho')
        // console.log('hi', this.$refs.hi.classList)
      }
    },
  },
  computed: {},
}
</script>
<style>
.ho {
  /* background-color: brown; */
  transform: translateY(-150px);
  transition: ease 1s;
}
</style>
