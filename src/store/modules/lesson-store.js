import { lessonService } from '../../services/lesson-service'

export default {
    state: {
        studentLessons: [],
        teacherLessons: [],
    },
    getters: {
        studentLessons({ studentLessons }) {
            return studentLessons
        },
        teacherLessons({ teacherLessons }) {
            return teacherLessons
        },

        allSubjects({ studentLessons, teacherLessons }) {
            let allLessons = studentLessons.concat(teacherLessons)
            let allSubjects = []
            let hi = allLessons.map((lesson) => {
                allSubjects.includes(lesson.subject) ? '' : allSubjects.push(lesson.subject)
            })
            console.log('allSubjects: ', allSubjects)
            return allSubjects
        },
        setLessonsByMonth({ studentLessons, teacherLessons }) {
            let allLessons = studentLessons.concat(teacherLessons)
            let currMonth = new Date().getMonth() + 1
            let pastMonth = currMonth - 1
            let nextMonth = currMonth + 1


            let lessonsPerMonth = {
                lastMonthLessonCount: 0,
                currMonthLessonCount: 0,
                nextMonthLessonCount: 0,
            }

            let hi = allLessons.map(lesson => {
                if (new Date(lesson.date).getMonth() + 1 === currMonth) {
                    lessonsPerMonth.currMonthLessonCount++

                }
                if (new Date(lesson.date).getMonth() + 1 === pastMonth) {
                    lessonsPerMonth.lastMonthLessonCount++

                }
                if (new Date(lesson.date).getMonth() + 1 === nextMonth) {
                    lessonsPerMonth.nextMonthLessonCount++

                }

            })
            const monthsInWords = [
                'ינואר',
                'פברואר',
                'מרץ',
                'אפריל',
                'מאי',
                'יוני',
                'יולי',
                'אוגוסט',
                'ספטמבר',
                'אוקטובר',
                'נובמבר',
                'דצמבר'



            ]
            let bi = monthsInWords.map(month => {
                monthsInWords.indexOf(month) + 1 === pastMonth ? pastMonth = month : ''
                monthsInWords.indexOf(month) + 1 === currMonth ? currMonth = month : ''
                monthsInWords.indexOf(month) + 1 === nextMonth ? nextMonth = month : ''
            })





            return { ...lessonsPerMonth, pastMonth, currMonth, nextMonth }


        }

    },
    mutations: {
        setStudentLessons(state, { lessons }) {
            state.studentLessons = lessons.lessonsLearn.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        },
        setTeacherLessons(state, { lessons }) {
            state.teacherLessons = lessons.lessonsTeach.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        },
        // setLessonsByMonth(state,{lessons}){

        // }

    },
    actions: {
        loadLessons({ commit, state }) {
            lessonService.query().then((lessons) => {
                console.log('LESSONS:', lessons);
                commit({ type: 'setStudentLessons', lessons })
                commit({ type: 'setTeacherLessons', lessons })
                // commit({ type: 'setLessonsByMonth', lessons })
            })
        },
        async addLesson({ commit }, { cred }) {
            console.log('eeeeeeeeee', cred)

            await lessonService.saveLesson(cred).then((savedLesson) => {
                console.log('savedLesson', savedLesson)
                // commit({ type: 'addOrder', newOrder: savedOrder })
                // socketService.emit('editOrder', newOrder)

                return savedLesson
            })
        },
        async addStntRevToLesson(state, { studentRev, lessonId }) {


            console.log('lessonId: ', lessonId)
            await lessonService.addRevToLesson({ studentReview: { ...studentRev } }, lessonId)
            console.log('studentReview: ', { studentReview: { ...studentRev } })

            // .then((savedLesson) => {
            //     console.log('savedLesson', savedLesson)

            //     commit({ type: 'addLesson', newLesson: savedLesson })

            //     return savedLesson
            // })

        },
        async addTeacherRevToLesson(state, { teacherRev, lessonId }) {


            console.log('lessonId: ', lessonId)
            await lessonService.addRevToLesson({ teacherReview: { ...teacherRev } }, lessonId)
            console.log('studentReview: ', { teacherReview: { ...teacherRev } })

            // .then((savedLesson) => {
            //     console.log('savedLesson', savedLesson)

            //     commit({ type: 'addLesson', newLesson: savedLesson })

            //     return savedLesson
            // })

        }
    }
}
