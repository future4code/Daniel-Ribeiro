import app from './app'
import createUser from './endpoints/post/createUser'

app.post('/user/create', createUser)