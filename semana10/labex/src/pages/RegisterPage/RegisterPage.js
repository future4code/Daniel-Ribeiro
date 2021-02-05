import axios from "axios";
import React, { useEffect, useState } from "react";
import useForm from "../../Hooks/useForm";
import { 
  ContainerForm,
  ContainerApplicationForm,
  Form,
  ContainerItemForm,
} from '../RegisterPage/style'

const RegisterPage = () => {

  const [form, onChange, clearFields] = useForm({
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: '',
  })

  const [trips, setTrips] = useState()
  const [idTrip, setIdTrip] = useState()
  const [countryList, setCountryList] = useState()
  /* console.log('country', form.country) */

  const onChangeTrips = (e) =>{
    setIdTrip(e.target.value)
  }

  useEffect(() =>{
    getTrips()
    getCountry()
  }, [])

  const getTrips = () =>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ribeiro-epps/trips')
    .then((res) => {
      setTrips(res.data.trips)
    })
    .catch((error) =>{
      alert('Não foi possível pegar as viagens.')
    })
  }

  const getCountry = () =>{
    axios.get('https://restcountries.eu/rest/v2/all')
    .then((res) =>{
      setCountryList(res.data)
    })
    .catch((error) =>{
      alert('Não funfou')
    })
  }

  const application = (event) =>{
    event.preventDefault()
    clearFields()
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ribeiro-epps/trips/${idTrip}/apply`, form)
    .then((res) =>{
      alert('Inscrição realizada com sucesso')
    })
    .catch((error) =>{
      alert('Não foi possível criar inscrição')
    })
  }

  return (
    <ContainerApplicationForm>
      <h1>Register page</h1>
      <ContainerForm>
        <h2>Inscreva-se</h2>
        <Form onSubmit={application}>
          <ContainerItemForm>
            <input 
              name='name'
              value={form.name}
              onChange={onChange}
              id='nome'
              placeholder='Nome'
              type='text'
              required
            />
          </ContainerItemForm>

          <ContainerItemForm>
            <input 
              name='age'
              value={form.age}
              onChange={onChange}
              id='idade'
              placeholder='Idade'
              type='number'
              min={'18'}
              required
            />
          </ContainerItemForm>

          <ContainerItemForm>
            <input 
              name='profession'
              value={form.profession}
              onChange={onChange}
              id='profissao'
              placeholder='Profissão'
              required
            />
          </ContainerItemForm>
          
          <ContainerItemForm>
            <input 
              name='applicationText'
              value={form.applicationText}
              onChange={onChange}
              id='profissao'
              placeholder='motivação'
              required
            />
          </ContainerItemForm>

          <ContainerItemForm>
            <select
              name='country'
              value={form.country}
              onChange={onChange}
              required
            >
              <option value={''} selected disabled>País</option>
              {countryList && <>{countryList.map((country) =>{
                return(
                  <option value={country.name}>{country.name}</option>
                )
              })}</>}
            </select>
          </ContainerItemForm>

          <ContainerItemForm>
            <select 
              name='trips'
              onChange={onChangeTrips}
              value={idTrip}
              required
            >
              <option selected disabled>Viagens</option>
              {trips && <>{trips.map((trip) =>{
                return(
                  <option value={trip.id}>{trip.name}</option>
                )
              })}</>}
            </select>
          </ContainerItemForm>

          <button type='submit'>Inscrever</button>
        </Form>
      </ContainerForm>
    </ContainerApplicationForm>

  )
};

export default RegisterPage;
