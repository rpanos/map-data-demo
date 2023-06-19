import React from 'react'
import Form from 'react-bootstrap/Form';

import '../App.css'; // TEMP!

function MapFilter({ minSize, handleMinSize, minTot, handleMinTot }) {

  return (
    <div className="MapFilter-filterContainter">
      <div  className='MapFilter-instructions'>
        Filter the neighborhoods and click on them to reveal data details.  You can remove them by clicking on the map or the name.
      </div>
      <div className='MapFilter-filterField'>
        <label id="neighborhoodSizeLabel">Minimum Neighborhood Sizes:</label>
        <Form.Select
          aria-labelledby="neighborhoodSizeLabel"
          data-testid="neighborhood-size-select"
          value={minSize}
          onChange={handleMinSize}>
          <option data-testid="neighborhood-size-option" value="0">No Filter</option>
          <option data-testid="neighborhood-size-option" value="400000">Small</option>
          <option data-testid="neighborhood-size-option" value="800000">Medium</option>
          <option data-testid="neighborhood-size-option" value="1200000">Large</option>
          <option data-testid="neighborhood-size-option" value="1600000">Mega Large</option>
        </Form.Select>
      </div>
      <div className='MapFilter-filterField'>
        <label id="totalAccidentLabel">Minimum Total Accidents:</label>
        <Form.Select
          aria-labelledby="totalAccidentLabel"
          data-testid="tot-accident-select"
          value={minTot}
          onChange={handleMinTot}>
          <option data-testid="tot-accident-option" value="0">No Filter</option>
          <option data-testid="tot-accident-option" value="5">5</option>
          <option data-testid="tot-accident-option" value="10">10</option>
          <option data-testid="tot-accident-option" value="15">15</option>
          <option data-testid="tot-accident-option" value="20">20</option>
          <option data-testid="tot-accident-option" value="25">25</option>
        </Form.Select>
      </div>
    </div>
  )
}

export default MapFilter;