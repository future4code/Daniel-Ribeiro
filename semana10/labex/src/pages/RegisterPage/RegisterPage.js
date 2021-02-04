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
  console.log('trip id', idTrip)

  const onChangeTrips = (e) =>{
    setIdTrip(e.target.value)
  }

  useEffect(() =>{
    getTrips()
  }, [])

  const getTrips = () =>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ribeiro-epps/trips')
    .then((res) => {
      console.log(res.data.trips)
      setTrips(res.data.trips)
    })
  }

  const application = (event) =>{
    event.preventDefault()
    clearFields()
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ribeiro-epps/trips/${idTrip}/apply`, form)
    .then((res) =>{
      console.log(res)
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
            />
          </ContainerItemForm>

          <ContainerItemForm>
            <input 
              name='country'
              value={form.country}
              onChange={onChange}
              id='pais'
              placeholder='Nacionalidade'
              type='text'
            />
          </ContainerItemForm>

          <ContainerItemForm>
            <input 
              name='profession'
              value={form.profession}
              onChange={onChange}
              id='profissao'
              placeholder='Profissão'
            />
          </ContainerItemForm>
          
          <ContainerItemForm>
            <input 
              name='applicationText'
              value={form.applicationText}
              onChange={onChange}
              id='profissao'
              placeholder='motivação'
            />
            {/* <textarea
              name='applicationTest'
              value={form.applicationText}
              onChange={onChange}
              id='motivacao' 
              placeholder='Fale um poco sobre sua motivação.'
              rows='7' cols='36'
              type='text'
            /> */}
          </ContainerItemForm>

          <ContainerItemForm>
            <select 
              name='trips'
              /* value={form.trips} */
              onChange={onChangeTrips}
              value={idTrip}
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
