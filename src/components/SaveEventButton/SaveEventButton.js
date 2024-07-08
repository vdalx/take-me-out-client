import './SaveEventButton.scss';
import addSign from '../../assets/icons/plus-solid.svg';
import saveSign from '../../assets/icons/check-solid.svg';

const SaveEventButton = ({ className, status, handleSaveClick }) => {

    return (
        <div className='save-event-btn'>
            <button
                className={`save-event-btn__btn ${className}`}
                onClick={handleSaveClick}
            >
                <img className='save-event-btn__img' src={status ? saveSign : addSign} alt='Icon showing an addition sign'/>
            </button>
        </div>
    )
}

export default SaveEventButton;