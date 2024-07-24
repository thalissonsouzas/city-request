// src/components/Map.js
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidGhhbGlzc29uc291emEiLCJhIjoiY2x5enp2c3hzMGZrczJqcHFraWhxb3JweSJ9.3WvDv0SxO-n2J77QDCohfw';

const Map = ({ calls, onAddCalled }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-46.4613, -23.6677], // Coordenadas de Mauá
      zoom: 12,
    });

    // Adicionar Geocoder
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: 'Buscar endereço',
    });

    map.current.addControl(geocoder);

    // Evento de pesquisa
    geocoder.on('result', async (e) => {
      const { lng, lat } = e.result.center;
      const address = e.result.place_name;
      onAddCalled(lng, lat, address);
    });

    // Adicionar marcadores para chamados existentes
    map.current.on('load', () => {
      calls.forEach(call => {
        new mapboxgl.Marker()
          .setLngLat([call.lng, call.lat])
          .setPopup(new mapboxgl.Popup().setText(call.comment))
          .addTo(map.current);
      });
    });

    // Evento de clique no mapa
    map.current.on('click', async (e) => {
      const { lng, lat } = e.lngLat;
      try {
        const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxgl.accessToken}`);
        const address = response.data.features[0]?.place_name || 'Endereço não encontrado';
        onAddCalled(lng, lat, address);
      } catch (error) {
        console.error('Erro ao buscar o endereço:', error);
      }
    });

    return () => map.current.remove();
  }, [calls]);

  return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default Map;
