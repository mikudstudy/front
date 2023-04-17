<template>
  <main class="login-cont">
    <form @submit.prevent="login">
      <h1 class="koteret">התחברות לאיזור אישי</h1>
      <error-message :error-message="formErrorMessage" />
      <input class="input" type="text" placeholder="הכנס שם משתמש" v-model="loginInfo.username" autocomplete="off" />
      <h1></h1>
      <input class="input" type="password" v-model="loginInfo.password" placeholder="הכנס סיסמא" />
      <h1></h1>

      <button type="submit" class="form-btn">התחבר</button>
      <h5>אין לך חשבון? להרשמה <button @click="showSignup" class="tapin">לחץ כאן</button></h5>
    </form>
  </main>
</template>
<script>


export default {
  data: () => {
    return {
      loginInfo: {
        fullName: '',
        username: '',
        password: '',
      },
      formErrorMessage: '',
    }
  },
  methods: {
    curtain(el) {
      var X = el.offsetX
      this.$refs.inner.style.width = `${X}px`
    },
    async login() {
      try {
        await this.$store.dispatch({ type: 'login', cred: this.loginInfo })
        ;(this.loginInfo = {
          fullName: '',
          username: '',
          password: '',
        }),
            this.$router.replace('/')
      } catch (err) {
        console.log('catched in login')
        console.log(err)
        this.formErrorMessage = err.message
      }

    },
    showSignup() {
      this.$emit('displaySignup', false)
    },
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
  },
}
</script>
