<template>
  <Transition name="contact" class="contacts-container" appear disappear>
    <!-- <div> -->
    <div v-if="displayContactMdl">
      <!-- <div :class="[displayContactMdl ? 'trues' : 'no']"> -->
      <div class="contacts-content main-layout">
        <h1 class="contact-title">דברו איתנו</h1>
        <div class="contact-input-cont">
          
          <input type="text" placeholder="נושא" />
          <input type="text" placeholder="טלפון" />
          <input type="text" placeholder="שם" />
        </div>
        <button class="btn bb">שלח</button>
        <button @click="$emit('close-modal')" class="close-contacts-btn">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  components: {},
  data: () => {
    return {
      displayContactMdl: true,
      openModal: true,
    }
  },
  methods: {},
  computed: {},
}
</script>
<style>
.contact-enter-from {
  opacity: 0;
  transform: translate(0, 20vh);
}
.contact-enter-active {
  transition: all 0.3s ease;
}
.contact-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.contact-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.contact-leave-active {
  transition: all 0.3s ease;
}
.contact-leave-to {
  opacity: 0;
  transform: translate(0, 20vh);
}
.contact-move {
  transition: all 0.3s ease;
  /* transform: translate(0, 20vh); */
}
</style>
