import React, { useState } from 'react';
import AirlineTable from './AirlineTable/AirlineTable';
import AirlineForm from './AirlineForm/AirlineForm';

function App() {
  return (
    <div>
      <h1>Redux Airport</h1>
      {/* <input placeholder="Airline Name" />
      <button>Add Airline</button> */}
      <AirlineForm />

      <table>{/* Airlines should be listed here */}</table>
      <AirlineTable />
    </div>
  );
}

export default App;
