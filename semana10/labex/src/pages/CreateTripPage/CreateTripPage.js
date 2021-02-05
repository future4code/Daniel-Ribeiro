import React, { useState } from "react";
import { useProtectedPage } from "../../Hooks/useProtectPage";
import { 
  ContainerForm,
  ContainerApplicationForm,
  Form,
  ContainerItemForm,
} from '../RegisterPage/style'
import useForm from "../../Hooks/useForm";
import axios from "axios";

const CreateTripPage = () => {
  useProtectedPage()

  const [form, onChange, clearFields] = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: '',
  })
  
  const planetList = [
    'Mércurio', 'Vênus', 'Saturno', 'Marte',  'Júpter', 'Urano', 'Netuno', 'Terra'
  ]

  const createTrip = (event) =>{
    event.preventDefault()
    clearFields()
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ribeiro-epps/trips`, form, {
      headers:{
        auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkJwRXdmb3pSSEJKbmcyb2ZKZ3JzIiwiZW1haWwiOiJhZG1AZ21haWwuY29tIiwiaWF0IjoxNjEyNTQzODk2fQ.6YtKlR_J-youh3OZ0ZsQ7HnxmhuLuG2af1Y3hb4m0Tc'
      }
    })
    .then((res) =>{
      alert('Viagem criada com sucesso')
    })
    .catch((error) =>{
      alert('Não foi possível criar viagem. Tente novamente.')
    })
  }
  
  return (
    <ContainerApplicationForm>
    <h1>Create page</h1>
    <ContainerForm>
      <h2>Inscreva-se</h2>
      <Form onSubmit={createTrip}>
        <ContainerItemForm>
          <input 
            name='name'
            value={form.name}
            onChange={onChange}
            id='nome'
            placeholder='Nome da viagem'
            type='text'
          />
        </ContainerItemForm>

        <ContainerItemForm>
          <input 
            name='date'
            value={form.date}
            onChange={onChange}
            id='date'
            placeholder='date'
            type='date'
          />
        </ContainerItemForm>

        <ContainerItemForm>
          <input 
            name='description'
            value={form.description}
            onChange={onChange}
            id='description'
            placeholder='descrição da vaigem'
            type='text'
          />
        </ContainerItemForm>
        
        <ContainerItemForm>
          <input 
            name='durationInDays'
            value={form.durationInDays}
            onChange={onChange}
            id='durationInDays'
            placeholder='duração'
            type='number'
          />
        </ContainerItemForm>

        <ContainerItemForm>
          <select
            name='planet'
            value={form.planet}
            onChange={onChange}
          >
            {planetList.map((planet) =>{
              return(
                <option value={planet}>{planet}</option>
              )
            })}
          </select>
        </ContainerItemForm>

        <button type='submit'>Inscrever</button>
      </Form>
    </ContainerForm>
  </ContainerApplicationForm>
  )
};

export default CreateTripPage;
