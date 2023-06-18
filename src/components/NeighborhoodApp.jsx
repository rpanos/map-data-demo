import React from 'react'
import { useJsApiLoader } from '@react-google-maps/api';

import getNeighborhoodData from '../api/neighborhoodAPI'
import LeafletMap from './LeafletMap'
import MapFilter from './MapFilter'
import NeighborhoodChart from './NeighborhoodChart'
import '../App.css'; // TEMP!

const NeighborhoodApp = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDxf4S4yOTXh7I9pHFX0af8x__83_rjovc"
    })

    const [neighborhoods, setNeighborhoods] = React.useState([])
    const [featuredNeighborhoods, setFeaturedNeighborhoods] = React.useState({})

    const [minTot, setMinTot] = React.useState(null)
    const [minSize, setMinSize] = React.useState(null)

    React.useEffect(() => {

        const newData = getNeighborhoodData({ limit: 200, minSize: minSize, minTot: minTot }) //, sortBy: "total"
        if (newData && newData.length) {
            console.log("newData is now ", newData.length);
        }
        setNeighborhoods(newData);
    }, [minSize, minTot]);

    const handleMinTot = (e) => {
        setMinTot(e.target.value)
    }
    const handleMinSize = (e) => {
        setMinSize(e.target.value)
    }

    const handleNeighborhoodClick = (e, id, name, chartData) => {
        if (!featuredNeighborhoods[id]) {
            const newFeaturedNeighborhoods = { ...featuredNeighborhoods }; // confirm!  Do deep copy?
            newFeaturedNeighborhoods[id] = { chartData, name };
            setFeaturedNeighborhoods(newFeaturedNeighborhoods)
        } else {
            const newFeaturedNeighborhoods = { ...featuredNeighborhoods };
            delete newFeaturedNeighborhoods[id];
            setFeaturedNeighborhoods(newFeaturedNeighborhoods)
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
            <LeafletMap
                neighborhoodsData={neighborhoods}
                handleNeighborhoodClick={handleNeighborhoodClick}
                featuredNeighborhoods={featuredNeighborhoods}
            />
            <NeighborhoodChart
                featuredNeighborhoods={featuredNeighborhoods}
                handleNeighborhoodClick={handleNeighborhoodClick}
            />
        </div>
    ) : <></>

}

export default NeighborhoodApp;