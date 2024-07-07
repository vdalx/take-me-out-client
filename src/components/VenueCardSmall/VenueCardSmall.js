import './VenueCardSmall.scss';
import EventImg from '../../assets/images/chris-zhang-uGh-hHVPRYI-unsplash.jpg';

const VenueCardSmall = () => {

    const defaultVenue = [{
        venue_name: "Massey Hall",
        venue_address: "178 Victoria Street, Toronto",
        venue_rating: "Excellent",
        venue_image: EventImg
    }]

    return (
        <div className='venue-card-small'>
            <div className='venue-card-small__hero-img-container'>
                <div>
                    <img className='venue-card-small__hero-img' src={defaultVenue[0].venue_image} alt='Venue of the event'/>
                </div>
            </div>
            <div className='venue-card-small__venue-info-container'>
                <div className='venue-card-small__venue-details-container'>
                    <h3 className='venue-card-small__venue-name'>{defaultVenue[0].venue_name}</h3>
                    <p className='venue-card-small__venue-address'>{defaultVenue[0].venue_address}</p>
                    <p className='venue-card-small__venue-rating'>{defaultVenue[0].venue_rating}</p>
                </div>
            </div>
        </div>
    )
}

export default VenueCardSmall;