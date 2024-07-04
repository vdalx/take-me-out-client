import './SaveEventButton.scss';
import addSign from '../../assets/icons/plus-solid.svg';


const SaveEventButton = ({ className }) => {

    return (
        <div className='save-event-btn'>
            <button className={`save-event-btn__btn ${className}`}>
                <img className='save-event-btn__img' src={addSign} alt='Icon showing an addition sign'/>
            </button>
        </div>
    )
}

export default SaveEventButton;