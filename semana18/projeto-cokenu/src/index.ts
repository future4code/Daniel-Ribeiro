import app from './app'
import getProfile from './endpoints/getProfile'
import login from './endpoints/login'
import signup from './endpoints/signup'

app.get('/user/profile', getProfile)
app.post('/user/signup', signup)
app.post('/user/login', login)