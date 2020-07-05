import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import './Map.css';

const Map = () => {
  const mapRef = useRef();

  useEffect(
    () => {
      loadModules(['esri/Map', 'esri/views/MapView'], { css: true })
      .then(([ArcGISMap, MapView]) => {
        const map = new ArcGISMap({
          basemap: 'topo-vector'
        });

        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: [26.096306,44.439663],
          zoom: 15
        });

        return () => {
          if (view) {
            view.container = null;
          }
        };
      });
    }
  );
  return(
    <div>
      <div className="webmap" ref={mapRef} />
    </div>
  )  
};

export default Map;