<template>
  <!--   <loadingPage v-if="isLoading"></loadingPage> -->
  <section class="f">
    <mobileHeader></mobileHeader>
    <RouterLink class="logo" to="/">
      <!-- <img
        class="logo"
        src="../src/styles/imgs/logo.png"
        alt=""
        :class="{ logoActive: scrolled && $route.path !== '/' }"
      /> -->
    </RouterLink>
    <appHeader> </appHeader>

    <RouterView />
    <appContact v-if="scrolled" @close-modal="closeContactModal"></appContact>
  </section>
  <app-footer v-if="!isLoading"></app-footer>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
/* import loadingPage from "./components/loadingPage.vue"; */
import appHeader from './components/header.vue'
import mobileHeader from './components/mobileHeader.vue'
import appFooter from './components/footer.vue'
import appContact from './components/appContact.vue'

export default {
  components: {
    /* loadingPage, */
    appHeader,
    appFooter,
    appContact,
    mobileHeader,
  },
  data: () => {
    return {
      scrolled: false,
      /* isLoading: true, */
    }
  },
  methods: {
    closeContactModal() {
      window.removeEventListener('scroll', this.handleScroll)
      this.scrolled = false
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0
    },
  },
  async created() {
    window.addEventListener('scroll', this.handleScroll)

    // await this.$store.dispatch({ type: 'loadMarathons' })

    /*     setTimeout(() => {
      this.isLoading = false;
    }, 4000); */
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    checkHomeRoute() {
      const path = this.$route.path.split('/')
      // console.log('path', path)
      return path[path.length - 1].toLowerCase() === ''
    },
  },
}
</script>
<style>
.f {
  position: relative;
}
.logo {
  position: fixed;
  top: 0;
  right: 0;
}

.logoActive {
  opacity: 0.5;
}

.display-contact {
  /* display: block; */
  opacity: 1;
}

.dont-display-contact {
  /* display: none; */
  opacity: 0;
}

@media (max-width: 768px) {
  .logo {
    display: none;
    /* opacity: 0; */
  }
}
</style>
