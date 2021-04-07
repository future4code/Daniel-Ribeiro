import app from './app'
import getUserByName from './endpoints/get/getUserByName'
import getUserByType from './endpoints/get/getUserByType'
import orderUser from './endpoints/get/orderUser'
import getUserLimited from './endpoints/get/getUserLimited'
import getEx4 from './endpoints/get/getEx4'

app.get('/user/ex4', getEx4) // quarto exercício
app.get('/user', getUserLimited) // terceiro exercício
app.get('/user/order', orderUser) // segundo exercício
app.get('/user/search', getUserByName) // primeiro exercício, letra a
app.get('/user/:type', getUserByType) // primeiro exercício, letra b
