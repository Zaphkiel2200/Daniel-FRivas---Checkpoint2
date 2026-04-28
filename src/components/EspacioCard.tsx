import React from 'react';

interface EspacioProps {
  espacio: any;
  onAction: (id: number) => void;
  textoBoton: string;
}

export const EspacioCard: React.FC<EspacioProps> = ({ espacio, onAction, textoBoton }) => {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      padding: '15px', 
      margin: '10px', 
      borderRadius: '8px',
      backgroundColor: espacio.available ? '#fff' : '#f0f0f0' 
    }}>
      <h3>{espacio.name}</h3>
      <p><strong>Tipo:</strong> {espacio.type}</p>
      <p><strong>Precio:</strong> ${espacio.pricePerHour}/hr</p>
      <p><strong>Estado:</strong> {espacio.available ? '✅ Disponible' : '❌ No disponible'}</p>
      
      {(espacio.available || textoBoton === "Cancelar") && (
        <button 
          onClick={() => onAction(espacio.id)}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          {textoBoton}
        </button>
      )}
    </div>
  );
};