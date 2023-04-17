<template>
  <div class="mobile-header-container">
    <div class="mobile-sub-header main-layout">
      <a class="mobile-header-link" href="tel:+972543210040">
        <div class="mobile-header-txt">
          <i class="fa-sharp fa-solid fa-phone"></i>
        </div>
      </a>

      <RouterLink class="mobile-logo-container" to="/">
        <img class="mobile-logo" src="../styles/imgs/logo.png" alt="" />
      </RouterLink>

      <button class="mobile-header-btn" @click="displayMobileHeader = !displayMobileHeader">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>

    <Transition name="hii" class="mobile-header">
      <nav v-if="displayMobileHeader" class="main-layout">
        <RouterLink v-if="!user" class="header-item" to="/profile" id="header-it" @click="setDisplayMobile">
          <div>התחברות</div>
        </RouterLink>
        
        <RouterLink v-if="user" class="header-item" to="/userDashboard" id="header-it" @click="setDisplayMobile">
          <div>איזור אישי</div>
        </RouterLink>

        <RouterLink class="header-item" to="/" id="header-it" @click="setDisplayMobile">
          <div>עמוד הבית</div>
        </RouterLink>

        <RouterLink class="header-item" to="/students" id="header-it" @click="setDisplayMobile">
          <div>סטודנטים</div>
        </RouterLink>
        <RouterLink class="header-item" to="/schoolStudent" id="header-it" @click="setDisplayMobile">
          <div>תלמידי בית ספר</div>
        </RouterLink>

        <RouterLink class="header-item" to="/contactUs" id="header-it" @click="setDisplayMobile">
          <div>צור קשר</div>
        </RouterLink>

        <div @click="displaySoon = !displaySoon" class="header-item">
          <el-icon>
            <ArrowDown />
          </el-icon>
          בקרוב
        </div>
        <div v-if="displaySoon" class="header-dropdown">
          <RouterLink class="dropdown-item" to="/">
            <div>תכניות גפן</div>
          </RouterLink>
          <RouterLink class="dropdown-item" to="/">
            <div>קורסים</div>
          </RouterLink>
          <RouterLink class="dropdown-item" to="/">
            <div>מרכזי למידה</div>
          </RouterLink>
          <RouterLink class="dropdown-item" to="/pay">
            <div>pay</div>
          </RouterLink>
        </div>
        <RouterLink v-if="user" class="header-item" to="/" id="header-it" @click="setDisplayMobile">
          <div>התנתקות</div>
        </RouterLink>
      </nav>
    </Transition>
  </div>
</template>
<script>
export default {
  components: {},
  data: () => {
    return {
      displayMobileHeader: false,
      displaySoon: false,
    }
  },
  methods: {
    setDisplayMobile() {
      this.displayMobileHeader = false
    },
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
  },
}
</script>

<style>
.mobile-header-link:link,
.mobile-header-link:visited {
  text-decoration: inherit;
  color: inherit;
  cursor: auto;
}

.hii-enter-from {
  opacity: 0;
  transform: translate(60vw);
}

.hii-enter-active {
  transition: all 0.3s ease;
}

.hii-enter-to {
  opacity: 1;
  transform: translate(0);
}

.hii-leave-from {
  opacity: 1;
  transform: translate(0);
}

.hii-leave-active {
  transition: all 0.3s ease;
}

.hii-leave-to {
  opacity: 0;
  transform: translate(60vw);
}
</style>
