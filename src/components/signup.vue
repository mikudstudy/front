<template>
  <div class="login-cont signup-cont">
    <button class="close" @click="close">x</button>
    <form @submit.prevent="signup">
      <h2 class="koteret">אין לך עדיין משתמש ? בוא הרשם כאן !</h2>

      <el-steps :active="active" finish-status="success">
        <el-step title="שלב 1" />
        <el-step title="שלב 2" />
        <el-step title="שלב 3" />
        <el-step title="שלב 4" />
      </el-steps>
      <div :active="process">
        <div v-if="currform === 0" class="el-step__description">

          <input
          class="input"
          type="text"
          v-model.trim="newUser.firstName"
          placeholder="שם פרטי"
          :class="{invalid: firstNameValidity === false}"
        />
        <p v-if="firstNameValidity === false" class="invalid">שם פרטי לא תקין</p>
        <input
        class="input"
          type="text"
          v-model.trim="newUser.lastName"
          placeholder='שם משפחה'
          :class="{invalid: lastNameValidity === false}"
        />
        <p v-if="lastNameValidity === false" class="invalid">שם משפחה לא תקין</p>
        <input
        class="input"
          type="email"
          v-model.trim="newUser.mail"
          placeholder='דוא"ל'
          :class="{invalid: emailValidity === false}"
        />
        <p v-if="emailValidity === false" class="invalid">אימייל לא תקין, אנא הזן כתובת תקינה</p>
        <input
        class="input"
          type="tel"
          v-model.trim="newUser.phoneNumber"
          placeholder="מספר טלפון"
          :class="{invalid: phoneValidity === false}"
        />
          <p v-if="phoneValidity === false" class="invalid">מספר טלפון לא תקין, אנא הזן מספר טלפון תקין</p>
        <br>
          <input class="radio" type="radio" id="teacher" name="who" value="teacher" v-model="newUser.isTeacher" />
           <label for="teacher" class="who-title">מורה</label>
          <input class="radio" type="radio" id="student" name="who" value="student" v-model="newUser.isStudent" />
          <label class="who-title">תלמיד</label>
          <p v-if="studentValidity === false" class="invalid">יש לבחור אחת מהאפשרויות</p>
          <h1></h1>
          <input class="input" type="text" placeholder="עיר מגורים" v-model.trim="newUser.city"/>
          <br />
          <input class="input" type="text" placeholder=" שם משתמש" v-model.trim="newUser.username" @blur="validateEmail" @input="validateEmail"  :class="{invalid: userValidity === false}"/>
          <p v-if="userValidity === false" class="invalid">שם משתמש תפוס</p>

          <br />
          <input class="input" type="password" v-model.trim="newUser.password" @blur="validatePassword" @input="validatePassword" placeholder=" סיסמא"  :class="{invalid: passValidity === false}"/>
          <p v-if="passValidity === false" class="invalid">הסיסמא צריכה להכיל 6 תווים לפחות</p>
          <h1></h1>
        </div>
        <div v-if="currform === 1" class="el-step__description">
          <input class="radio" type="radio" id="male" name="gender" value="male" />
          <label for="male">זכר</label> <input class="radio" type="radio" id="female" name="gender" value="female" />
          <label for="female">נקבה</label>
          <br />
          <h1></h1>
          <el-select v-model="newUser.status" class="m-2" id="status" placeholder='סוג תלמיד'>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <h1></h1>
          <input class="input" type="text" placeholder="מה תרצה ללמוד" v-model="newUser.subject" />
          <br />
          <h1></h1>
        </div>
        <div v-if="currform === 2" class="el-step__description">
          <label for="lesson">אופן העברת שיעור :</label>
          <input class="radio" type="radio" id="frontal" name="lesson" value="frontal" />
           <label for="frontal">פרונטלי</label>  <input class="radio" type="radio" id="online" name="lesson" value="online" />
          <label for="online">אונליין</label>  <input class="radio" type="radio" id="both" name="lesson" value="both" />
          <label for="both">שניהם</label>
          <br />
          <h1></h1>
          <label for="marathons">האם תהיו מעוניינים במרתונים לפני מבחנים ? </label>
          <input class="radio" type="radio" id="yes" name="marathons" value="yes" />
           <label for="yes">כן</label> <input class="radio" type="radio" id="no" name="marathons" value="no" />
          <label for="no">לא</label>
          <br />
          <h1></h1>
        </div>
        <div v-if="currform === 3" class="el-step__description">
          מתי תרצה שנתחיל
          <input class="input" type="date" name="date" v-model="newUser.date" />
          <br />
          <h1></h1>
          <input class="input" type="text" placeholder="זמינות (ימים,שעות)" v-model="newUser.availability" autocomplete="off" />
          <br />
          <h1></h1>
        </div>
        <div v-if="currform === 4" class="el-step__description">
          <h1>הפרטים נקלטו בהצלחה !</h1>
        </div>
      </div>

      <el-button v-if="currform !== 4" style="margin-top: 12px" @click="validateNext" id="formbtn">המשך</el-button>
      <button v-if="currform === 4" type="submit">אישור</button>
    </form>
  </div>
</template>
<script>
import { ref } from 'vue'

const value = ref('')

export default {
  components: {},
  data: () => {
    return {
      newUser: {
        firstName: '',
        lastName: '',
        username: '',
        phoneNumber: '',
        password: '',
        city: '',
        subject: '',
        mail: '',
        date: '',
        availability: '',
        status: '',
        isTeacher: false,
        isStudent: false,
      },
      firstNameValidity: null,
      lastNameValidity: null,
      emailValidity: null,
      phoneValidity: null,
      userValidity: null,
      passValidity: null,
      studentValidity: null,
      active: ref(0),
      currform: 0,
      options: [
        {
          value: 'yesodi',
          label: 'תלמיד יסודי',
        },
        {
          value: 'hativa',
          label: 'תלמיד חטיבת ביניים',
        },
        {
          value: 'tihun',
          label: 'תלמיד תיכון',
        },
        {
          value: 'student',
          label: 'סטונדט',
        },
      ],
    }
  },
  methods: {
    validateName(name) {
      const reg = /[a-zA-Z\u0590-\u05fe]+$/
      return (!!name && name.length >=1 && reg.test(name))
    },
    validateEmail(email) {
      this.emailValidity =( !!email && email.length >=1 && this.checkIfEmail(email))
    },
    validatePhone(phone) {
      const reg = /^[0][5][0|2|3|4|5|8|9]{1}[-]{0,1}[0-9]{7}$/;
      this.phoneValidity = ( !!phone && reg.test(phone))
    },
    validatePassword() {
      this.passValidity = ( this.newUser.password.length >= 6 )
    },

    validateStudent() {
      this.studentValidity = (!!this.newUser.isStudent || !!this.newUser.isTeacher)
    },

    checkIfEmail(str) {
      // Regular expression to check if string is email
      const regexExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      return regexExp.test(str);
    },


    async signup() {
      console.log('signup', this.newUser)
      await this.$store.dispatch({ type: 'signup', cred: this.newUser })
      this.$router.push('/')
    },
    validateNext(){
      this.firstNameValidity = this.validateName(this.newUser.firstName);
      this.lastNameValidity  = this.validateName(this.newUser.lastName);
      this.validateEmail(this.newUser.mail);
      this.validatePhone(this.newUser.phoneNumber);
      this.validateStudent();
      this.validatePassword();
      console.log(this.firstNameValidity, '1', this.lastNameValidity, '2', this.emailValidity,'3', this.phoneValidity,'4', this.passValidity, '5', this.studentValidity)
      const invalid = !this.firstNameValidity || !this.lastNameValidity || !this.emailValidity || !this.phoneValidity || !this.passValidity || !this.studentValidity
      console.log("validuser",this.$store.validateUser());
      if(!invalid && this.$store.validateUser()) this.next();
    },
    next() {
      if (this.active++ > 3) this.active = 0;
      if (this.currform++ > 3) this.currform = 0;
      
    },
    close() {
      this.$emit('displaySignup', true)
    },
  },
  computed: {},
}
</script>

<style scoped> 
.invalid {
  border-color: red;
  color: red;
}
</style>
