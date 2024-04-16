import './VenueListContainer.scss';
import VenueCardSmall from '../VenueCardSmall';

const VenueListContainer = ({ venueListTitle }) => {
    return (
        <div className='venue-list-container'>
            <div className='venue-list-container__title-wrap'>
                <h2>{venueListTitle}</h2>
            </div>
            <VenueCardSmall />
        </div>
    )
}

export default VenueListContainer;