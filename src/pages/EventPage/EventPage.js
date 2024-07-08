import './EventPage.scss';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState, createContext } from 'react';
import EventCardLarge from '../../components/EventCardLarge';
import axiosInstance from '../../utils';

export const EventContext = createContext();

const EventPage = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState('');

    useEffect(() => {
        axiosInstance.get(`/events/${eventId}`)
        .then(result => {
            setEvent(result.data);
        })
        .catch(err => {
            console.log(err)
        })
    },[eventId]);

    return (
        <div className='event-page'>
            <EventContext.Provider value={event}>
                <EventCardLarge />
            </EventContext.Provider>
        </div>
    )
}

export default EventPage;