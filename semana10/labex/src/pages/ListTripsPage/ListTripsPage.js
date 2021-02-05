import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../../Hooks/useProtectPage";
import axios from 'axios'

const ListTripsPage = () => {
  useProtectedPage()


  const [listTrips, setListTrips] = useState()
  const [tripDetails, setTripDetails] = useState({}) 
  const [goToDetails, setGoToDetails] = useState(false)

  useEffect(() =>{
    getTrips()
  }, [])

  const goTolistTrip = () =>{
    setGoToDetails(false)
  }

  const getTrips = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ribeiro-epps/trips')
      .then((res) => {
        setListTrips(res.data.trips)
      })
      .catch((error) => {
        alert('Não foi possível pegar as viagens.')
      })
  }

  const getTripDetails = (tripId) =>{
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ribeiro-epps/trip/${tripId}`, {
      headers: {
        auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkJwRXdmb3pSSEJKbmcyb2ZKZ3JzIiwiZW1haWwiOiJhZG1AZ21haWwuY29tIiwiaWF0IjoxNjEyNTQzODk2fQ.6YtKlR_J-youh3OZ0ZsQ7HnxmhuLuG2af1Y3hb4m0Tc'
      }
    })
    .then((res) =>{
      alert('Sucesso')
      console.log(res)
      setTripDetails(res.data.trip)
      setGoToDetails(true)
    })
    .catch((error) =>{
      alert('Não foi possível pegar detalhes.')
    })
  } 

  const trispsRender = listTrips && <>{listTrips.map((trip) => {
    return (
      <div>
        <div>
          {trip.name}
        </div>
        <div>
          {trip.planet}
        </div>
        <div>
          {trip.description}
        </div>
        <div>
          <button onClick={() => getTripDetails(trip.id)}>Ver detalhes</button>
        </div>
        <hr></hr>
      </div>
    )
  })}</>

  return (
    <div>
      <h1>List trip page</h1>
      <div>
        {goToDetails ? 
        <>
          {tripDetails.name}
          <button onClick={goTolistTrip}>Voltar</button>
        </> : 
        <>
          {trispsRender}
        </>}
        
      </div>
    </div>
  )
};

export default ListTripsPage;
