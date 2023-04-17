<template>
  <div class="about-us">
    <img class="orange-wave" src="../../styles/imgs/orangeWave.png" alt="" />
    <div class="main-layout">
      <h1 class="about-title">? מי אנחנו</h1>

      <div class="flex about-info-cont">
        <div class="about-info">
          <div>
            צוות של אנשים שפועלים מתוך תחושת שליחות חזקה ועושים כל שביכולתם לתת מענה לכל אדם בכל תחום למידה. בין אם אתה סטודנט, תיכוניסט או
            תלמיד ביסודי – אנחנו נדאג שתקבל את מה שאתה צריך וברמה הגבוהה ביותר.
          </div>
          <div>
            זאת הסיבה שהגענו אל עשרות ערים ברחבי הארץ ופתחנו עשרות תכניות שונות לכל הגילאים במגוון תחומים. בין השאר פתחנו בית ספר לעברית אשר
            מסייע לעולים חדשים להשתלב בחברה הישראלית ובנוסף מחזק את הזהות היהודית בתפוצות. כמו כן, הקמנו מרכזי למידה אשר מסייעים לכל הקשת
            הרחבה של תלמידי בית ספר בישראל והעברת מרתונים לסטודנטים במכללות ואוניברסיטאות ברחבי הארץ.
          </div>
        </div>

        <svgg class="about-svg" />
      </div>
    </div>
  </div>
</template>
<script>
import svgg from './svgs/svg-aboutus.vue'

export default {
  components: { svgg },
  data: () => {
    return {}
  },
  methods: {},
  computed: {},
}
</script>
