import React from 'react';
import './App.css';
import Filter from './components/Filter';
import PlanetsProvider from './components/PlanetsProvider';
import Table from './components/Table';

function App() {
  return (
    <PlanetsProvider>
      <Filter />
      <Table />
    </PlanetsProvider>

  );
}

export default App;
