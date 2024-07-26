// src/App.js
import { useState } from 'react';
import Map from './components/Map';
import { addLocalidade } from './assets/localidade';
import './App.css';

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [comment, setComment] = useState('');

  const handleAddCalled = (lng, lat, address) => {
    setSelectedLocation({ lng, lat, address });
  };

  const handleSubmit = () => {
    if (selectedLocation && comment) {
      addLocalidade(selectedLocation.lat, selectedLocation.lng, comment);
      setSelectedLocation(null);
      setComment('');
    }
  };

  return (
    <div className="app-container">
      <h1>Mapa de Buracos</h1>
      <h2>Busque o endereço e clique no local aproximado</h2>
      <Map onAddCalled={handleAddCalled} />
      {selectedLocation && (
        <div className="form-container">
          <h2>Novo Chamado</h2>
          <p>Local: {selectedLocation.lng}, {selectedLocation.lat}</p>
          <p>Endereço: {selectedLocation.address}</p>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Digite um comentário sobre este local"
            style={{ width: '100%', height: '80px' }}
          />
          <button onClick={handleSubmit} style={{ background: 'blue' }}>Salvar Chamado</button>
        </div>
      )}
      <div className="calls-list">
      </div>
    </div>
  );
};

export default App;
