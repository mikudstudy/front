<template>
   <header>
      <div class="container-fluid">
          <div class="header-main">
              <div class="header-menu">
                  <ul>
                      <li class="has-child">
                          <a href="javascript:;">About</a>
                      </li>
                      <li>
                          <a href="javascript:;">Information</a>
                      </li>
                      <li>
                          <a href="javascript:;">Contact Us</a>
                      </li>
                  </ul>
              </div>
              <div class="logo">
                  <img v-bind:src="'images/logo.png'">
              </div>
          </div>
      </div>
    </header>
</template>
<script>
export default {
  components: {},
  data: () => {
    return {
      contact: "/contactUs",
      displayUserDrop: false,
      displaySoon: false,
      scrolled: false,
    };
  },
  methods: {
    async logout() {
      this.isUserDropdownDisplay = false;
      await this.$store.dispatch({ type: "logout" });
      this.$router.push("/");
      this.displayUserDrop = false;
    },
    moveToDashboard() {
      this.$router.push("/userDashboard");
      this.closeUserDrop();
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
      this.closeUserDrop();
      // console.log("position: ", this.scrolled);
    },
    closeUserDrop() {
      this.displayUserDrop = false;
      this.displaySoon = false;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    activateClass() {
      return {
        active:
          this.scrolled &&
          this.$route.path === "/" &&
          window.screen.width > 768,
      };
    },
  },
};
</script>
