import { httpService } from '@/services/http-service'

const ENDPOINT = 'contact'

export const contactService = {
    createContact,
}
async function createContact(cred) {
    console.log('cred', cred);
    return await httpService.post(ENDPOINT, cred)
}
