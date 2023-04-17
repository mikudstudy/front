<template>
  <div class="main-layout" id="center-div">
    <img id="myDIV" src="../../src/styles/imgs/logo.png" alt="mikud logo" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#center-div {
  position: absolute;
  top: 30%;
  left: 60%;
  transform: translate(-60%);
}

#myDIV {
  border: none;
  width: 50%;
  height: auto;
  background-color: transparent;
  animation: mymove 2s backwards;
}

@keyframes mymove {
  0% {
    transform: rotateY(360deg) scale(1);
    opacity: 20%;
  }
  25% {
    transform: rotateY(180deg) scale(1);
    opacity: 40%;
  }
  50% {
    transform: rotateY(360deg) scale(1);
    opacity: 60%;
  }
  75% {
    transform: rotateY(180deg) scale(1);
    opacity: 80%;
  }
  100% {
    transform: rotateY(360deg) scale(1);
    opacity: 100%;
  }
}
</style>
