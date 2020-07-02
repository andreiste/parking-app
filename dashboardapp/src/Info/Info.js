import React from 'react';
import './Info.css';
import Descriere from '../Descriere/Descriere';

function Info(props){
    return(
        <div className="info-tot">
            <h4>Informatii Parcare</h4>
            <Descriere data = {props.infoData.data}/>
            <div className="widget-text"><b>Locuri Ocupate:</b> {props.infoData.locuriActuale}</div>
            <div className="widget-text"><b>Locuri Vacante:</b> {props.infoData.locuriVacante}</div>
            <div className="widget-text"><b>Locuri Ocupate Initial:</b> {props.infoData.locuriOcupateInitial}</div>
            <div className="widget-text"><b>Noi Locuri Ocupate:</b> {props.infoData.rataOcupare}</div>
            <div className="widget-text"><b>Noi Locuri Vacante:</b> {props.infoData.rataEliberare}</div>
        </div>
    )
}

export default Info;