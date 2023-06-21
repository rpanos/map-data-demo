import React from 'react'
import { Polygon } from 'react-leaflet';

const LeafletPolygon = ({nieghborhoodData, handleNeighborhoodClick, polyOptions}) => {

    return (<Polygon
        positions={nieghborhoodData['geometry']['coordinates'][0]}
        pathOptions={polyOptions}
        eventHandlers={{
          click: (e) => handleNeighborhoodClick(e, nieghborhoodData["id"], nieghborhoodData["properties"]["name"], nieghborhoodData["chart_data"])
        }}
      />)
}


export default React.memo(LeafletPolygon);