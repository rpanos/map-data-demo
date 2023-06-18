import React from 'react'
import { useJsApiLoader } from '@react-google-maps/api';

import getNeighborhoodData from '../api/neighborhoodAPI'
import LeafletMap from './LeafletMap'
import MapFilter from './MapFilter'
import '../App.css'; // TEMP!

const NeighborhoodApp = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDxf4S4yOTXh7I9pHFX0af8x__83_rjovc"
    })

    const [neighborhoods, setNeighborhoods] = React.useState([])
    const [featuredNeighborhoods, setFeaturedNeighborhoodProperties] = React.useState({})

    const [minTot, setMinTot] = React.useState(null)
    const [minSize, setMinSize] = React.useState(null)

    React.useEffect(() => {

        const newData = getNeighborhoodData({limit: 200, minSize: minSize, minTot: minTot}) //, sortBy: "total"
        if (newData && newData.length) {
          console.log("newData is now ", newData.length);
        }
        setNeighborhoods(newData);
      }, [minSize, minTot]); 

      const handleMinTot=(e) => {
        setMinTot(e.target.value)
      }
      const handleMinSize=(e) => {
        setMinSize(e.target.value)
      }

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
            <MapFilter 
                minTot={minTot}
                handleMinTot={handleMinTot}
                minSize={minSize}
                handleMinSize={handleMinSize}
            />
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