import './EventMap.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils';
import mapboxgl from 'mapbox-gl';

const EventMap = () => {

  const { eventId } = useParams();
  const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;
  mapboxgl.accessToken = REACT_APP_MAPBOX_ACCESS_TOKEN;

  const zoom = 13;

  const mapContainer = useRef(null);
  const eventMap = useRef(null);

  useEffect(() => {
        axiosInstance.get(`/events/${eventId}`)
      .then(result => {
          const longitude = result.data.venue_longitude;
          const latitude = result.data.venue_latitude;

          if (!eventMap.current) {
          eventMap.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [longitude, latitude],
            zoom: zoom
          });
        }
      })
      .catch(err => {
          console.log(err)
      })
  },[eventId, zoom]);

  return (
    <div className='event-map'>
        <div ref={mapContainer} className='event-map__map-container'></div>
    </div>
  )
}

export default EventMap;