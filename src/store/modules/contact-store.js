import {contactService} from '@/services/contact-service'
import {utilService} from '@/services/util-service'
// import { socketService } from '../../services/socket.service'
export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {
        async createContact({commit}, {cred}) {
            try {
                const newContact = await contactService.createContact(cred)

                //commit({type: 'setContact', newContact})
            } catch (err) {
                console.log(err)
            }
        },

    }
}