import app from './app'
import createRepcipe from './endpoints/createRecipe'
import getAnotherUser from './endpoints/getAnotherUser'
import getProfile from './endpoints/getProfile'
import getRecipe from './endpoints/getRecipe'
import login from './endpoints/login'
import signup from './endpoints/signup'

app.get('/user/profile', getProfile)
app.get('/user/:id', getAnotherUser)
app.get('/recipe/:id', getRecipe)
app.post('/user/signup', signup)
app.post('/user/login', login)
app.post('/user/recipe', createRepcipe)