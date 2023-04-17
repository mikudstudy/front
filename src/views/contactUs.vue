<template>
  <div class="contact-container main-layout">
    <div class="contact-titles">
      <h1>צרו קשר</h1>
      <h4 class="sub-title">השאירו פרטים ונחזור אליכם בהקדם</h4>
    </div>

    <div class="contact-form-container">
      <div class="contact-info">
        <h3 class="no-margin-top">?איפה אנחנו נמצאים</h3>

        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              class="gmap_iframe"
              width="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=auto&amp;hl=en&amp;q=עוזיאל 41 גבעת שמואל&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>

        <h3>דרכי התקשרות</h3>
        <div class="contacts">
          <div>
            עוזיאל <span class="bolder">41</span>, גבעת שמואל &nbsp;<i
              class="fa-sharp fa-solid fa-location-dot"
            ></i>
          </div>
          <div class="bolder">
            mikud.studycenter@gmail.com &nbsp;<i
              class="fa-solid fa-envelope"
            ></i>
          </div>
          <div class="bolder">
            054-7799529 &nbsp;<i class="fa-solid fa-phone"></i>
          </div>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="submitContact">
        <input
          type="text"
          v-model.trim="contact.firstName"
          placeholder="שם פרטי"
          @blur="validateName"
          @keyup="validateName"
          :class="{invalid: nameValidity === 'invalid'}"
        />
        <p v-if="nameValidity === 'invalid'" class="invalid">שם לא תקין</p>
        <input
          type="text"
          v-model.trim="contact.LastName"
          placeholder='שם משפחה'
          @blur="validateName"
          @keyup="validateName"
          :class="{invalid: nameValidity === 'invalid'}"
        />
        <p v-if="nameValidity === 'invalid'" class="invalid">שם משפחה לא תקין</p>
        <input
          type="email"
          v-model.trim="contact.email"
          placeholder='דוא"ל'
          @blur="validateEmail"
          @keyup="validateName"
          :class="{invalid: nameValidity === 'invalid'}"
        />
        <p v-if="emailValidity === 'invalid'" class="invalid">אימייל לא תקין, אנא הזן כתובת תקינה</p>
        <input
          type="tel"
          v-model.trim="contact.phoneNumber"
          placeholder="מספר טלפון"
          @blur="validatePhone"
          @keyup="validatePhone"
          :class="{invalid: nameValidity === 'invalid'}"
        />
        <p v-if="phoneValidity === 'invalid'" class="invalid">מספר טלפון לא תקין, אנא הזן מספר טלפון תקין</p>
        <textarea
          id=""
          cols="30"
          rows="10"
          placeholder="ספרו לנו עוד"
          v-model.trim="contact.message"
          @blur="validateBox"
          :class="{invalid: messageValidity === 'invalid'}"
        ></textarea>
        <p v-if="messageValidity === 'invalid'" class="invalid">יש להזין תוכן</p>
        <button class="submit-form-btn" id="formbtn">שלח</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data: () => {
    return {
      contact: { 
        firstName: "",
        LastName: '',
        email: "",
        phoneNumber: "",
        message: "",
      },
      nameValidity: "pending",
      emailValidity: "pending",
      phoneValidity: "pending",
      messageValidity: 'pending'
    };
  },
  methods: {
    validateName() {
      if (
        this.contact.firstName === '' || this.contact.LastName === "" ||
        !this.contact.firstName.match("^[a-zA-Z\u0590-\u05fe]+$") || !this.contact.LastName.match("^[a-zA-Z\u0590-\u05fe]+$")
      ) {
        this.nameValidity = "invalid";
      } else {
        this.nameValidity = "valid";
      }
    },
    validateEmail() {
      if (this.contact.email === "" || !this.checkIfEmail(this.contact.email)) {
        this.emailValidity = "invalid";
      } else {
        this.emailValidity = "valid";
      }
    },
    validatePhone() {
      if (
        this.contact.phoneNumber === "" ||
        !this.contact.phoneNumber.match(
          "^[0][5][0|2|3|4|5|8|9]{1}[-]{0,1}[0-9]{7}$"
        )
      ) {
        this.phoneValidity = "invalid";
      } else {
        this.phoneValidity = "valid";
      }
    },

    validateBox() {
      if(this.contact.message === '') {
        this.messageValidity = 'invalid'
      } else if (this.contact.message !== '') {
        this.messageValidity = 'valid'
      }
    },

    checkIfEmail(str) {
      // Regular expression to check if string is email
      const regexExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      return regexExp.test(str);
    },



    async submitContact() {
      if(this.nameValidity === 'invalid' || this.emailValidity === 'invalid' || this.phoneValidity === 'invalid' || this.messageValidity === 'invalid') {
        document.getElementById("formbtn").disabled = true;
        this.validateName()
        this.validateEmail()
        this.validatePhone()
        this.validateBox()
      } else if (this.nameValidity === 'pending' || this.emailValidity === 'pending' || this.phoneValidity === 'pending' || this.messageValidity === 'pending')
      {
        document.getElementById("formbtn").disabled = true;
        this.validateName()
        this.validateEmail()
        this.validatePhone()
        this.validateBox()
      } else {
        document.getElementById("formbtn").disabled = false;
        await this.$store.dispatch({ type: "createContact", cred: this.contact });
        this.$router.push("/");
      }
     
    },
  },
  computed: {
  },
};
</script>

<style scoped>
.invalid {
  border-color: red;
  color: red;
}
.mapouter {
  position: relative;
  text-align: right;
  width: 100%;
  height: 100%;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 100%;
  height: 100%;
}
.gmap_iframe {
  height: 100% !important;
}
</style>
