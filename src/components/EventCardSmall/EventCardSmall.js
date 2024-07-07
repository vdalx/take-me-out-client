import './EventCardSmall.scss';
import { Link } from 'react-router-dom';
import ProgressBar from '../ProgressBar';
import EventBadge from '../EventBadge';

const EventCardSmall = ({ event }) => {

    return (
        <div className='event-card-small'>
            <Link
                to={`/events/${event.event_id}`}
                className='event-card-small__link'
            >
                <div className='event-card-small__hero-img-container'>
                    <div>
                        <img className='event-card-small__hero-img' src={event.event_image} alt='Venue of the event'/>
                    </div>
                </div>
                <div className='event-card-small__event-container'>
                    <div className='event-card-small__event-details'>
                        <div className='event-card-small__event-info-container'>
                            <h3 className='event-card-small__event-name'>{event.event_name}</h3>
                            <p className='event-card-small__event-venue'>{event.venue_name}</p>
                            <p className='event-card-small__event-location'>{event.venue_city}</p>
                        </div>
                        <div className='event-card-small__event-date-container'>
                            <p className='event-card-small__event-date'>{event.event_date.substring(0, 10)}</p>
                        </div>
                    </div>
                    <div className='event-card-small__event-status-container'>
                        <div className='event-card-small__event-sellthru'>
                            <ProgressBar sellThru={event.sell_through}/>
                        </div>
                        <div className='event-card-small__event-state'>
                            <EventBadge
                                badgeType='default'
                                ticketPrice={event.ticket_price}
                            />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default EventCardSmall;