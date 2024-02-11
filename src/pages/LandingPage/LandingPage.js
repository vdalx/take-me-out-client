import './LandingPage.scss';
import PrimaryButton from '../../components/PrimaryButton';

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <h1>Hello World</h1>
            <PrimaryButton 
                btnText='log in'
                className='landing-page__btn--type-two'
            />
            <PrimaryButton 
                btnText='sign up'
                className='landing-page__btn--type-one'
            />
        </div>
    )
}

export default LandingPage;