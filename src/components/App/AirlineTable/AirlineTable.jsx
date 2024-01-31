import { useSelector } from 'react-redux';

function AirlineTable() {
  const airlineList = useSelector((state) => state.airlineList);
  return <p>{airlineList}</p>;
}

export default AirlineTable;
