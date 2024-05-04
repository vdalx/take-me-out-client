import './EventListContainer.scss';
import EventCardSmall from '../EventCardSmall';

const EventListContainer = ({ eventListTitle, events }) => {
    // will need to add something to sort by date
    return (
        <div className='event-list-container'>
            <div className='event-list-container__title-wrap'>
                <h2 className='event-list-container__title-text'>{eventListTitle}</h2>
            </div>
            <div className='event-list-container__card-wrap'>
                {events &&
                    events.map(event =>
                        <EventCardSmall
                            key={event.id}
                            event={event}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default EventListContainer;