import React from 'react'
import {
    ContainerItem,
    Item,
    ContainerBtn,
    BoxListTrip,
    Btn,
} from './style'

const ComponentListTrips = (props) => {
    return (
        <BoxListTrip>
            {props.listTrips.map((trip) => {
                return (
                    <ContainerItem>
                        <Item>
                            <p><strong>Viagem:</strong> {trip.name}</p>
                        </Item>
                        <Item>
                            <p><strong>Destino:</strong> {trip.planet}</p>
                        </Item>
                        <ContainerBtn>
                            <Btn onClick={ () =>  props.onclickGetTripDetails(trip.id)}>Ver detalhes</Btn>
                            <Btn onClick={() => props.delTrips(trip.id)}>Deletar viagem</Btn>
                        </ContainerBtn>
                    </ContainerItem>
                )
            })}
        </BoxListTrip>
    )
}
export default ComponentListTrips;