<template>
  <header class="header" :class="activateClass">
    <nav class="main-layout">
      <div class="header-item">
        <div @click="displaySoon = !displaySoon" class="header-soon" id="header-it">
          בקרוב
          <el-icon>
            <ArrowDown />
          </el-icon>
        </div>
        <transition name="modal">
          <div v-if="displaySoon" class="header-dropdown">
            <RouterLink class="dropdown-item" to="/" @click="closeUserDrop">
              <div>תכניות גפן</div>
            </RouterLink>
            <RouterLink class="dropdown-item" to="/" @click="closeUserDrop">
              <div>קורסים</div>
            </RouterLink>
            <RouterLink class="dropdown-item" to="/" @click="closeUserDrop">
              <div>מרכזי למידה</div>
            </RouterLink>
            <RouterLink class="dropdown-item" to="/pay" @click="closeUserDrop">
              <div>pay</div>
            </RouterLink>
          </div>
        </transition>
      </div>

      <RouterLink class="header-item" to="/contactUs" id="header-it" @click="closeUserDrop">
        <div>צור קשר</div>
      </RouterLink>

      <RouterLink class="dropdown-item" to="/schoolStudent" @click="closeUserDrop">
        <div>תלמידי בית ספר</div>
      </RouterLink>

      <RouterLink class="header-item" to="/students" id="header-it" @click="closeUserDrop">
        <div>סטודנטים</div>
      </RouterLink>

      <RouterLink class="header-item" to="/" id="header-it" @click="closeUserDrop">
        <div>עמוד הבית</div>
      </RouterLink>

      <RouterLink v-if="!user" class="header-item" to="/profile" id="header-it" @click="closeUserDrop">
        <div>התחברות</div>
      </RouterLink>
      <!-- <div v-if="user" @click="logout" class="header-item">התנתק</div> -->

      <div class="header-item">
        <div v-if="user" @click="displayUserDrop = !displayUserDrop" class="user-header">
          {{ user.username }}
        </div>
        <transition name="modal">
          <div v-if="displayUserDrop" class="header-dropdown">
            <div @click="moveToDashboard" class="dropdown-item">החשבון שלי</div>
            <div class="dropdown-item" @click="closeUserDrop">
              פעולות נוספות
            </div>
            <div @click="logout" class="dropdown-item">התנתק</div>
          </div>
        </transition>
      </div>
    </nav>
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
<style scoped>
.active {
  width: 100%;
  font-weight: bold;
  line-height: 100px;
  position: fixed;
  top: 0;
  background-color: rgb(255, 255, 255);
  display: block;
  z-index: 5;
}

a:hover,
a:active,
a.active {
  color: orange;
}

.modal-enter-active {
  animation: slide-scale 0.2s ease-out;
}

.modal-leave-active {
  animation: slide-scale 0.2s ease-in reverse;
}

@keyframes slide-scale {
  from {
    opacity: 0;
    transform: translateY(-15px) scale(0.7);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
