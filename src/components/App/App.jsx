import React, { useState } from 'react';
import AirlineTable from './AirlineTable/AirlineTable';

function App() {
  return (
    <div>
      <h1>Redux Airport</h1>
      <input placeholder="Airline Name" />
      <button>Add Airline</button>
      <AirlineTable />
      <table>{/* Airlines should be listed here */}</table>
    </div>
  );
}

export default App;
