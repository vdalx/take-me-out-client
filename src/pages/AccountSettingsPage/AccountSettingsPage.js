import './AccountSettingsPage.scss';
import AccountMenu from '../../components/AccountMenu/AccountMenu';
import AccountSettingsForm from '../../components/AccountSettingsForm';
 
const AccountSettingsPage = () => {
    return (
        <div className='account-settings-page'>
            <div className='account-settings-page__container'>
                <AccountMenu />
                <div className='account-settings-page__content'>
                    <AccountSettingsForm />
                </div>
            </div>
        </div>
    )
}

export default AccountSettingsPage;