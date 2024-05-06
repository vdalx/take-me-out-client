import './EventBadge.scss';
import checkMark from '../../assets/icons/check-solid.svg';
import dollarSign from '../../assets/icons/dollar-sign-solid-2.svg';
import sterlingSign from '../../assets/icons/sterling-sign-solid-2.svg';

const EventBadge = ({ badgeType, ticketPrice }) => {

    const checkIconType = () => {
        if (badgeType === 'saved') {
            return checkMark;
        } else if (badgeType === 'default'){
            return sterlingSign;
        }
    }

    return (
        <div className='event-badge'>
            <div className='event-badge__container'>
                <div className={`event-badge__img-container event-badge__img-container--${badgeType}`}>
                    {badgeType === 'saved' ? 
                        <img className='event-badge__img' src={checkIconType()} alt='View of current user'/> :
                        <p className='event-badge__price'>{`£${ticketPrice}`}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default EventBadge;