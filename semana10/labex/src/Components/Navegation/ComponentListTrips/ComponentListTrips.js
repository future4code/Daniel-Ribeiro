import React from 'react'

const ComponentListTrips = (props) => {
    return (
        <div>
            {props.listTrips.map((trip) => {
                return (
                    <div>
                        <div>
                            <p>Nome: {trip.name}</p>
                        </div>
                        <div>
                            <p>Planeta: {trip.planet}</p>
                        </div>
                        {/* <div>
                            <p>Descrição: {trip.description}</p>
                        </div> */}
                        <div>
                            <button onClick={ () =>  props.onclickGetTripDetails(trip.id)}>Ver detalhes</button>
                            <button onClick={() => props.delTrips(trip.id)}>Deletar viagem</button>
                        </div>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}
export default ComponentListTrips;