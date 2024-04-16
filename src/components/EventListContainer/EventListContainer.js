import './EventListContainer.scss';
import EventCardSmall from '../EventCardSmall';

const EventListContainer = ({ eventListTitle }) => {
    return (
        <div className='event-list-container'>
            <div className='event-list-container__title-wrap'>
                <h2 className='event-list-container__title-text'>{eventListTitle}</h2>
            </div>
            <div className='event-list-container__card-wrap'>
                <EventCardSmall />
            </div>
        </div>
    )
}

export default EventListContainer;