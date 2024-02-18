import './LandingPage.scss';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton';

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <div className='landing-page__background-wrap'>
                <div className='landing-page__content'>
                    <div className='landing-page__title-wrap'>
                        <h1 className='landing-page__title'>take me 
                            <span className='landing-page__title--bold'> out</span>
                        </h1>
                    </div>
                    <div className='landing-page__btn-container'>
                        <div className='landing-page__btn'>
                            <Link to='/login'>
                                <PrimaryButton 
                                    btnText='log in'
                                    className='landing-page__btn--type-two'
                                />
                            </Link>
                        </div>
                        <div className='landing-page__btn'>
                            <Link to='/create-account'>
                                <PrimaryButton 
                                    btnText='sign up'
                                    className='landing-page__btn--type-one'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;