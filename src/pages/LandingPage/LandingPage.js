import './LandingPage.scss';
import PrimaryButton from '../../components/PrimaryButton';

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <h1>Take Me Out</h1>
            <div className='landing-page__btn-container'>
                <PrimaryButton 
                    btnText='log in'
                    className='landing-page__btn--type-two'
                />
                <PrimaryButton 
                    btnText='sign up'
                    className='landing-page__btn--type-one'
                />
            </div>
        </div>
    )
}

export default LandingPage;