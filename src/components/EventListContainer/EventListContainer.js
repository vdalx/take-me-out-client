import './EventListContainer.scss';
import EventCardSmall from '../EventCardSmall';

const EventListContainer = ({ eventListTitle, events, type}) => {

    // Function to sort events by date which we will need later
    const sortEventsByDate = (events) => {
        return events.sort((a, b) => new Date(a.date) - new Date(b.date));
    };

    // Check if there are events and sort them
    const sortedEvents = events && events.length > 0 ? sortEventsByDate(events) : [];

    return (
        <div className='event-list-container'>
            <div className='event-list-container__title-wrap'>
                <h2 className='event-list-container__title-text'>{eventListTitle}</h2>
            </div>
            <div className='event-list-container__card-wrap'>
                {sortedEvents.length > 0 ? (
                    sortedEvents.map(event =>
                        <EventCardSmall
                            key={event.event_id}
                            event={event}
                        />
                    )
                ) : (
                    <div className='event-list-container__no-events-card'>
                        No events to see here at the moment
                    </div>
                )}
            </div>
        </div>
    )
}

export default EventListContainer;