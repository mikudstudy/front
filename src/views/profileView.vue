<template>
    <div class="profile">
        <login @displaySignup="showLogin=false" v-if="showLogin"/>
        <signup @displaySignup="showLogin=true" v-if="!showLogin"/>
    </div>
</template>
<script>
import login from '../components/login.vue'
import signup from '../components/signup.vue'

export default {
    name: 'ProjectApp',
    components: { login, signup },
    data() {
        return {
            showLogin:true,
        };
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};
</script>
<style></style>