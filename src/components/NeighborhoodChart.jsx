
import React from 'react'
import { ResponsiveLine } from "@nivo/line";

import '../App.css'; // TEMP!





const line1Color = "blue";
const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
const getColoredAxis = color => {
    return {
        axis: {
            ticks: {
                line: {
                    stroke: color
                },
                text: { fill: color }
            },
            legend: {
                text: {
                    fill: color
                }
            }
        }
    };
};

//const NeighborhoodApp = () => {
const NeighborhoodChart = ({ featuredNeighborhoods, handleNeighborhoodClick }) => {

    let allChartData = [];
    const colorMap = {}
    const getColor = neighborhood => colorMap[neighborhood.id];

    // We transform the data structure sent in props to one that nivo expects and then reuses 
    // it when building the buttons.  Given more time, I might have made the format more of a 
    // compromise between the map and chart data formats such that this transform was simpler
    if (featuredNeighborhoods && Object.keys(featuredNeighborhoods).length > 0) {
        Object.keys(featuredNeighborhoods).forEach((featuredNieghborhoodId, index) => {
            colorMap[featuredNeighborhoods[featuredNieghborhoodId]['name']] = colorArray[index];
            allChartData.push({
                "id": featuredNeighborhoods[featuredNieghborhoodId]['name'],
                "neighborhoodId": featuredNieghborhoodId,
                "data": featuredNeighborhoods[featuredNieghborhoodId]['chartData']
            });
        });
    }

    return (
        <div className="chartContainter">

            {(featuredNeighborhoods && Object.keys(featuredNeighborhoods).length > 0)
                ? (
                    <ResponsiveLine
                        data={allChartData}
                        colors={getColor}
                        layers={["grid", "axes", "lines", "markers", "legends", 'slices']}
                        axisLeft={{
                            legend: "Accidents Per Year",
                            legendPosition: "middle",
                            legendOffset: -40
                        }}
                        theme={getColoredAxis(line1Color)}
                        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}

                        enableSlices="x"
                    >
                    </ResponsiveLine>
                ) : <></>}
            <div className="chartButtonContainter">
                {allChartData.length > 0 && allChartData[0].id && allChartData.map((neighborhood) => {
                    //  neighborhood['color']
                    return (
                        <button
                            onClick={(e) => handleNeighborhoodClick(e, neighborhood["neighborhoodId"], neighborhood["id"], neighborhood["data"])}
                            style={{ backgroundColor: getColor(neighborhood) }} 
                            >
                            {neighborhood['id']}
                        </button>
                    )
                })}
            </div>

        </div>
    )

}

export default NeighborhoodChart;