import React from 'react'
import './CardPequeno.css'

export function CardPequeno(props) {
    return (
        <div className="smallCard-container">
            <img src={ props.imagem } />
            <div className="box-email">
                <p>{ props.texto }</p>
                <p>{ props.email }</p>
            </div>
        </div>
    )
}