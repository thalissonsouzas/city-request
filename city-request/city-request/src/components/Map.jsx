// src/components/Map.js

import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'; // Estilo do Geocoder
import mapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css';
import PropTypes from 'prop-types';
import { getLocalidade } from '../assets/localidade'; // Importa a função para obter dados do mock

mapboxgl.accessToken = 'pk.eyJ1IjoidGhhbGlzc29uc291emEiLCJhIjoiY2x5enp2c3hzMGZrczJqcHFraWhxb3JweSJ9.3WvDv0SxO-n2J77QDCohfw';

const Map = ({ onAddCalled }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  
  const addMarkers = (map, coordinates) => {
    if (!map || !coordinates || !Array.isArray(coordinates)) {
      console.error('Parâmetros inválidos fornecidos para adicionar marcadores.');
      return;
    }

    coordinates.forEach(({ latitude, longitude, comentario }) => {
      if (latitude && longitude) {
        const marker = new mapboxgl.Marker()
          .setLngLat([longitude, latitude])
          .addTo(map);

        // Adiciona o popup ao marcador
        if (comentario) {
          const popup = new mapboxgl.Popup({ offset: 25 })
            .setText(comentario);
          marker.setPopup(popup);
        }
      } else {
        console.warn('Coordenadas inválidas fornecidas:', { latitude, longitude });
      }
    });
  };

  
  const localidade = getLocalidade(); // Obtém coordenadas do mock
  console.log('AAAAAAAAAAAAAAAAAAAAAAAAA', localidade);
  addMarkers(map.current, localidade); // Usa a função para adicionar os marcadores

  
  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-46.4613, -23.6677], // Coordenadas de Mauá
      zoom: 12,
    });

       // Adiciona o widget de busca de endereço
       const geocoder = new mapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        placeholder: 'Buscar endereço',
        bbox: [-46.5, -23.7, -46.4, -23.6] // Define a área de busca, opcional
      });
      map.current.addControl(geocoder);

    map.current.on('click', async (e) => {
      const { lng, lat } = e.lngLat;
      try {
        const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxgl.accessToken}`);
        const address = response.data.features[0]?.place_name || 'Endereço não encontrado';
        onAddCalled(lng, lat, address);
      } catch (error) {
        console.error('Erro ao buscar o endereço:', error);
      }
    },);

    const addMarkers = (map, coordinates) => {
      if (!map || !coordinates || !Array.isArray(coordinates)) {
        console.error('Parâmetros inválidos fornecidos para adicionar marcadores.');
        return;
      }
      
      coordinates.forEach(({ latitude, longitude }) => {
        if (latitude && longitude) {
          new mapboxgl.Marker()
          .setLngLat([longitude, latitude])
          .addTo(map);
        } else {
          console.warn('Coordenadas inválidas fornecidas:', { latitude, longitude });
        }
      });
    };
    
    const localidade = getLocalidade(); // Obtém coordenadas do mock
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAA', localidade);
    addMarkers(map.current, localidade); // Usa a função para adicionar os marcadores

    // return () => map.current.remove();
  }, []);


  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      <h2>Total de ocorrências: {localidade.length}</h2>
    </div>
  );
};

Map.propTypes = {
  onAddCalled: PropTypes.func.isRequired,
};

export default Map;
