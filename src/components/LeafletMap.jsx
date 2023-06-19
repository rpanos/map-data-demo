import React from 'react'
import { MapContainer, TileLayer, Polygon } from 'react-leaflet'
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
          const polyOptions = { color: 'purple' };
          if (featuredNeighborhoods[nieghborhoodData["id"]]) {
            polyOptions.color = 'red'; // IMPROVE?
          }

          return (<Polygon
            positions={nieghborhoodData['geometry']['coordinates'][0]}
            pathOptions={polyOptions}
            eventHandlers={{
              click: (e) => handleNeighborhoodClick(e, nieghborhoodData["id"], nieghborhoodData["properties"]["name"], nieghborhoodData["chart_data"])
            }}
            key={nieghborhoodData["id"]}
          />)
        })}
      </MapContainer>
    </div>
  )
}

export default LeafletMap;