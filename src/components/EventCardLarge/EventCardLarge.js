import './EventCardLarge.scss';
import { useState, useContext } from 'react';
import { getToken } from '../../tokenUtils';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { EventContext } from '../../pages/EventPage/EventPage';
import ProgressBar from '../ProgressBar';
import EventBadge from '../EventBadge';
import PrimaryButton from '../PrimaryButton';
import EventMap from '../EventMap';
import SaveEventButton from '../SaveEventButton';
import Tooltip from '../Tooltip';
import { useAuth } from '../../authContext';

const EventCardLarge = () => {

    const event = useContext(EventContext);
    const [savedEvent, setSavedEvent] = useState(false);
    const { isLoggedIn, profileData } = useAuth();
    const navigate = useNavigate();
    const [query] = useSearchParams();

    const handleSaveClick = () => {
        if (isLoggedIn) {
            setSavedEvent(!savedEvent)
        } else {
            const path = query.get('/login') || '/account';
            navigate(path)
        }
    }

    return (
        <div className='event-card-large'>
            <div className='event-card-large__hero-container'>
                <div className='event-card-large__hero-img-container'>
                    <img className='event-card-large__hero-img' src={event.event_image} alt='Venue of the event'/>
                </div>
            </div>
            <div className='event-card-large__event-container'>
                <div className='event-card-large__event-details'>
                    <div className='event-card-large__event-info-container'>
                        <h3 className='event-card-large__event-name'>{event.event_name}</h3>
                        <p className='event-card-large_event-venue'>{event.venue_name}</p>
                        <p className='event-card-large__event-location'>{`${event.venue_address}, ${event.venue_city}`}</p>
                    </div>
                    <div className='event-card-large__event-date-container'>
                        <p className='event-card-large__event-date'>{event.event_date ? event.event_date.substring(0,10) : ''}</p>
                    </div>
                </div>
                <div className='event-card-large__event-status-container'>
                    <div className='event-card-large__event-sellthru'>
                        <ProgressBar
                            className='event-card-large__progress-bar-container'
                        />
                    </div>
                    <div className='event-card-large__event-state'>
                        <EventBadge
                            badgeType='default'
                            ticketPrice={event.ticket_price}
                        />
                    </div>
                </div>
                <div className='event-card-large__event-desc-container'>
                    <p className='event-card-large__event-desc'>{event.event_desc}</p>
                </div>
                <div className='event-card-large__event-tickets'>
                    <Tooltip content="Save for later!" direction="top">
                        <SaveEventButton
                            className='event-card-large__save-btn'
                            status={savedEvent}
                            handleSaveClick={handleSaveClick}
                        />
                    </Tooltip>
                    <PrimaryButton 
                        className='event-card-large__tickets-btn'
                        btnType='button'
                        btnText='get tickets'
                    />
                </div>
                <div className='event-card-large__event-map'>
                    <EventMap />
                </div>
            </div>
        </div>
    )
}

export default EventCardLarge;