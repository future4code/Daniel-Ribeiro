import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../../Hooks/useProtectPage";
import axios from 'axios'
import ComponentDetails from "../../Components/ComponentDetails/ComponentDetails";
import ComponentListTrips from "../../Components/Navegation/ComponentListTrips/ComponentListTrips";

const ListTripsPage = () => {
  useProtectedPage()


  const [listTrips, setListTrips] = useState([])
  const [tripDetails, setTripDetails] = useState({})
  const [tripId, setTripId] = useState('')
  const [goToDetails, setGoToDetails] = useState(false)
  const token = localStorage.getItem('token')


  useEffect(() => {
    getTrips()
  }, [listTrips])

  const goTolistTrip = () => {
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

  const getTripDetails = (tripId) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ribeiro-epps/trip/${tripId}`, {
      headers: {
        auth: token
      }
    })
      .then((res) => {
        console.log(res)
        setTripDetails(res.data.trip)
        setTripId(tripId)
        setGoToDetails(true)
      })
      .catch((error) => {
        alert('Não foi possível pegar detalhes.')
      })
  }

  const delTrips = (tripId) =>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ribeiro-epps/trips/${tripId}`)
    .then((res) =>{
      alert('Viagem deletada')
    })
    .catch((erro) =>{
      alert('não foi possível deletar viagem.')
    })
  }

  

  return (
    <div>
      <div>

        {goToDetails ? 
        <>{tripDetails && <ComponentDetails
          tripDetails={tripDetails}
          goTolistTrip={goTolistTrip}
          getTripDetails={getTripDetails}
          tripId={tripId}
        />}</> :
        <>{listTrips && <ComponentListTrips
          listTrips={listTrips}
          onclickGetTripDetails={getTripDetails}
          delTrips={delTrips}
        />}</>}

      </div>
    </div>
  )
};

export default ListTripsPage;
