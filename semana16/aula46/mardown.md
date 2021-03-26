# Exercícios da aula 45

## Primeiro exercício:

### Resposta letra a:

A resposta, se for positiva e não for tratada (passando a posição da informação no array), vem com a resposta da requisição e os meta-dados da mesma. Caso só a resposta seja o alvo, retornamos apenas a primeira posição do array da resposta.

### Resposta letra b:

```
import connection from "../connection"
import { Request, Response } from 'express'

const getActorByName = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
        let userName: string = req.query.name as string
        const result = await connection.raw(`
           SELECT * FROM Actor
           WHERE name = "${userName}"  
       `)
 
       res.send(result[0])
       
    } catch (error) {
       console.log("deu ruim by name")
       res.status(500).send("deu ruim by name")
    }
 }
 
 export default getActorByName;
 ```

### Resposta letra c:

```
import connection from "../connection"
import { Request, Response } from 'express'

const getActorByName = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
        let aliasCount: string = ""
        if(req.query.gender === "male"){
            aliasCount = "Count male"
        } else if(req.query.gender === "female"){
            aliasCount = "Count female"
        } else {
            res.status(422).send('O parâmetro informado não é válido.')
        }

        let userGender: string = req.query.gender as string
        const result = await connection.raw(`
           SELECT COUNT(*) AS "${aliasCount}" FROM Actor
           WHERE gender = "${userGender}"  
       `)
 
       res.status(200).send(result[0])
 
    } catch (error) {
       console.log("deu ruim by name")
       res.status(500).send("deu ruim by name")
    }
 }
 
 export default getActorByName;
 ```

## Segundo exercício:

### Resposta letra a:

```
const updateActor = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        type actor = {
            id: number,
            salary: number,
        }

        const body: actor = {
            id: req.body.id,
            salary: req.body.salary,
        }

        if(!body.salary || !body.salary){
            res.status(422).send('Invalid Parameters.')
        } else {
            await connection("Actor")
            .update({
                salary: body.salary,
            })
            .where({id: body.id});
    
            res.status(201).end('Actor updated successfully')
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
};
export default updateActor;
```

### Resposta letra b:

```
const deleteActor = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        if(!req.params.id){
            res.status(422).send('Invalid Parameters.')
        } else {
            await connection("Actor")
            .delete()
            .where({id: req.params.id});
    
            res.status(201).send('Actor deleted successfully')
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
};
export default deleteActor;
```

### Resposta letra c:

```
const getAcountGender = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        let gender = ""

        if(req.query.gender === "male"){
            gender = "male"
        } else if(req.query.gender === "female"){
            gender = "female"
        } else {
            throw new Error('Invalid parameteres.')
        }

        const result = await connection("Actor")
        .avg("salary as average") 
            .where({
                gender: req.query.gender
            })
            
        res.status(200).send({average: `USD ${result[0].average.toFixed(2)}`})

    } catch (error) {
        console.log(error.message)
        res.status(500).send({error: error.message})
    }
}

export default getAcountGender;
```

## Terceiro exercício:

### Resposta letra a:

`app.get('/actor/:id', getActorById)`
```
const getActorById = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
 
        const result = await connection.raw(`
           SELECT * FROM Actor
           WHERE id = ${req.params.id}  
       `)
 
       res.send(result[0])
 
    // dessa forma também é possível. Técnica de query builder.
       /* const actor = await connection("Actor")
       .where({
        id: req.params.id
     }) */
 
       /* res.send(actor) */
 
    } catch (error) {
       console.log(error.message)
       res.status(500).send("Internal server error")
    }
 }
 
 export default getActorById;
 ```

### Resposta letra b:

`app.get('/actor/search-gender', getCountActorByGender)`
```
const getActorByName = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
        let aliasCount: string = ""
        if(req.query.gender === "male"){
            aliasCount = "Count male"
        } else if(req.query.gender === "female"){
            aliasCount = "Count female"
        } else {
            res.status(422).send('O parâmetro informado não é válido.')
        }

        let userGender: string = req.query.gender as string
        const result = await connection.raw(`
           SELECT COUNT(*) AS "${aliasCount}" FROM Actor
           WHERE gender = "${userGender}"  
       `)
 
       res.status(200).send(result[0])
 
    } catch (error) {
       console.log("deu ruim by name")
       res.status(500).send("deu ruim by name")
    }
 }
 
 export default getActorByName;
 ```

## Quarto exercício:

### Resposta letra a:

`app.post('/actor/update', updateActor)`
```
const updateActor = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        type actor = {
            id: number,
            salary: number,
        }

        const body: actor = {
            id: req.body.id,
            salary: req.body.salary,
        }

        if(!body.salary || !body.salary){
            res.status(422).send('Invalid Parameters.')
        } else {
            await connection("Actor")
            .update({
                salary: body.salary,
            })
            .where({id: body.id});
    
            res.status(201).end('Actor updated successfully')
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
};
export default updateActor;
```

### Resposta letra b:

`app.delete('/actor/remove/:id', deleteActor)`
```
const deleteActor = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        if(!req.params.id){
            res.status(422).send('Invalid Parameters.')
        } else {
            await connection("Actor")
            .delete()
            .where({id: req.params.id});
    
            res.status(201).send('Actor deleted successfully')
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
};
export default deleteActor;
```

## Quinto exercício:

`app.post('/movie/create', createMovie)`
```
const createMovie = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        type movie = {
            nome: string,
            sinopse: string,
            lancamento: string,
            avaliacao: number,
            cartaz: Date
        }

        const body: movie = {
            nome: req.body.nome,
            sinopse: req.body.sinopse,
            lancamento: req.body.lancamento,
            avaliacao: req.body.avaliacao,
            cartaz: req.body.cartaz
        }

        if(!body.nome || !body.sinopse || !body.lancamento || !body.avaliacao || !body.cartaz){
            res.status(422).send('Invalid Parameters.')
        } else {
            await connection.insert({
                nome: body.nome,
                sinopse: body.sinopse,
                lancamento: body.lancamento,
                avaliacao: body.avaliacao,
                playing_limit_date: body.cartaz
            })
            .into("Movies");
    
            res.status(201).send({message: 'Actor created successfully', body})
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
};
export default createMovie;
```

## Sexto exercício:

`app.get('/movies/all', getAllMovies)`
```
const getAllMovies = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const movies = await connection("Movies")
            .limit(15)

        res.send(movies)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
}

export default getAllMovies;
```

## Sétimo exercício:

`app.get('/movie/search', getMovieByName)`
```
const getMovieByName = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
        let nameMovie: string = req.query.name as string
        const result = await connection.raw(`
           SELECT * FROM Movies
           WHERE nome LIKE "%${nameMovie}%" OR sinopse LIKE "%${nameMovie}%" 
       `)
 
       res.send(result[0])
 
    } catch (error) {
       console.log("deu ruim by name")
       res.status(500).send("deu ruim by name")
    }
 }
 
 export default getMovieByName;
 ```

