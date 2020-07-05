import React, { Component } from 'react';
import AppNavbar from '../Navbar/Navbar';
import Widget from '../Widget/Widget';
import './MainPage.css';
import io from 'socket.io-client';

class MainPage extends Component {
    constructor(){
        super();
        this.state = {
          parkingData : {}
        }
        this.socket = null
    }

    componentDidMount(){
        this.socket = io.connect('http://localhost:8080');
        this.socket.emit('clientAuth','uRhj6mv8NjHPqaUYtwergUjnm.');
        this.socket.on('data',(data)=>{
          const currentState = ({...this.state.parkingData});
          currentState[data.parkingCode] = data
          this.setState({
            parkingData: currentState
          })
        })
    }

    componentWillUnmount(){
        this.socket.disconnect(true);
    }
    
    render() {
        let widgets = [];
        const data = this.state.parkingData;
        Object.entries(data).forEach(([key,value])=>{
            widgets.push(<Widget key={key} data={value}/>)
        })
        return (
            <div className="MainPage">
                <AppNavbar/>
                {widgets}
            </div>
        );
    }
}

export default MainPage;