import React, { useState, useEffect } from "react";
import axios from 'axios'
import {
  ContainerTrips,
  ContainerMainTrips,
  ContainerInfoTrip,
  ContainerItem
} from '../TripDetailsPage/Style'

const TripDetailsPage = () => {

  const [listTrips, setListTrips] = useState([])

  useEffect(() => {
    getListTrips()
  }, [])

  const getListTrips = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ribeiro-epps/trips')
      .then((res) => {
        console.log(res.data.trips)
        setListTrips(res.data.trips)
      })
      .catch((error) => {
        alert('deu ruim')
      })
  }

  const listTripsRender = listTrips && listTrips.map((trip) => {
    return (
      <ContainerItem>
        <p><strong>Nome:</strong> {trip.name}</p>
        <p><strong>Descrição:</strong> {trip.description}</p>
        <p><strong>Planet:</strong> {trip.planet}</p>
      </ContainerItem>

    )
  })

  return (
    <ContainerTrips>
      <ContainerMainTrips>
        <h1>Viagens Disponíveis</h1>
        <ContainerInfoTrip>
          {listTripsRender}
        </ContainerInfoTrip>
      </ContainerMainTrips>
    </ContainerTrips>

  )
};

export default TripDetailsPage;
