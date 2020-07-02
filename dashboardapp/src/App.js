import React, {Component} from 'react';
import './App.css';
import AppNavbar from './Navbar/Navbar';
import Widget from './Widget/Widget';
import socket from './Connection/SocketConnection';

class App extends Component {
  constructor(){
    super();
    this.state = {
      parkingData : {}
    }
  }

  componentDidMount(){
    socket.on('data',(data)=>{
      const currentState = ({...this.state.parkingData});
      currentState[data.parkingCode] = data
      this.setState({
        parkingData: currentState
      })
    })
  }

  render(){
    let widgets = [];
    const data = this.state.parkingData;
    Object.entries(data).forEach(([key,value])=>{
      widgets.push(<Widget key={key} data={value}/>)
    })
    return (
      <div className="App">
        <AppNavbar/>
        {widgets}
      </div>
    );

  }
  
}

export default App;
