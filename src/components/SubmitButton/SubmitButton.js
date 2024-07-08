import './SubmitButton.scss';

const SubmitButton = ({ className, formName, btnText, btnValue }) => {
    return (
        <div className='submit-btn'>
            <button
                className={`submit-btn__btn ${className}`}
                form={formName}
                type='submit'
                value={btnValue}
            >
                {btnText}
            </button>
        </div>
    )
}

export default SubmitButton;