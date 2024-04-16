import './EventMap.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const EventMap = () => {
    const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;
    mapboxgl.accessToken = REACT_APP_MAPBOX_ACCESS_TOKEN;

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(0.0037);
    const [lat, setLat] = useState(51.5033);
    const [zoom, setZoom] = useState(12);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [lng, lat],
          zoom: zoom
        });
      });
    
    return (
        <div className='event-map'>
            <div ref={mapContainer} className='event-map__map-container'></div>
        </div>
    )
}

export default EventMap;