import React from 'react';
import './Descriere.css';

function Descriere(props){
    return(
        <div className="info">
            <div><b>Parking Code:</b> {props.data.parkingCode}</div>
            <div><b>Adresa:</b> {props.data.adresa}</div>
            <div><b>Data & Timp:</b> {props.data.dateTime}</div>
            <div><b>Locuri Total:</b> {props.data.locuriTotal}</div>
        </div>
    )
}

export default Descriere;