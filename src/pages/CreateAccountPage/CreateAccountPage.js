import './CreateAccountPage.scss';
import SignUpForm from '../../components/SignUpForm';

const CreateAccountPage = () => {
    return (
        <div className='create-account-page'>
            <div className='create-account-page__signup-form'>
                <SignUpForm />
            </div>
        </div>
    )
}

export default CreateAccountPage;