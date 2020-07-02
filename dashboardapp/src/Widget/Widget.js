import React, {Component} from 'react';
import Info from '../Info/Info';
import GradOcupare from '../GradOcupare/GradOcupare';
import Descriere from '../Descriere/Descriere';
import './Widget.css';

class Widget extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        const {parkingCode, adresa, dateTime,locuriTotal,locuriOcupateInitial,rataOcupare,rataEliberare,locuriActuale,
        locuriVacante,procentOcupare,crestereProcentuala,isActive} = this.props.data;
        
        const data = {parkingCode,adresa,dateTime,locuriTotal}
        const ocupare = {procentOcupare,crestereProcentuala};
        const info = {data,locuriOcupateInitial,rataOcupare,rataEliberare,locuriActuale,locuriVacante};
        
        if (isActive){
            return(
                <div className="widget" style={{justifyContent: 'space-between' }}>
                    <GradOcupare ocupData = {ocupare}/>
                    <Info infoData = {info}/>
                </div>
            )
        } else {
            return (
                <div className="not-active" style={{display:'flex',
                justifyContent:'center',alignItems:'center'}}>
                    <div>
                        <h1 style={{color:'#C62121'}}>Deconectat</h1>
                        <Descriere data = {data}/>
                    </div>
                </div>
            )
        }
        
    }
}
export default Widget;

