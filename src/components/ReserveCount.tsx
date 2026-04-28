import { useSelector } from "react-redux";

function ReserveCounter() {
  const total = useSelector(
    (state) => state.reserve.list.length
  );

  return <h3>Total de reservas: {total}</h3>;
}

export default ReserveCounter;