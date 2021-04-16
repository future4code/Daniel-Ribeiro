import app from './app'
import removeUser from './endpoints/delete/removeUser'
import getInfoUser from './endpoints/get/getInfoUser'
import getInfoUserNoAuth from './endpoints/get/getInfoUserNoAuth'
import getUserAddress from './endpoints/get/getUserAddress'
import createUser from './endpoints/post/createUser'
import login from './endpoints/post/login'

app.get('/user/profile', getInfoUser)
app.get('/user/profile/no-auth/:id', getInfoUserNoAuth)
app.post('/user/address', getUserAddress)
app.post('/user/create', createUser)
app.post('/user/login', login)
app.delete('/user/remove/:id', removeUser)