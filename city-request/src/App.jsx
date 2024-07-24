// src/App.jsx
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { MAPBOX_TOKEN } from './mapboxConfig';
import './App.css'; // Certifique-se de adicionar um CSS para o mapa

const App = () => {
  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: 'map', // ID do contêiner HTML onde o mapa será exibido
      style: 'mapbox://styles/mapbox/streets-v11', // Estilo do mapa
      center: [-74.5, 40], // Coordenadas iniciais [longitude, latitude]
      zoom: 9, // Nível de zoom inicial
    });

    // Adiciona um controle de navegação no mapa
    map.addControl(new mapboxgl.NavigationControl());
  }, []);

  return (
    <div>
      <h1>CityRequest Map</h1>
      <div id="map" style={{ height: '100vh' }}></div>
    </div>
  );
};

export default App;
