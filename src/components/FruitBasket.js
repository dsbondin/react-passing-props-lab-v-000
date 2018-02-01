import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => (
  <div className="fruit-basket">
    <Filter filters={props.filters} handleChange={props.handleFilterChange} />
    <FilteredFruitList
      filter={props.currentFilter}
      fruit={props.fruit}
    />
  </div>
)

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null,
  handleFilterChange: null
}

export default FruitBasket;
