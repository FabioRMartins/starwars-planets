import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterByNumericValue, setFilterByNumericValue] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch(
        'https://swapi-trybe.herokuapp.com/api/planets/',
      );
      const result = await response.json();
      setData(result.results);
      setFilteredData(result.results);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const filteredPlanets = data.filter(
      (planet) => planet.name.toLowerCase().includes(nameFilter),
    );

    const resultFilters = filterByNumericValue.reduce(
      (accumulator, filter) => accumulator.filter((planet) => {
        switch (filter.comparison) {
        case 'maior que':
          return planet[filter.column] > Number(filter.value);
        case 'menor que':
          return planet[filter.column] < Number(filter.value);
        case 'igual a':
          return planet[filter.column] === (filter.value);
        default:
          return null;
        }
      }), filteredPlanets,
    );

    setFilteredData(resultFilters);
  }, [data, nameFilter, filterByNumericValue]);

  const handleInputChange = ({ target }) => {
    setNameFilter(target.value.toLowerCase());
  };

  const handleButton = () => {
    const filterByNumericValues = {
      column,
      comparison,
      value,
    };
    setFilterByNumericValue([...filterByNumericValue, filterByNumericValues]);
  };

  return (
    <PlanetsContext.Provider
      value={ { data,
        filteredData,
        handleInputChange,
        handleButton,
        column,
        comparison,
        value,
        setColumn,
        setComparison,
        setValue,
        filterByNumericValue } }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PlanetsProvider;
