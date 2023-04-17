<template>
    <img class="pay-logo" src="../styles/imgs/logo.png" alt="" />   
    <h1 class="pay-header">אנא בחר אמצעי תשלום</h1>
    <googlepay/>

</template>
 <script>
 import googlepay from '../components/googlePay.vue'

 export default {
    components: {googlepay},
  data() {
   return {};
    },
  created() {},
 methods: {},
 computed: {},
 unmounted() {},
  };
  </script>
 <style>
 .pay-logo{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
}
.pay-header{
    text-align: center;
    margin-top: 2rem;
}
</style>
