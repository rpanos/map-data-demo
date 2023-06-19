import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import '../App.css'; // temp: will move later

function MapFilter({ minSize, handleMinSize, minTot, handleMinTot, sortby, handleSortBy, limit, handleLimit, maxSize }) {

  return (
    <div className="MapFilter-filterContainter">
      <div  className="MapFilter-instructions">
        <h5>Instructions:</h5> Filter the neighborhoods and click on them to reveal data details.  You can remove them by clicking on the map or the name.
      </div>
      <div className="MapFilter-filterField">
        <label id="neighborhoodSizeLabel">Minimum Neighborhood Size:</label>
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
      <div className="MapFilter-filterField">
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
      <div className="MapFilter-filterField">
        <label id="sortByLabel">Sort by:</label>
        <Form.Select
          aria-labelledby="sortByLabel"
          data-testid="sort-by-select"
          value={sortby}
          onChange={handleSortBy}>
          <option data-testid="tot-accident-option" value="total">Total Accidents</option>
          <option data-testid="tot-accident-option" value="size">Neighborhood Size</option>
        </Form.Select>
      </div>
      <div className="MapFilter-filterField">
        <InputGroup className="mb-3">
          <InputGroup.Text>Number of neighborhoods limit:</InputGroup.Text>
          <Form.Control 
            aria-label="Limit (maximum number returned)" 
            value={limit}
            onChange={handleLimit}
            />
          <InputGroup.Text>(currently {maxSize} maximum)</InputGroup.Text>
        </InputGroup>
      </div>
    </div>
  )
}

export default MapFilter;