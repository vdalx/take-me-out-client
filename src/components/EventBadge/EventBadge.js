import './EventBadge.scss';
import checkMark from '../../assets/icons/check-solid.svg';

const EventBadge = ({ badgeType }) => {

    const checkIconType = () => {
        if (badgeType === 'saved') {
            return checkMark
        }
    }

    return (
        <div className='event-badge'>
            <div className='event-badge__container'>
                <div className={`event-badge__img-container event-badge__img-container--${badgeType}`}>
                    <img className='event-badge__img' src={checkIconType()} alt='View of current user'/>
                </div>
            </div>
        </div>
    )
}

export default EventBadge;