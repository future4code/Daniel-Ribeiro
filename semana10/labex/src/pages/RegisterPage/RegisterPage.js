import axios from "axios";
import React, { useEffect, useState } from "react";
import useForm from "../../Hooks/useForm";
import {
  ContainerForm,
  ContainerApplicationForm,
  Form,
  ContainerItemForm,
  ContainerBtn,
  BtnApplication,
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

  const onChangeTrips = (e) => {
    setIdTrip(e.target.value)
  }

  useEffect(() => {
    getTrips()
    getCountry()
  }, [])

  const getTrips = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ribeiro-epps/trips')
      .then((res) => {
        setTrips(res.data.trips)
      })
      .catch((error) => {
        alert('Não foi possível pegar as viagens.')
      })
  }

  const getCountry = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((res) => {
        setCountryList(res.data)
      })
      .catch((error) => {
        alert('Não funfou')
      })
  }

  const application = (event) => {
    event.preventDefault()
    clearFields()
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ribeiro-epps/trips/${idTrip}/apply`, form)
      .then((res) => {
        alert('Inscrição realizada com sucesso')
      })
      .catch((error) => {
        alert('Não foi possível criar inscrição')
      })
  }

  return (
    <ContainerApplicationForm>
      <ContainerForm>
        <h2>Inscreva-se</h2>
        <Form onSubmit={application}>
          <ContainerItemForm>
            <label>Nome: </label>
            <input
              name='name'
              value={form.name}
              onChange={onChange}
              id='nome'
              placeholder='Nome'
              type='text'
              required
              pattern={"^.{3,}"}
              title={"O nome deve ter no mínimo 3 caracteres"}
            />
          </ContainerItemForm>

          <ContainerItemForm>
          <label>Idade: </label>
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
          <label>Profissão: </label>
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
          <label>Motivação: </label>
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
            <label>País: </label>
            <select
              name='country'
              value={form.country}
              onChange={onChange}
              required
            >
              <option value={''} selected disabled>País</option>
              {countryList && <>{countryList.map((country) => {
                return (
                  <option value={country.name}>{country.name}</option>
                )
              })}</>}
            </select>
          </ContainerItemForm>

          <ContainerItemForm>
            <label>Viagem: </label>
            <select
              name='trips'
              onChange={onChangeTrips}
              value={idTrip}
              required
            >
              <option selected disabled>Viagens</option>
              {trips && <>{trips.map((trip) => {
                return (
                  <option value={trip.id}>{trip.name}</option>
                )
              })}</>}
            </select>
          </ContainerItemForm>

          <ContainerBtn>
            <BtnApplication type='submit'>Enviar</BtnApplication>
          </ContainerBtn>
          
        </Form>
      </ContainerForm>
    </ContainerApplicationForm>

  )
};

export default RegisterPage;
