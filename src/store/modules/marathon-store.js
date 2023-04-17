import { marathonService } from '../../services/marathon-service.js'

export default {
    state: {
        marathons: [],
    },
    getters: {
        marathons({ marathons }) {
            return marathons
        },

    },
    mutations: {
        setMarathons(state, { marathons }) {
            state.marathons = marathons
        },

    },
    actions: {
        loadMarathons({ commit, state }) {
            marathonService.query().then((marathons) => {
                console.log('MARATHONS:', marathons);
                commit({ type: 'setMarathons', marathons })
            })
        },
        async addMarathon({ commit }, { cred }) {
            console.log('fffffffffffff', cred)

            await marathonService.saveMarathon(cred).then((savedMarathon) => {
                console.log('savedMarathon', savedMarathon)
                // commit({ type: 'addOrder', newOrder: savedOrder })
                // socketService.emit('editOrder', newOrder)

                return savedMarathon
            })
        },
    }
}
