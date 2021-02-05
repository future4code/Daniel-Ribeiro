import axios from 'axios'
import {useState} from 'react'

export const getTrips = (setData) =>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ribeiro-epps/trips')
    .then((res) => {
        setData(res.data.trips)
    })
    .catch((error) =>{
      alert('Não foi possÍvel pegar as viagens.')
    })
  }