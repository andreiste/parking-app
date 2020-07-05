import React, {Component} from 'react';
import CardActiv from '../CardActiv/CardActiv';
import CardInactiv from '../CardInactiv/CardInactiv';

class Widget extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        if (this.props.data.isActive){
            return(
                <CardActiv data={this.props.data}/>
            )
        } else {
            return (
                <CardInactiv data={this.props.data}/>
            )
        }
        
    }
}
export default Widget;

