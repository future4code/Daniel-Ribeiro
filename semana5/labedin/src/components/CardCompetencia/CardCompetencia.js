import React from 'react';
import './CardCompetencia.css';
import { LiCompetencia } from './LiCompetencia';

export function CardCompetencia() {
    return (
        <div className="bigcard-container">
            <div className="box-ul">
                <ul>
                    <LiCompetencia item={"HTML"}/>
                    <LiCompetencia item={"CSS"}/>
                    <LiCompetencia item={"Javascript"}/>
                    <LiCompetencia item={"React"}/>
                </ul>
            </div>
        </div>
    )
}