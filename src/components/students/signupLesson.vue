<template>
  <form class="formLesson" @submit.prevent="signupLesson">
    <h2 class="koteret">הרשמה לשיעור פרטי</h2>

    <el-steps :active="active" finish-status="success">
      <el-step title="שלב 1" />
      <el-step title="שלב 2" />
      <el-step title="שלב 3" />
      <el-step title="שלב 4" />
      <el-step title="שלב 5" />
      <el-step title="שלב 6" />
      <el-step title="שלב 7" />
    </el-steps>
    <div :active="process">
      <div v-if="currForm === 0" class="el-step__description">
        <h1>לא משנה איזה מטרות יש לך, אנחנו כאן כדי לעזור</h1>
        <h3>תספר לנו קצת על עצמך:</h3>
        <div class="choiceNext" @click="next('isParent')">אני הורה</div>
        <div class="choiceNext" @click="next('isStudent')">אני סטודנט</div>
      </div>
      <div v-if="currForm === 1" class="el-step__description">
        <h1>?איזה רמה את\ה מחפש\ת</h1>
        <div class="choiceNext" @click="next('elementry')">תלמיד יסודי</div>
        <div class="choiceNext" @click="next('middle')">תלמיד חטיבת ביניים</div>
        <div class="choiceNext" @click="next('high')">תלמיד תיכון</div>
        <div class="choiceNext" @click="next('student')">סטודנט</div>
      </div>
      <div v-if="currForm === 2" class="el-step__description">
        <h1>?באיזה נושא תרצה\י לקבל עזרה</h1>
        <div class="choiceNext" @click="next('bagrut')">בגרויות</div>
        <div class="choiceNext" @click="next('tests')">מבחנים</div>
        <div class="choiceNext" @click="next('student')">סטודנט</div>
      </div>
      <div v-if="currForm === 3" class="el-step__description">
        <h1>?איזה סוג תמיכה הינך מחפש\ת</h1>
        <div class="choiceNext" @click="next('solo')">מפגש אחד על אחד</div>
        <div class="choiceNext" @click="next('group')">מפגש קבוצתי</div>
        <div class="choiceNext" @click="next('unsure')">לא בטוח</div>
      </div>
      <div v-if="currForm === 4" class="el-step__description">
        <h1>?כמה עזרה אתה חושב שהינך צריך בכדי להשיג את המטרות שלך</h1>
        <div class="choiceNext" @click="next('much')">הרבה עזרה</div>
        <div class="choiceNext" @click="next('reg')">עזרה רגילה</div>
        <div class="choiceNext" @click="next('little')">קצת עזרה</div>
        <div class="choiceNext" @click="next('unsure')">לא בטוח</div>
      </div>
      <div v-if="currForm === 5" class="el-step__description">
        <h1>?באיזה תדירות תרצה\י לקבל עזרה</h1>
        <div class="choiceNext" @click="next('urgent')">באופן מידי</div>
        <div class="choiceNext" @click="next('later')">עוד כמה שבועות</div>
        <div class="choiceNext" @click="next('unsure')">לא בטוח</div>
      </div>
      <div v-if="currForm === 6" class="el-step__description" dir="ltr">
        <h1>!אנחנו בהחלט יכולים לעזור לך</h1>
        <h1>
          בוא נסיים להקים את הפרופיל שלך בכדי להתאים את התוכנית המותאמת במיוחד אליך
        </h1>
        <input
          class="choiceNext"
          placeholder="שם מלא"
          v-model.trim="lesson.fullName"
          @blur="validateName"
          @keyup="validateName"
          :class="{invalid: nameValidity === 'invalid'}"
        />
        <p v-if="nameValidity === 'invalid'" class="invalid">שם לא תקין</p>
        <br />
        <input
          class="choiceNext"
          placeholder="אימייל"
          type="email"
          v-model.trim="lesson.email"
          @blur="validateEmail"
          @keyup="validateEmail"
          :class="{invalid: emailValidity === 'invalid'}"
        />
        <p v-if="emailValidity === 'invalid'" class="invalid">אימייל לא תקין, אנא הזן כתובת תקינה</p>
        <br />
        <input
          class="choiceNext"
          placeholder="מספר טלפון"
          type="tel"
          v-model.trim="lesson.phoneNumber"
          @blur="validatePhone"
          @keyup="validatePhone"
          :class="{invalid: phoneValidity === 'invalid'}"
        />
        <p v-if="phoneValidity === 'invalid'" class="invalid">מספר טלפון לא תקין, אנא הזן מספר טלפון תקין</p>
        <div class="choiceNext" @click="next()" v-if="phoneValidity === 'valid' && emailValidity === 'valid' && nameValidity === 'valid'">המשך</div>
      </div>
      <div v-if="currForm === 7" class="el-step__description ">
        <h1> בחר תאריך ושעה לשיעור</h1>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="בחר תאריך"
        :size="size"
      />
  <br>
    <el-time-picker
      v-model="value2"
      :disabled-seconds="disabledSeconds"
      placeholder="Arbitrary time"
    />
      </div>
    </div>

    <button v-if="currForm === 7" type="submit" class="ok">אישור</button>
    <br />
    <el-button v-if="currForm !== 0" style="margin-top: 12px; border-radius: 50px;" @click="back"
      >חזור</el-button
    >
  </form>
</template>
<script>
import { ref } from "vue";
const value = ref("");

export default {
  name: "ProjectApp",
  data() {
    return {
      active: ref(0),
      currForm: 0,
      value1: ref(""),
      value2: ref(new Date(2016, 9, 10, 18, 30)),
      shortcuts: [
        {
          text: "Today",
          value: new Date(),
        },
        {
          text: "Yesterday",
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date;
          },
        },
        {
          text: "A week ago",
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            return date;
          },
        },
      ],

      lesson: {
        role: "",
      },
      nameValidity: "pending",
      emailValidity: 'pending',
      phoneValidity: 'pending'
    };
  },
  created() {},
  methods: {
    validateName() {
      if (
        this.lesson.fullName === "" ||
        !this.lesson.fullName.match("^[a-zA-Z\u0590-\u05fe]+$")
      ) {
        this.nameValidity = "invalid";
      } else {
        this.nameValidity = "valid";
      }
    },
    validateEmail() {
      if (this.lesson.email === "" || !this.checkIfEmail(this.lesson.email)) {
        this.emailValidity = "invalid";
      } else {
        this.emailValidity = "valid";
      }
    },
    validatePhone() {
      if (
        this.lesson.phoneNumber === "" ||
        !this.lesson.phoneNumber.match(
          "^[0][5][0|2|3|4|5|8|9]{1}[-]{0,1}[0-9]{7}$"
        )
      ) {
        this.phoneValidity = "invalid";
      } else {
        this.phoneValidity = "valid";
      }
    },
    checkIfEmail(str) {
      // Regular expression to check if string is email
      const regexExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      return regexExp.test(str);
    },

    validNext() {
      this.validateName()
      this.validateEmail()
      this.validatePhone()
      this.active++ > 10;
      this.currForm++ > 10;
    },

    next(par) {
      const arr = [
        "role",
        "grade",
        "testType",
        "lessonType",
        "helpNeeded",
        "helpFreq",
        "helpUrgency",
      ];
      let index = arr[this.currForm];
      this.lesson[index] = par;
      this.active++ > 10;
      this.currForm++ > 10;
    },
    back() {
      this.active-- > 10;
      this.currForm-- > 10;
    },
    async signupLesson() {
      await this.$store.dispatch({ type: "createContact", cred: this.lesson });
      this.$router.push("/");
    },
  },
  computed: {},
  unmounted() {},
};
</script>
<style scoped>
.invalid {
  border-color: red;
  color: red;
  margin: 0;
}

.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.example-basic .el-date-editor {
  margin: 8px;
}
</style>
