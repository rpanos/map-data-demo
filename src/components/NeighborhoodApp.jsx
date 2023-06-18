import React from 'react'
import { useJsApiLoader } from '@react-google-maps/api';

import getNeighborhoodData from '../api/neighborhoodAPI'
import LeafletMap from './LeafletMap'
import '../App.css'; // TEMP!

const NeighborhoodApp = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDxf4S4yOTXh7I9pHFX0af8x__83_rjovc"
    })

    const [neighborhoods, setNeighborhoods] = React.useState([])
    const [featuredNeighborhoods, setFeaturedNeighborhoodProperties] = React.useState({})

    React.useEffect(() => {

        const newData = getNeighborhoodData({limit: 200, minSize: 200000, minTot: 5}) //, sortBy: "total"
        if (newData && newData.length) {
          console.log("newData is now ", newData.length);
        }
        setNeighborhoods(newData);
      }, []); 

      const handleNeighborhoodClick = (e, id, name, chartData) => {
        if (!featuredNeighborhoods[id]) {
          const newFeaturedNeighborhoodProperties = {...featuredNeighborhoods}; // confirm!  Do deep copy?
          newFeaturedNeighborhoodProperties[id] = { chartData, name };
          setFeaturedNeighborhoodProperties(newFeaturedNeighborhoodProperties)
        } else {
          const newFeaturedNeighborhoodProperties = {...featuredNeighborhoods};
          delete newFeaturedNeighborhoodProperties[id];
          setFeaturedNeighborhoodProperties(newFeaturedNeighborhoodProperties)
        }
      }

      return isLoaded ? (
        <div className="appContainer">
        
          <div className="mapContainter">
            <LeafletMap
              neighborhoodsData={neighborhoods}
              handleNeighborhoodClick={handleNeighborhoodClick}
              featuredNeighborhoods={featuredNeighborhoods}
              >
            </LeafletMap>
          </div>
        </div>
    ) : <></>

}

export default NeighborhoodApp;