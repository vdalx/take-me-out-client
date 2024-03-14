import './EventCardSmall.scss';
import EventImg from '../../assets/images/chris-zhang-uGh-hHVPRYI-unsplash.jpg';
import ProgressBar from '../ProgressBar';
import EventBadge from '../EventBadge';

const EventCardSmall = () => {
    return (
        <div className='event-card-small'>
            <div className='event-card-small__hero-img-container'>
                <div>
                    <img className='event-card-small__hero-img' src={EventImg} alt='Venue of the event'/>
                </div>
            </div>
            <div className='event-card-small__event-container'>
                <div className='event-card-small__event-details'>
                    <div className='event-card-small__event-info-container'>
                        <h3 className='event-card-small__event-name'>an event</h3>
                        <p className='event-card-small__event-venue'>massey hall</p>
                        <p className='event-card-small__event-location'>Toronto</p>
                    </div>
                    <div className='event-card-small__event-date-container'>
                        <p className='event-card-small__event-date'>Sept 5 2024</p>
                    </div>
                </div>
                <div className='event-card-small__event-status-container'>
                    <div className='event-card-small__event-sellthru'>
                        <ProgressBar sellThru={90}/>
                    </div>
                    <div className='event-card-small__event-state'>
                        <EventBadge
                            badgeType='saved'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCardSmall;