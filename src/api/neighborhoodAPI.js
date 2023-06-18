

import data from './json/annotatedData_geojson_flop2.json';
/*
    This function represents the request and response from a server that might exist if we were building
    the front and backends with more data.  For the purposes of this excercise, I am just trying to provide
    some basic filters using the data in the front end.
*/
const getNeighborhoodData = ({minTot, limit, offset, minSize, sortBy}) => {
    // copy so as to keep original in tack 
    let dataCopy = JSON.parse(JSON.stringify(data)); // ['features']

    if (minSize) {
        dataCopy = dataCopy.filter(neighborhood => neighborhood['properties']['shape_area'] > minSize);
    }
    if (minTot) {
        dataCopy = dataCopy.filter(neighborhood => neighborhood['properties']['total'] > minTot);
    }

    if (sortBy === 'total') {
        dataCopy = dataCopy.sort((neighborhoodA, neighborhoodB) => (neighborhoodA['properties']['total'] < neighborhoodB['properties']['total']) ? 1 : -1)
    } else {
        dataCopy = dataCopy.sort((neighborhoodA, neighborhoodB) => (neighborhoodA['properties']['shape_area'] < neighborhoodB['properties']['shape_area']) ? 1 : -1)
    } // todo: have a no sort?

    if (limit) {
        if (offset) {
            dataCopy = dataCopy.slice(offset, limit)
        }
        dataCopy = dataCopy.slice(0, limit)
    } 

    return dataCopy;
}
// console.log("TEST")
// console.log(getNeighborhoodData({limit: 200, minSize: 200000, minTot: 5}));


export default getNeighborhoodData;