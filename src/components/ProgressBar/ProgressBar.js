import './ProgressBar.scss';
import { useState } from 'react';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    const handleBtnClick = () => {
        if (progress < 100) {
            setProgress(progress + 20)
        }
    };

    const handleBtnReset = () => {
        setProgress(0);
    };

    const getColor = () => {
        if (progress < 40) {
            return '#FB3640'
        } else if (progress < 70) {
            return '#FFA91F'
        } else {
            return '#078EED'
        }
    }

    return (
        <div className='progress-bar'>
            <div className='progress-bar__container'>
                <div className='progress-bar__fill' style={{ width: `${progress}%`, backgroundColor: getColor() }}>
                </div>
            </div>
            <div className='progress-bar__label'>{progress}</div>
            <button onClick={handleBtnClick}>Progress</button>
            <button onClick={handleBtnReset}>Reset</button>
        </div>
    )
}

export default ProgressBar;