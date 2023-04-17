<template>
  <div class="main-layout flex review-container">
     <button class="left-btn review-btn" @click="moveReview(-1)"><i class="fa-solid fa-chevron-left"></i></button>

    <div class="flex img-txt-cont">
      
      <div class="review-txt">
        <transition-group name="fade" tag="div">
        <div v-for="ii in [i]" :key="ii">
          
          <svg class="quote-svg" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 128">
            <path
              d="M98.788 10.466a27.26 27.26 0 0 0-21.712 5.357 27.695 27.695 0 0 0 .12 44.405 27.276 27.276 0 0 0 25.509 4.324 1.33 1.33 0 0 1 1.25.186 1.364 1.364 0 0 1 .542 1.177c-1.249 27.64-26.037 38.446-30.994 40.332a3.658 3.658 0 0 0-2.323 3.937s.632 4.641.633 4.647a3.725 3.725 0 0 0 4.987 2.916c56.567-22.964 52.526-64.727 49.94-76.98-2.64-12.504-12.513-27.32-27.952-30.301zm4.49 18.086a2.002 2.002 0 0 1-2.815-.298c-4.287-5.303-11.658-2.548-11.733-2.518a2 2 0 1 1-1.437-3.734c.413-.159 10.184-3.805 16.283 3.737a2 2 0 0 1-.299 2.813zm-70.49-18.086a27.26 27.26 0 0 0-21.712 5.357 27.695 27.695 0 0 0 .12 44.405 27.276 27.276 0 0 0 25.509 4.324 1.33 1.33 0 0 1 1.25.186 1.364 1.364 0 0 1 .542 1.177c-1.249 27.64-26.037 38.446-30.994 40.332a3.658 3.658 0 0 0-2.323 3.937s.632 4.641.633 4.647a3.725 3.725 0 0 0 4.987 2.916c56.567-22.964 52.526-64.727 49.94-76.98-2.64-12.504-12.513-27.32-27.952-30.301zm4.49 18.086a2.054 2.054 0 0 1-2.815-.299c-4.287-5.302-11.658-2.547-11.733-2.518a2 2 0 1 1-1.437-3.733c.413-.159 10.184-3.805 16.283 3.737a2 2 0 0 1-.299 2.813z"
              fill="#ffa216"
              class="color000000 svgShape"
            ></path>
          </svg>
          <h6 class="review-description">{{ reviews[ii].reviewDescription }}</h6>
          <h1 class="review-name">{{ reviews[ii].reviewName }}</h1>
          <h1 class="review-info">{{ reviews[ii].reviewInfo }}</h1>
        </div>
      </transition-group>
      </div>
    </div>

    <button class="right-btn review-btn" @click="moveReview(+1)"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
    <div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      i: 0,
      timer:null,
      reviews: [
        {
          reviewDescription:
            'אני מניחה ששמעתם על הציון במתמטיקה אושר גדול! תודה רבה על המאמץ ועל הדאגה לבן שלי',
          /* reviewName: 'חגית כהן,', */
          reviewInfo: 'אמא של תלמיד',
        },
        {
          reviewDescription:
            'רציתי להודות על כל העזרה לפני המבחן שלי במתמטיקה! עזרתם לי ממש, המבחן הלך טוב וידעתי לפתור את כל השאלות',
          reviewName: 'עדינה וינשטוק,',

          reviewInfo: 'תלמידת כיתה י"א, 4 יחידות מתמטיקה',
        },

        {
          reviewDescription: ' הבן שלי מקבל במרכז שיעורי עזר במתמטיקה ובאנגלית מס פעמים בשבוע אחה"צ ובמיוחד לפני מבחנים. הוא הולך בשמחה ובזמן קצר גם הצליח לשפר מאד את ידיעותיו באנגלית ואפילו קיבל 80 במבחן. מאוד מומלץ',
          reviewName: 'דניאלה איליה,',

          reviewInfo: 'עדי, סטודנטית להנדסת חשמל בבר אילן אחרי מבחן בחדו"א 1',
        },

        ,
      ],
    }
  },
  created() {},
  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      if(this.i===2) this.i=0
      this.i += 1;
    },
    
    moveReview(dif) {
      var currNum = this.i + dif
      console.log('currNum', currNum)
      if (currNum === 3) {
        this.i = 0
      } else if (currNum === -1) {
        this.i = 2
      } else {
        this.i = currNum
      }
    },
  },
  computed: {
  },

  mounted: function() {
    this.startSlide();
  },
}
</script>
<style>

.fade-enter-active {
  animation: review-scale 0.7s ease-out forwards;
  
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

@keyframes review-scale {
  0% {
    opacity: 0;
    transform: translateX(0) scale(1);
  }
  70% {
    opacity: 0.7;
    transform: translateX(50px) scale(1);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}
</style>
