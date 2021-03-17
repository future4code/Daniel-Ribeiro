import { countries, country } from './countries'
import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

//primeiro exercício
app.get('/countries/all', (req: Request, res: Response) => {
    const newCountries = countries.map(country => ({
        id: country.id,
        name: country.name
    }))

    res.status(200).send(newCountries)
})

app.get('/countries/search', (req: Request, res: Response) =>{
    const myCountries = countries
    let filteredCountries: country[] = []
    try {
        if (!req.query.name && !req.query.capital && !req.query.continent) {
            throw new Error("Invalid Parameters");
        }

        if (req.query.name || req.query.continent || req.query.capital) {
            filteredCountries = myCountries.filter(
               country => (country.name.toLowerCase()).includes((req.query.name as string || '').toLowerCase())
            )
            .filter(
                country => (country.capital.toLowerCase()).includes((req.query.capital as string || '').toLowerCase())
            )
            .filter(
                country => (country.continent.toLowerCase()).includes((req.query.continent as string || '').toLowerCase())
            )
         }
    } catch (error) {
        res.status(400).send(error.message);
    }
    res.status(200).send(filteredCountries)

})

//segundo exercício
app.get('/countries/:id', (req: Request, res: Response)=>{
    const result: country | undefined = countries.find(country => 
        country.id === Number(req.params.id)
        )

        if(result){
            res.status(200).send(result)
        } else{
            res.status(404).send('Not Found')
        }
})




app.listen(3003, () => {
    console.log('Funfou! O servidor está rodando...')
})