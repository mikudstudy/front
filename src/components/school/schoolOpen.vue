<template>
  <div class="school-cont">
    <div class="main-layout">
      <h1 class="schools-title">תלמידי בית ספר</h1>
      <h1 class="schools-title"> שיעורים פרטיים </h1>
      <div class="flex-svg">
          <div class="school-txt">{{ studentsTxt }}</div>
          <svgg class="school-svg g1"></svgg>
        </div>
        <signupLesson></signupLesson>
        <h1 class="schools-title-left">מרתונים לבגרויות</h1>
        <div class="flex-svg">
            <div class="school-txt-left">{{ marathonsTxt }}</div>
            <schoolSvg class="school-svg"></schoolSvg>
        </div>
      <total-filter></total-filter>
      <div class="margin-top"></div>
      <addContact class="margin-top"></addContact>
    </div>
  </div>
</template>

<script>
import svgg from "../home/svgs/svg-schoolOpen.vue";
import totalFilter from "./totalFilter.vue";
import addContact from "../students/add-contact.vue";
import signupLesson from "../../components/students/signupLesson.vue";
import schoolSvg from '../home/svgs/school.vue';

export default {
  components: {
    svgg,
    totalFilter,
    addContact,
    signupLesson,
    schoolSvg
  },
  data() {
    return {
      studentsTxt:
        'הקמת מיקוד נוצרה מתוך מחשבה על תלמידי בתי הספר שמוצאים את עצמם מלאים בסקרנות וברצון ללמוד אך מתקשים לעשות זאת במסגרת בית הספר. היה לנו חשוב להקים מרכזי למידה שיהוו אלטרנטיבה ללמידה בבתי הספר. החידוש שלנו הוא גם בסביבת הלמידה אך בעיקר במורים שלנו. אנחנו משקיעים רבות בבחירת מורים בעלי יכולת בין אישית גבוהה מתוך הבנה שהחיבור בין המורה לתלמיד הוא שעושה את ההבדל בלמידה.',
        marathonsTxt: 'תלמידים רבים משקיעים ולומדים לאורך כל השנה, אך כאשר הבגרות מתקרבת הם מרגישים לא מוכנים כמו שהיו רוצים להיות. לכן, הקמנו מערך שלם שמכין את התלמיד לבגרות בכל המקצועות ובכל הרמות. הדרך שלנו היא לקיים סדרת מפגשים עם המורים הכי טובים שיש ובסדרת מפגשים להקיף את החומר לבגרות באופן ממוקד. סדרת המפגשים תהיה מוכוונת לשאלון הספציפי עליו התלמיד ייבחן תוך התייחסות לתכנון זמן הלמידה, טיפים מקצועיים וניהול זמן בבחינת הבגרות.'
    };
  },
};
</script>

<style scoped>
.margin-top {
height: 5rem;
}
</style>