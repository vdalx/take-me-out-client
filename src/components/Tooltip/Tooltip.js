import './Tooltip.scss';
import { useState } from 'react';

const Tooltip = ({ delay, direction, content, children }) => {

    let timeout;
    const [active, setActive] = useState(false);

    const showTooltip = () => {
        timeout = setTimeout(()=> {
            setActive(true);
        }, delay || 400);
    };

    const hideTooltip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div
            className='tooltip__container'
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
        >
            {children}
            {active && (
                <div className={`tooltip__tip tooltip__tip--${direction || "top"}`}>
                    {content}
                </div>
            )}
        </div>
    )
}

export default Tooltip;