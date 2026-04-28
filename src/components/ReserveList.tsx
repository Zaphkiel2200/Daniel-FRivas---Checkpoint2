import { useSelector, useDispatch } from "react-redux";
import { deleteReserve } from "../store/slices/reserveSlice";

function ReserveList() {
  const tasks = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((reserve) => (
        <li key={reserve.id}>
          {reserve.text}
          <button onClick={() => dispatch(deleteReserve(reserve.id))}>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReserveList;