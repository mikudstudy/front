import { httpService } from '@/services/http-service'

const ENDPOINT = 'auth'

export const userService = {
  login,
  signup,
  logout,
  validate,
}


async function login(cred) {
  console.log('cred1', cred);
  return await httpService.post(ENDPOINT + '/login', cred)
}

async function signup(cred) {
  return await httpService.post(ENDPOINT + '/signup', cred)
}

async function logout() {
  return await httpService.post(ENDPOINT + '/logout')
}
async function validate() {
  return await httpService.post(ENDPOINT + '/validate')
}

