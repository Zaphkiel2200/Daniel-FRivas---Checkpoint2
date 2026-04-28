import { useSelector } from 'react-redux';
import { RootState } from '../store/store'; 

export const Resumen = () => {
  const { espacios, reservas } = useSelector((state: RootState) => state.reserve);

  const disponibles = espacios.filter(e => e.available).length;
  const totalIngresos = reservas.reduce((acc, curr) => acc + curr.pricePerHour, 0);

  return (
    <div style={{ padding: '20px', border: '2px solid #000', marginBottom: '20px' }}>
      <h2>Resumen de Gestión</h2>
      <p>Total de Espacios: {espacios.length}</p>
      <p>Disponibles: {disponibles}</p>
      <p>Reservas Realizadas: {reservas.length}</p>
      <p>Ingreso Total: ${totalIngresos}</p>
    </div>
  );
};