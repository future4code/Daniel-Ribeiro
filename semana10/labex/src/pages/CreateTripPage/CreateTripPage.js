import React, { useState } from "react";
import { useProtectedPage } from "../../Hooks/useProtectPage";
import { 
  ContainerForm,
  ContainerApplicationForm,
  Form,
  ContainerItemForm,
  ContainerBtn,
  BtnApplication
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

  const token = localStorage.getItem('token')

  const createTrip = (event) =>{
    event.preventDefault()
    clearFields()
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ribeiro-epps/trips`, form, {
      headers:{
        auth: token
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
    <ContainerForm>
      <h2>Criar viagens</h2>
      <Form onSubmit={createTrip}>
        <ContainerItemForm>
          <input 
            name='name'
            value={form.name}
            onChange={onChange}
            id='nome'
            placeholder='Nome da viagem'
            type='text'
            pattern={"^.{3,}"}
            title={"O nome deve ter no mínimo 3 caracteres"}
            required
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
            min=''
            required
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
            required
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
            required
          />
        </ContainerItemForm>

        <ContainerItemForm>
          <select
            name='planet'
            value={form.planet}
            onChange={onChange}
            required
          >
            {planetList.map((planet) =>{
              return(
                <option value={planet}>{planet}</option>
              )
            })}
          </select>
        </ContainerItemForm>

        <ContainerBtn>
          <BtnApplication type='submit'>Criar</BtnApplication>
        </ContainerBtn>
       
      </Form>
    </ContainerForm>
  </ContainerApplicationForm>
  )
};

export default CreateTripPage;
