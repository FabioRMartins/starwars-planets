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
    handleClickDelete,
    filterOptions,
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
          {
            Object.keys(filterOptions).map((option, index) => (
              <option key={ index } value={ option }>{ option }</option>
            ))
          }
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
      {filterByNumericValue.map((filter, index) => (
        <p
          key={ `${filter.column}-${index}` }
          data-testid="filter"
        >
          {filter.column}
          {' '}

          {filter.comparison}
          {' '}

          {filter.value}
          {' '}

          <button
            type="button"
            onClick={ () => handleClickDelete(index) }
          >
            Remover
          </button>
        </p>
      ))}
    </div>
  );
}
