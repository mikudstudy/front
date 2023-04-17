// import { storageService } from "./storage-service.js"
import { utilService } from './util-service.js'
import { httpService } from './http-service'

// const KEY = 'orders_db'
const ENDPOINT = 'lesson'

export const lessonService = {
    query,
    // getEmptyOrder,
    saveLesson,
    addRevToLesson
    //   getById,


}

async function addRevToLesson(rev, lessonId) {
    await httpService.put(`${ENDPOINT}/${lessonId}`, rev)
}

async function saveLesson(lesson) {
    console.log('lesson:::::::::', lesson);
    return lesson._id
        ? await httpService.put(`${ENDPOINT}/${lesson._id}`, lesson)
        : await httpService.post(ENDPOINT, lesson)

}


async function query() {
    return await httpService.get(ENDPOINT)

    // try {

    //   const orders = await storageService.query(KEY)
    //   return Promise.resolve(orders)
    // } catch (err) {
    //   console.error(err)
    // }
}



// _createOrders()

// async function saveOrder(order) {
//   console.log('order', order)
//   return await httpService.post(ENDPOINT, order)
//   // const res = await storageService.post(KEY, order)
//   // return res

// }




// async function getById(orderId) {
//     try {

//         return await httpService.get(`${ENDPOINT}/${orderId}`)

//     } catch (err) {
//         console.error(err)
//     }

// }



// async function getEmptyOrder() {
//     return Promise.resolve({

//         createdAt: await utilService.getFormattedDate(),
//         status: 'Pending',
//         deliveredAt: '',
//     })
// }


// function _createOrders() {
//     let orders = utilService.loadFromStorage(KEY) || []
//     console.log('firstOrders', orders)

    //       {
    //           "_id": "o1225",
    //           "createdAt": new Date(),
    //           "buyer": "mini-user",
    //           "seller": "mini-user",
    //           "gig": {
    //             "_id": "i101",
    //             "name": "Design Logo",
    //             "price": 20
    //           },
    //           "status": "pending"
    //         }
    //   utilService.saveToStorage(KEY, orders)
    // }
//     return orders
// }
