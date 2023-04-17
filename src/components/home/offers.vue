<template>
  <div class="offer-layout">
    <div class="main-layout offer-container">
      <h1>מה אנחנו מציעים?</h1>
      <div class="offer-list">
        <div v-for="offer in offers" key="offers.indexOf(offer)" class="offer">
          <img class="offer-gif" :src="offer.icon" alt="" />
          <h4>{{ offer.title }}</h4>
          <h6 class="offer-description">{{ offer.description }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      offers: [
        {
          icon: 'gifs/Reading-Book.gif',

          title: 'ביה"ס לעברית',
          description: ' ביה"ס לעברית מציע מגוון רחב של שיעורים המלמדים בלה בלה',
        },
        {
          icon: 'gifs/Creative-Thinking.gif',
          title: 'סטודנטים',
          description: 'אנחנו כאן להציע מרתונים לפני המבחנים, ושיעורים פרטיים במהלך הסמסטר',
        },
        {
          icon: 'gifs/Web-Browsing.gif',

          title: 'בגרויות',
          description: 'הכנה לבחינות הבגרות',
        },
        {
          icon: 'gifs/Form-Filling.gif',

          title: 'שיעורים פרטיים',
          description: 'צוות מורים מקצועיים המכינים מערכי שיעור מותאמים לרמת התלמיד ותכנית התקדמות',
        },
        {
          icon: 'gifs/Online-Study.gif',
          title: 'מרכז בגבעת שמואל',
          description: 'המון דברים ממש כיפיים  ולימודיים מתרחשים פה',
        },
        {
          icon: 'gifs/Telescope.gif',

          title: 'מרתונים',
          description:  'בין אם זה לבגרות או לאוניברסיטה, אנחנו כאן בשבילכם',
        },
      ],
    }
  },
  created() {},
  methods: {},
  computed: {},
  unmounted() {},
}
</script>
<style></style>
