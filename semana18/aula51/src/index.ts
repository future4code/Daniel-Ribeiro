import app from './app'
import getInfoUser from './endpoints/get/getInfoUser'
import createUser from './endpoints/post/createUser'
import login from './endpoints/post/login'

app.get('/user/profile', getInfoUser)
app.post('/user/create', createUser)
app.post('/user/login', login)