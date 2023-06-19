import React from 'react'
import { useJsApiLoader } from '@react-google-maps/api';

import getNeighborhoodData, {getNeighborhoodDataMax} from '../api/neighborhoodAPI'
import LeafletMap from './LeafletMap'
import MapFilter from './MapFilter'
import NeighborhoodChart from './NeighborhoodChart'
import '../App.css'; // temp: will move later

const NeighborhoodApp = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyDxf4S4yOTXh7I9pHFX0af8x__83_rjovc'
    })

    const [neighborhoods, setNeighborhoods] = React.useState([])
    const [featuredNeighborhoods, setFeaturedNeighborhoods] = React.useState({})

    const [minTot, setMinTot] = React.useState("0")
    const [minSize, setMinSize] = React.useState("0")
    const [limit, setLimit] = React.useState("200")
    const [sortBy, setSortBy] = React.useState("total")
    const [maxSize, setMaxSize] = React.useState("200")

    React.useEffect(() => {
        setNeighborhoods(getNeighborhoodData({ limit, minSize, minTot, sortBy }));
        // in reality, this does not change but it might in the case of a full app
        setMaxSize(getNeighborhoodDataMax());
    }, [minSize, minTot, sortBy, limit]);

    const handleMinTot = (e) => {
        setMinTot(e.target.value)
    }
    const handleMinSize = (e) => {
        setMinSize(e.target.value)
    }
    const handleSortBy = (e) => {
        setSortBy(e.target.value)
    }
    const handleLimit = (e) => {
        setLimit(e.target.value)
    }

    const handleNeighborhoodClick = (e, id, name, chartData) => {
        if (!featuredNeighborhoods[id]) {
            const newFeaturedNeighborhoods = { ...featuredNeighborhoods };
            newFeaturedNeighborhoods[id] = { chartData, name };
            setFeaturedNeighborhoods(newFeaturedNeighborhoods)
        } else {
            const newFeaturedNeighborhoods = { ...featuredNeighborhoods };
            delete newFeaturedNeighborhoods[id];
            setFeaturedNeighborhoods(newFeaturedNeighborhoods)
        }
    }

    return isLoaded ? (
        <div className="NeighborhoodApp-appContainer">
            <MapFilter
                minTot={minTot}
                handleMinTot={handleMinTot}
                minSize={minSize}
                handleMinSize={handleMinSize}
                sortby={sortBy}
                handleSortBy={handleSortBy}
                limit={limit}
                handleLimit={handleLimit}
                maxSize={maxSize}
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