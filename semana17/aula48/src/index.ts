import app from './app'
import getUserByName from './endpoints/get/getUserByName'
import getUserByType from './endpoints/get/getUserByType'
import orderUser from './endpoints/get/orderUser'

//primeiro exercício
app.get('/user/order', orderUser)
app.get('/user/search', getUserByName) //letra a
app.get('/user/:type', getUserByType) //letra b
