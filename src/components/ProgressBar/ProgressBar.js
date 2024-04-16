import './ProgressBar.scss';
import { useState } from 'react';

const ProgressBar = ({ sellThru }) => {
    const [progress, setProgress] = useState(sellThru);

    return (
        <div className='progress-bar'>
            <div className='progress-bar__container'>
                <div className='progress-bar__fill' style={{ width: `${progress}%`}}>
                </div>
            </div>
            <div className='progress-bar__value'>
                <p>{`${progress}%`}</p>
            </div>
        </div>
    )
}

export default ProgressBar;