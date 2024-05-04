import './ProgressBar.scss';
import { useContext } from 'react';
import { EventContext } from '../../pages/EventPage/EventPage';

const ProgressBar = ({ sellThru }) => {

    const event = useContext(EventContext);
    const eventSellThru = sellThru ? sellThru : event ? event.sell_through : '';

    return (
        <div className='progress-bar'>
            <div className='progress-bar__container'>
                <div className='progress-bar__fill' style={{ width: `${eventSellThru*100}%`}}>
                </div>
            </div>
            <div className='progress-bar__value'>
                <p>{`${eventSellThru*100}%`}</p>
            </div>
        </div>
    )
}

export default ProgressBar;