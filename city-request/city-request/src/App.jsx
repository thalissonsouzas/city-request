// src/App.js
import React, { useState } from 'react';
import Map from './components/Map';
import './App.css';

const App = () => {
  const [calls, setCalls] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [comment, setComment] = useState('');

  const handleAddCalled = (lng, lat, address) => {
    setSelectedLocation({ lng, lat, address });
  };

  const handleSubmit = () => {
    if (selectedLocation && comment) {
      setCalls([...calls, { ...selectedLocation, comment }]);
      setSelectedLocation(null);
      setComment('');
    }
  };

  return (
    <div>
      <h1>Mapa de Buracos</h1>
      <Map calls={calls} onAddCalled={handleAddCalled} />
      {selectedLocation && (
        <div className="form-container">
          <h2>Novo Chamado</h2>
          <p>Local: {selectedLocation.lng}, {selectedLocation.lat}</p>
          <p>Endereço: {selectedLocation.address}</p>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Digite um comentário sobre este local"
          />
          <button onClick={handleSubmit} style={{background: 'blue'}}>Salvar Chamado</button>
        </div>
      )}
      <div className="calls-list">
        <h2>Chamados Abertos</h2>
        <ul>
          {calls.map((call, index) => (
            <li key={index}>
              {call.lng}, {call.lat} - {call.address} - {call.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
