import React from 'react'
import Form from 'react-bootstrap/Form';

import '../App.css'; // TEMP!



function MapFilter({ minSize, handleMinSize, minTot, handleMinTot }) {

  return (
    <div className="filterContainter">
      {/* <label>Limit: </label>
          <input type="text" value={limit}></input> */}
      <div className='filterField'>
        <label>Minimum Neighborhood Size: </label>
        <Form.Select aria-label="Minimum Neighborhood Size" value={minSize} onChange={handleMinSize}>
          <option value="0">Open this select menu</option>
          <option value="400000">Small</option>
          <option value="800000">Medium</option>
          <option value="1200000">Large</option>
          <option value="1600000">Mega Large</option>
        </Form.Select>
      </div>
      <div className='filterField'>
        <label>Minimum Total Accidents: </label>
        <Form.Select aria-label="Minimum Total Accidents" value={minTot} onChange={handleMinTot}>
          <option value="0">Open this select menu</option>
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