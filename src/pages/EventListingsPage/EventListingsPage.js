import './EventListingsPage.scss';
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils';
import EventListContainer from '../../components/EventListContainer';

const EventListingsPage = () => {
    const [eventList, setEventList] = useState('')

    useEffect(() => {
        axiosInstance.get('/events')
        .then(result => {
            setEventList(result.data);
        })
        .catch(err => {
            console.log(err)
        })
    },[]
    );

    console.log(eventList)

    return (
        <div className='event-listings-page'>
            <EventListContainer events={eventList}/>
        </div>
    )
}

export default EventListingsPage;