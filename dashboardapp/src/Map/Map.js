import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import './Map.css';

const Map = () => {
  const mapRef = useRef();

  useEffect(
    () => {
      loadModules(['esri/Map', 'esri/views/MapView',"esri/layers/StreamLayer"], { css: true })
      .then(([ArcGISMap, MapView,StreamLayer]) => {
        const labelClass = {
          symbol:{
            type: "text",
            color: "black",
            font: {
              size: 10,
              weight: "bold"
            },
            haloColor: [255,255,255,255],
            haloSize: 2
          },
          labelPlacement: "above-center",
          labelExpressionInfo: {
            expression: "$feature.parkingCode + TextFormatting.NewLine + 'Ocupate: ' + $feature.locuriActuale + TextFormatting.NewLine + 'Vacante: ' + $feature.locuriVacante"
          }
        };

        const renderer = {
          type: "class-breaks",
          field: "procentOcupare",
          classBreakInfos:[
            {
              minValue: 0.0,
              maxValue: 20.0,
              symbol: {
                type: "simple-marker",
                style: "square",
                color: "#0B6623"
              }
            },
            {
              minValue: 20.0,
              maxValue: 40.0,
              symbol: {
                type: "simple-marker",
                style: "square",
                color: "#3BB143"
              }
            },
            {
              minValue: 40.0,
              maxValue: 60.0,
              symbol: {
                type: "simple-marker",
                style: "square",
                color: '#FFF200'
              }
            },
            {
              minValue: 60.0,
              maxValue: 80.0,
              symbol: {
                type: "simple-marker",
                style: "square",
                color: '#ED9121'
              }
            },
            {
              minValue: 80.0,
              maxValue: 100.0,
              symbol: {
                type: "simple-marker",
                style: "square",
                color: '#C62121'
              }
            },
          ]
        };

        const streamLayer = new StreamLayer({
          url: "https://localhost:6443/arcgis/rest/services/ParkingService/StreamServer",
          purgeOptions: {
            displayCount: 10000
          },
          labelingInfo: [labelClass],
          labelsVisible: true,
          renderer: renderer
        });

        const map = new ArcGISMap({
          basemap: 'topo-vector',
          layers: [streamLayer]
        });

        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: [26.096306,44.439663],
          zoom: 13
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