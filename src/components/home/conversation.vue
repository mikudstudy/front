<template>
  <div ref="pink" @mousemove="curtain" class="pink">
    <!-- <div ref="inner0" class="inner0"></div> -->
    <div ref="innerr0" class="innerr0">{{ lorem[0] }}</div>
    <!-- <div ref="inner1" class="inner1"></div> -->
    <div ref="innerr1" class="innerr1">{{ lorem[1] }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  data: () => {
    return {
      lorem: [
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi placeat facilis doloremque repellendus sed accusamus ipsum quod necessitatibus, quae magnam. Quisquam laborum repudiandae nisi eos adipisci in totam pariatur aspernatur.',
        'אין דבר נפלא יותר מהמפגש בין מספר הרוצה לספר סיפור, וקהל הרוצה לשמוע סיפור. הרצון הזה הוא מה שמתחיל את התהליך המופלא, את הדיאלוג של יצירת עולם הסיפור.בניית מתח, פאוזות, הומור, קול, תנועה, שפת דימויי תמונות שמתעוררות לחיים, וכל אלה מובילים שלב אחר שלב את המספר והקהל להתחבר לעולם הדמיון שלהם וליצור מציאות חדשה.',
      ],
    }
  },
  methods: {
    curtain(el) {
      var X = el.offsetX
      var elWidth = el.currentTarget.offsetWidth
      var percent = (X / elWidth) * 100

      this.$refs.innerr1.style = ` -webkit-mask: linear-gradient(90deg, rgba(65, 0, 114, 1) ${percent}%, rgba(255, 162, 0, 0) ${percent}%);`
      this.$refs.innerr0.style = ` -webkit-mask: linear-gradient(90deg,  rgba(255, 162, 0, 0)  ${percent}%, rgba(65, 0, 114, 1) ${percent}%);`
    },
  },
  computed: {},
}
</script>
<style>
/* .ci {
  -webkit-mask: linear-gradient(90deg, rgba(65, 0, 114, 1) 50%, rgba(255, 162, 0, 0) 50%);
} */
.pink {
  height: 200px;
  width: 100%;
  position: relative;
}
.innerr0,
.innerr1 {
  /* background-color: rgba(1, 255, 98, 0); */
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
}
.innerr0 {
  background-color: rgb(134, 134, 255);
}
.innerr1 {
  background-color: rgb(245, 32, 174);
}
.inner1 {
  background-color: aqua;
  height: 100%;
  width: 0px;
  position: absolute;
  top: 0;
}
.inner0 {
  background-color: rgb(155, 108, 211);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  /* z-index: 1; */
}
</style>
