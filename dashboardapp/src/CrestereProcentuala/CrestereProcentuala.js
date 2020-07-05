import React from 'react';
import './CrestereProcentuala.css';

function CrestereProcentuala(props){
    if (props.crestereProcentuala>0){
        return(
            <div className="crestere">
                <b>Indicator Crestere Ocupare: </b>
                <b style={{color: "#0B6623"}}>+{props.crestereProcentuala}%</b>
            </div>
        ) 
    } else if (props.crestereProcentuala<0){
        return(
            <div className="crestere">
                <b>Indicator Crestere Ocupare: </b><b style={{color: "#C62121"}}>{props.crestereProcentuala}%</b>
            </div>
        )
    } else {
        return(
            <div className="crestere">
                <b>Indicator Crestere Ocupare: 0%</b>
            </div>
        )
    }
}

export default CrestereProcentuala;