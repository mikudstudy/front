<template>
  <main class="learning-types main-layout">
    <div>
      <div class="learning-titles">
        <h1>מה תמצאו אצלינו?</h1>
        <h6 class="sub-title"></h6>
      </div>

      <div class="learning-items">
        <div class="learning-item">
          <img src="../../../src/styles/imgs/private-lesson.png" alt="" />

          <div class="learning-item-info">
            <h3>שיעורים פרטיים</h3>
            <div class="flex space-between">
              <h6>מספר תלמידים: 1</h6>
              <h6></h6>
            </div>
            <p>
              {{ privateLesson }}
            </p>
          </div>
        </div>
        <div class="learning-item">
          <img src="../../../src/styles/imgs/wwww.png" alt="" />

          <div class="learning-item-info">
            <h3>מרתונים</h3>

            <div class="flex space-between">
              <h6>מספר תלמידים: עד 5</h6>
              <h6></h6>
            </div>
            <p>
              {{ marathons }}
            </p>
          </div>
        </div>
        <div class="learning-item">
          <img src="../../../src/styles/imgs/zoom-call.png" alt="" />
          <div class="learning-item-info">
            <h3>למידה מרחוק</h3>

            <div class="flex space-between">
              <h6>מספר תלמידים: 1</h6>
              <h6></h6>
            </div>
            <p>
              {{ remote }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  components: {},
  data: () => {
    return {
      privateLesson: 'שיעורים פרונטליים שמתקיימים במרכזי הלמידה שלנו בגבעת שמואל ורעננה וכן, בבית התלמיד בערים רחוקות יותר. אנחנו בונים יחד עם המורה מערך שיעורים שמתאים לכל תלמיד באופן אישי ולפי הרמה וקצב הלמידה שלו. ',
      marathons: 'מרתונים שמועברים ע"י טובי המרצים בארץ ומותאמים לאוניברסיטאות ומכללות בכל התארים. בנוסף, אנו מפעילים מרתונים עבור תלמידי תיכון לקראת בגרויות. ',
      remote: 'אנחנו דואגים להתאים לכם מורה בכל מקום, בכל יום ובכל שעה כדי שתקבלו את הכלים הכי טובים ונכונים להצליח במטרה שלכם בהווה וגם בעתיד. השיעורים מתבצעים בזום. '
    }
  },
  methods: {},
  computed: {},
}
</script>
