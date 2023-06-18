import React from 'react'
import getNeighborhoodData from '../api/neighborhoodAPI'


const NeighborhoodApp = () => {

    const [neighborhoods, setNeighborhoods] = React.useState([])

    React.useEffect(() => {

        const newData = getNeighborhoodData({limit: 200, minSize: 200000, minTot: 5}) //, sortBy: "total"
        if (newData && newData.length) {
          console.log("newData is now ", newData.length);
        }
        setNeighborhoods(newData);
      }, []); 


}

export default NeighborhoodApp;