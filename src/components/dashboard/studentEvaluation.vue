<template>
  <div class="student-evaluation-cont">
    <h1>הערכת מצב כללית:</h1>
    <quoteStartSvg></quoteStartSvg>
    <div>{{ lorem }}</div>
    <quoteEndSvg></quoteEndSvg>
    <!-- dfdf -->
  </div>
</template>
<script>
import quoteStartSvg from '../home/svgs/quote-svg-start.vue'
import quoteEndSvg from '../home/svgs/quote-svg-end.vue'
export default {
  components: { quoteStartSvg, quoteEndSvg },
  data: () => {
    return {
      lorem:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, inventore! Consequatur atque distinctio pariatur, ad ipsa facere ipsam molestiae ab, quidem ex doloremque quis autem tempora adipisci quo, et officia.',
    }
  },
  methods: {},
  computed: {},
}
</script>
