import { createStore } from 'vuex'

import userStore from './modules/user-store.js'
import lessonStore from './modules/lesson-store.js'
import contactStore from './modules/contact-store.js'
import marathonStore from './modules/marathon-store.js'

const store = createStore({
    strict: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        contactStore,
        userStore,
        lessonStore,
        marathonStore,

    },
})

export default store

