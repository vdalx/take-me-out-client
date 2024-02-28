import './EventListContainer.scss';
import EventCardSmall from '../EventCardSmall';

const EventListContainer = ({ eventListTitle }) => {
    return (
        <div className='event-list-container'>
            <div className='event-list-container__title-wrap'>
                <h2>{eventListTitle}</h2>
            </div>
            <EventCardSmall />
        </div>
    )
}

export default EventListContainer;