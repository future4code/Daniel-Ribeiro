import app from './app';
import createActor from './endpoints/posts/createActor';
import getActorById from './endpoints/gets/getActorById';
import getActorByName from './endpoints/gets/getActorByName';
import getCountActorByGender from './endpoints/gets/getCountActorByGender';

app.get('/actor/search-name', getActorByName)
app.get('/actor/search-gender', getCountActorByGender)
app.get('/actor/:id', getActorById)
app.post('/actor/create', createActor)
