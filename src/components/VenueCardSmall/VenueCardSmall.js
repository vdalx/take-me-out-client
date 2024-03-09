import './VenueCardSmall.scss';
import EventImg from '../../assets/images/chris-zhang-uGh-hHVPRYI-unsplash.jpg';

const VenueCardSmall = () => {
    return (
        <div className='venue-card-small'>
            <div className='venue-card-small__hero-img-container'>
                <div>
                    <img className='venue-card-small__hero-img' src={EventImg} alt='Venue of the event'/>
                </div>
            </div>
            <div className='venue-card-small__venue-info-container'>
                <div className='venue-card-small__venue-details-container'>
                    <h3 className='venue-card-small__vanue-name'>Venue Name</h3>
                    <p className='venue-card-small__venue-address'>178 Victoria Street, Toronto</p>
                    <p className='venue-card-small__venue-rating'>Excellent</p>
                </div>
            </div>
        </div>
    )
}

export default VenueCardSmall;