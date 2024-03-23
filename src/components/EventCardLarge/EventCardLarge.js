import './EventCardLarge.scss';
import EventImg from '../../assets/images/chris-zhang-uGh-hHVPRYI-unsplash.jpg';
import ProgressBar from '../ProgressBar';
import EventBadge from '../EventBadge';
import PrimaryButton from '../PrimaryButton';
import EventMap from '../EventMap';

const EventCardLarge = () => {
    return (
        <div className='event-card-large'>
            <div className='event-card-large__hero-img-container'>
                <div>
                    <img className='event-card-large__hero-img' src={EventImg} alt='Venue of the event'/>
                </div>
            </div>
            <div className='event-card-large__event-container'>
                <div className='event-card-large__event-details'>
                    <div className='event-card-large__event-info-container'>
                        <h3 className='event-card-large__event-name'>an event</h3>
                        <p className='event-card-large_event-venue'>massey hall</p>
                        <p className='event-card-large__event-location'>Toronto</p>
                    </div>
                    <div className='event-card-large__event-date-container'>
                        <p className='event-card-large__event-date'>Sept 5 2024</p>
                    </div>
                </div>
                <div className='event-card-large__event-status-container'>
                    <div className='event-card-large__event-sellthru'>
                        <ProgressBar sellThru={90}/>
                    </div>
                    <div className='event-card-large__event-state'>
                        <EventBadge
                            badgeType='saved'
                        />
                    </div>
                </div>
                <div className='event-card-large__event-desc-container'>
                    <p className='event-card-large__event-desc'>Toronto</p>
                </div>
                <div className='event-card-large__event-tickets'>
                    <PrimaryButton 
                        className='event-card-large__btn'
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