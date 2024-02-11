import './PrimaryButton.scss';

const PrimaryButton = ({btnText}) => {
    return (
        <div className='primary-btn'>
            <button className='primary-btn__btn'>
                {btnText}
            </button>
        </div>
    )
}

export default PrimaryButton;