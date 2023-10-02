<template>

<div class="contact">
    <div class="container">
      <div class="contact-title">
        <h4>Contact for more information!</h4>
      </div>
      <form @submit.prevent="submitContact">
        <div class="form-inp">
          <label>Full Name</label>
          <input type="text" placeholder="Name"
            v-model.trim="contact.fullName"
            @blur="validateName"
            @keyup="validateName"
            :class="{invalid: nameValidity === 'invalid'}"
          >
          <p v-if="nameValidity === 'invalid'" class="invalid">שם משפחה לא תקין</p>   

        </div>
        <div class="form-inp">
          <label>Email Address</label>
          <input type="email" 
            v-model.trim="contact.email"
            @blur="validateEmail"
            @keyup="validateName"
            :class="{invalid: nameValidity === 'invalid'}"
            placeholder="Email"
          >
          <p v-if="emailValidity === 'invalid'" class="invalid">אימייל לא תקין, אנא הזן כתובת תקינה</p>
        </div>
        <div class="form-inp">
          <label>Phone</label>
          <input type="tel"
            v-model.trim="contact.phoneNumber"
            @blur="validatePhone"
            @keyup="validatePhone"
            :class="{invalid: nameValidity === 'invalid'}"
            placeholder="Phone"
          >
          <p v-if="phoneValidity === 'invalid'" class="invalid">מספר טלפון לא תקין, אנא הזן מספר טלפון תקין</p>

        </div>
        <div class="about-btn">
          <button class="btn-main" id="formbtn" type="submit"> Send</button>
        </div>
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
        fullName: "",
        email: "",
        phoneNumber: "",
      },
      nameValidity: "pending",
      emailValidity: "pending",
      phoneValidity: "pending",
    };
  },
  methods: {
    validateName() {
      if (
        this.contact.fullName === '' ||
        !this.contact.fullName.match("^[a-zA-Z\u0590-\u05fe]+$") 
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

    checkIfEmail(str) {
      // Regular expression to check if string is email
      const regexExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      return regexExp.test(str);
    },



    async submitContact() {
      console.log("dfsd");
      if(this.nameValidity === 'invalid' || this.emailValidity === 'invalid' || this.phoneValidity === 'invalid' || this.messageValidity === 'invalid') {
        // document.getElementById("formbtn").disabled = true;
        this.validateName()
        this.validateEmail()
        this.validatePhone()
      } else if (this.nameValidity === 'pending' || this.emailValidity === 'pending' || this.phoneValidity === 'pending' || this.messageValidity === 'pending')
      {
        // document.getElementById("formbtn").disabled = true;
        this.validateName()
        this.validateEmail()
        this.validatePhone()
      } else {
        // document.getElementById("formbtn").disabled = false;
        await this.$store.dispatch({ type: "createContact", cred: this.contact });
        this.$router.push("/");
      }
     
    },
  },
  computed: {
  },
};
</script>

