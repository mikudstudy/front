<template>
  <div class="ways-container main-layout">
    <div class="way-item" v-for="(way, index) in ways" :data-index="index" :key="way.id">
      <Transition appear @before-enter="beforeEnter" @enter="enter">
        <img ref="wayImg1" class="way-img reveal" :src="way.wayImg" alt="no image" />
      </Transition>
      <div class="way-txt-cont">
        <div class="way-title">{{ way.wayTitle }}</div>
        <div>{{ way.wayTxt }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import { gsap, ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {},
  data: () => {
    return {
      element: ref(),
      ways: [
        {
          id: 1,
          wayTitle: 'למי',
          wayImg: 'wayImgs/us1.png',
          wayTxt: 'תלמיד בית ספר, סטודנט באוניברסיטה, עולה חדש, מנהל בית ספר או פשוט מישהו שרוצה ללמוד משהו חדש הגעת למקום הנכון',
        },
        {
          id: 2,

          wayTitle: 'למה',
          wayImg: 'wayImgs/us2.png',
          wayTxt:
            'כי הזמן שלך שווה המון. אנחנו גם היינו תלמידי בית ספר וסטודנטים ואנחנו יודעים כמה שהלימוד יכול להיות משעמם ולא יעיל, ואנחנו כאן כדי לגרום לכך שהלימוד שלך יהיה אפקטיבי, ממוקד וחוויתי.',
        },
        {
          id: 3,

          wayTitle: 'איך',
          wayImg: 'wayImgs/us3.png',
          wayTxt:
            'אנחנו מקפידים שהלימוד יהיה איכותי בעזרת מורים מהשורה הראשונה ושיטת לימוד שמסייעת לתלמיד . שמקפידים להתאים את עצמם אל התלמיד.',
        },
      ],
    }
  },
  mounted() {
    // gsap.to('.hi', {
    //   opacity: 1,
    //   y: 0,
    //   duration: 1,
    //   // delay: el.dataset.index * 0.2,
    //   scrollTrigger: {
    //     trigger: '.hi',
    //     toggleActions: 'restart',
    //   },
    // })
  },

  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'translateY(150px)'
    },
    enter(el) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          toggleActions: 'restart',
        },
      })
    },

    // revealWayImgs() {
    //   var reavelItems = this.$refs.wayImg
    //   for (var i = 0; i < 2; i++) {
    //     var reavelItems = this.$refs[wayImg + i]
    //     var windowHeight = window.innerHeight
    //     var revealtop = reavelItems[i].getBoundingClientRect().top
    //     var revealPoint = 150
    //     if (revealtop < windowHeight - revealPoint) {
    //       reavelItems[i].classList.add('do')
    //     } else {
    //       reavelItems[i].classList.remove('do')
    //     }
    //   }
    //   console.log('כר', Object.entries(this.$refs))
    // },
  },
  computed: {},

  // created() {
  //   window.addEventListener('scroll', this.revealWayImgs)
  // },
  // destroyed() {
  //   window.removeEventListener('scroll', this.revealWayImgs)
  // },
}
</script>

<style>
.hi {
  background-color: blue;
}
/* .do {
  transform: translateY(-150px);
  transition: ease 1s;
  
} */
</style>
