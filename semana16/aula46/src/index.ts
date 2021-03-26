import app from './app';
import createActor from './endpoints/actorsTable/posts/createActor';
import getActorById from './endpoints/actorsTable/gets/getActorById';
import getActorByName from './endpoints/actorsTable/gets/getActorByName';
import getCountActorByGender from './endpoints/actorsTable/gets/getCountActorByGender';
import updateActor from './endpoints/actorsTable/puts/updateActor';
import deleteActor from './endpoints/actorsTable/deletes/deleteActor';
import getCountActorByGenderBQ from './endpoints/actorsTable/gets/getAvgByGender';
import createMovie from './endpoints/moviesTable/posts/createMovie';
import getAllMovies from './endpoints/moviesTable/gets/getAllMovies';
import getMovieByName from './endpoints/moviesTable/gets/getByName';
import getBygender from './endpoints/actorsTable/gets/getBygender';

app.get('/actor/search-name', getActorByName)
app.get('/movie/search', getMovieByName)
app.get('/actor/gender', getBygender)
app.get('/actor/search-gender', getCountActorByGender)
app.get('/actor/:id', getActorById)
app.get('/actor/search-gender/query-builder', getCountActorByGenderBQ)
app.get('/movies/all', getAllMovies)
app.post('/actor/create', createActor)
app.post('/actor/update', updateActor)
app.post('/movie/create', createMovie)
app.delete('/actor/remove/:id', deleteActor)
