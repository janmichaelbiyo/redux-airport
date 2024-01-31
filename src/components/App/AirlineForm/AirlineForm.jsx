import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AirlineForm() {
  const [inputAirline, setInputAirline] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'AIRLINE_ADD',
      payload: [inputAirline],
    });
    setInputAirline('');
  };

  const changeAirline = (event) => {
    setInputAirline(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Airlines:
        <input id="airline" onChange={changeAirline} value={inputAirline} />
      </label>
      <button type="submit">Add Up</button>
    </form>
  );
}

export default AirlineForm;
