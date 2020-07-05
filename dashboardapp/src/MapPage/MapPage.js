import React from 'react';
import AppNavbar from '../Navbar/Navbar';
import Map from '../Map/Map';

function MapPage(props){
    return(
        <div className="MapPage">
            <AppNavbar/>
            <Map/>
        </div>
        
    )
}

export default MapPage;