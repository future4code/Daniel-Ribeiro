import app from './app'
import createActor from './endpoints/put/createUser'
import getUsers from './endpoints/get/getUsers'
import getUserById from './endpoints/get/getUserById'
import editUsers from './endpoints/post/editUser'
import createTask from './endpoints/put/createTask'
import getTaskById from './endpoints/get/getTaskById'

app.get('/user/all', getUsers)
app.get('/user/:id', getUserById)
app.get('/task/:id', getTaskById)
app.put('/user', createActor)
app.put('/task', createTask)
app.post('/user/edit/:id', editUsers)