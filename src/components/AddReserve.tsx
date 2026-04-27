import { useState } from "react";
import { useDispatch } from "react-redux";
import { reserveSlice } from "../store/slices/reserveSlice";

function AddReserve() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch(reserveSlice(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nueva reserva"
      />
      <button>Agregar Reserva</button>
    </form>
  );
}

export default AddReserve;
