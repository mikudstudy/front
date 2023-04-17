// import { storageService } from "./storage-service.js"
import { utilService } from './util-service.js'
import { httpService } from './http-service'

const ENDPOINT = 'marathon'

export const marathonService = {
    query,
    saveMarathon,


}

async function saveMarathon(marathon) {
    console.log('marathon:::::::::', marathon);
    return marathon._id
        ? await httpService.put(`${ENDPOINT}/${marathon._id}`, marathon)
        : await httpService.post(ENDPOINT, marathon)

}


async function query() {
    return await httpService.get(ENDPOINT)


}

