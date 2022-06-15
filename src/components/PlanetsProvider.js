import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch(
        'https://swapi-trybe.herokuapp.com/api/planets/',
      );
      const result = await response.json();
      setData(result.results);
      console.log(result);
    };
    fetchPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PlanetsProvider;
