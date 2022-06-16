import React, { useContext } from 'react';
import PlanetsContext from './PlanetsContext';

export default function Filter() {
  const { handleInputChange } = useContext(PlanetsContext);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search"
          onChange={ handleInputChange }
          data-testid="name-filter"
        />
      </form>
    </div>
  );
}
