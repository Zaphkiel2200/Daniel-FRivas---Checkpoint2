import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './store/store'; 
import { reservarEspacio } from './store/slices/reserveSlice';
import { EspacioCard } from './components/EspacioCard';

export default function App() {
  const dispatch = useDispatch();
  const espacios = useSelector((state: RootState) => state.reserve.espacios);

  return (
    <div>
      <h2>Espacios de Trabajo</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {espacios.map(esp => (
          <EspacioCard 
            key={esp.id} 
            espacio={esp} 
            onAction={(id) => dispatch(reservarEspacio(id))} 
            textoBoton="Reservar"
          />
        ))}
      </div>
    </div>
  );
};
