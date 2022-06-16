import React, { useContext } from 'react';
import PlanetsContext from './PlanetsContext';

export default function Filter() {
  const { handleInputChange,
    handleButton,
    column,
    comparison,
    value,
    setColumn,
    setComparison,
    setValue,
    filterByNumericValue,
  } = useContext(PlanetsContext);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search"
          onChange={ handleInputChange }
          data-testid="name-filter"
        />
        Coluna
        <select
          data-testid="column-filter"
          onChange={ ({ target }) => setColumn(target.value) }
          value={ column }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        Operador
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => setComparison(target.value) }
          value={ comparison }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          onChange={ ({ target }) => setValue(target.value) }
          value={ value }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleButton }
        >
          Filtrar
        </button>
      </form>
      {filterByNumericValue.map((filter) => (
        <p key={ filter.column }>
          {filter.column}
          {' '}

          {filter.comparison}
          {' '}

          {filter.value}
        </p>
      ))}
    </div>
  );
}
