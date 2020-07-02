import React from 'react';

function CrestereProcentuala(props){
    if (props.data>0){
        return(
            <div>
                <b>Indicator Crestere Ocupare: </b><b style={{color: "green"}}>+{props.data}%</b>
            </div>
        ) 
    } else if (props.data<0){
        return(
            <div>
                <b>Indicator Crestere Ocupare: </b><b style={{color: "#C62121"}}>{props.data}%</b>
            </div>
        )
    } else {
        return(
            <div>
                <b>Indicator Crestere Ocupare: {props.data}%</b>
            </div>
        )
    }
}

export default CrestereProcentuala;