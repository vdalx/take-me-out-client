import './EventPage.scss';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import EventCardLarge from '../../components/EventCardLarge';
import axiosInstance from '../../utils';

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
    },[eventId]
    );
    return (
        <div className='event-page'>
            <EventCardLarge event={event}/>
        </div>
    )
}

export default EventPage;