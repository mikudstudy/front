import { createRouter, createWebHistory, onBeforeRouteLeave } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import landingPage from '../views/landing/index.vue'
import contactUs from '../views/contactUs.vue'
import payPage from '../views/payPage.vue'
import studentsView from '../views/students.vue'
import profileView from '../views/profileView.vue'
import userDashboard from '../views/userDashboard.vue'
import schoolStudents from '../views/schoolStudents.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: landingPage,
    },
    {
      path: '/landing',
      name: 'landing',
      component: landingPage,
    },
    {
      path: '/pay',
      name: 'pay',
      component: payPage,
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs,
    },
    {
      path: '/students',
      name: 'studentsView',
      component: studentsView,
    },
    {
      path: '/profile',
      name: 'profileView',
      component: profileView,
    },
    {
      path: '/userDashboard',
      name: 'userDashboard',
      meta: { needAuth: true },
      component: userDashboard,
    },
    {
      path: '/schoolStudent',
      name: 'scooolStudent',
      component: schoolStudents,
    },
    {
      path: '/:notFound(.*)',
      redirect: '/',
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.needAuth) {
    console.log('Need Auth!')
    next()
  } else {
    next()
  }
})

export default router
