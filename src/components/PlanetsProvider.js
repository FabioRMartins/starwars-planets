import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch(
        'https://swapi-trybe.herokuapp.com/api/planets/',
      );
      const result = await response.json();
      setData(result.results);
      setFilteredData(result.results);
      console.log(result);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const filteredPlanets = data.filter(
      (planet) => planet.name.toLowerCase().includes(nameFilter),
    );
    setFilteredData(filteredPlanets);
  }, [data, nameFilter]);

  const handleInputChange = ({ target }) => {
    setNameFilter(target.value.toLowerCase());
  };

  return (
    <PlanetsContext.Provider value={ { data, filteredData, handleInputChange } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PlanetsProvider;
