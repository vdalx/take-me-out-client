import './PrimaryButton.scss';

const PrimaryButton = ({ className, btnText }) => {
    return (
        <div className='primary-btn'>
            <button className={`primary-btn__btn ${className}`}>
                {btnText}
            </button>
        </div>
    )
}

export default PrimaryButton;