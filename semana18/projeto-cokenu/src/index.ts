import app from './app'
import getAnotherUser from './endpoints/getAnotherUser'
import getProfile from './endpoints/getProfile'
import login from './endpoints/login'
import signup from './endpoints/signup'

app.get('/user/profile', getProfile)
app.get('/user/:id', getAnotherUser)
app.post('/user/signup', signup)
app.post('/user/login', login)