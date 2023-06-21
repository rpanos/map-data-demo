import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import LeafletPolygon from './LeafletPolygon';
import '../App.css'; // temp: will move later

const initialCenter = [
  38.908511,
  -77.005802
];
const zoomLevel = 12;

const LeafletMap = ({ neighborhoodsData, featuredNeighborhoods, handleNeighborhoodClick }) => {

  return (
    <div className="LeafletMap-mapContainter">
      <MapContainer
        center={initialCenter}
        zoom={zoomLevel}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {neighborhoodsData.length > 0 && neighborhoodsData.map((nieghborhoodData) => {
          const polyOptions = { color: 'purple', fillOpacity: 0.25 };
          if (featuredNeighborhoods[nieghborhoodData["id"]]) {
            polyOptions.color = 'red'; // IMPROVE?
            polyOptions.fillOpacity= 0.65 
          }
          return(<LeafletPolygon
            nieghborhoodData = {nieghborhoodData}
            handleNeighborhoodClick = {handleNeighborhoodClick}
            polyOptions = {polyOptions}
            />);
        })}
      </MapContainer>
    </div>
  )
}

export default LeafletMap;