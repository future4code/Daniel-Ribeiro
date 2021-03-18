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

// terceito exercício:
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

// outra possibilidade, mas esta está sem as verificações.

/* app.get("/countries/search", (req: Request, res: Response) =>{
    const name: string = req.query.name as string;
    let countriesFiltered: country[] = countries

    if(name){
        countriesFiltered = countriesFiltered.filter((ct) =>{
            return ct.name.includes(name as string)
        })
    }

    if(req.query.capital){
        countriesFiltered = countriesFiltered.filter((ct) =>{
            return ct.capital.includes(req.query.capital as string)
        })
    }

    if(req.query.continent){
        countriesFiltered = countriesFiltered.filter((ct) =>{
            return ct.continent.includes(req.query.continent as string)
        })
    }

    res.status(200).send(countriesFiltered)
}) */

//segundo exercício:
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

//quarto exercício:
app.put("/countries/edit/:id", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
       const countryIndex: number = countries.findIndex(
          (country) => country.id === Number(req.params.id)
       )
 
       if (countryIndex === -1) {
          errorCode = 404
          throw new Error()
       }
 
       if(!req.body.name && !req.body.capital){
          console.log(req.query.name, req.body.capital);
          throw new Error("Invalid Parameters");
       }
 
       if(req.body.name){
          countries[countryIndex].name = req.body.name;
       }
       
       if(req.body.capital){
          countries[countryIndex].capital = req.body.capital;
       }
 
       res.status(200).send('Country successfully updated')

    } catch (error) {
       console.log(error)
       res.status(errorCode).send(error.message)
    }
 })

app.listen(3003, () => {
    console.log('Funfou! O servidor está rodando...')
})