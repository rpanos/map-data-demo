import React from 'react'
import Form from 'react-bootstrap/Form';

import '../App.css'; // TEMP!



function MapFilter({ minSize, handleMinSize, minTot, handleMinTot }) {

  return (
    <div className="filterContainter">
      {/* <label>Limit: </label>
          <input type="text" value={limit}></input> */}
      <div className='filterField'>
        <label id="neighborhoodSizeLabel">Minimum Neighborhood Size:</label>
        <Form.Select
          aria-labelledby="neighborhoodSizeLabel"
          value={minSize}
          onChange={handleMinSize}>
          <option value="0">No Filter</option>
          <option value="400000">Small</option>
          <option value="800000">Medium</option>
          <option value="1200000">Large</option>
          <option value="1600000">Mega Large</option>
        </Form.Select>
      </div>
      <div className='filterField'>
        <label id="totalAccidentLabel">Minimum Total Accidents:</label>
          <Form.Select
          aria-labelledby="totalAccidentLabel"
          value={minTot}
          onChange={handleMinTot}>
          <option value="0">No Filter</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </Form.Select>
      </div>
    </div>
  )
}

export default MapFilter;