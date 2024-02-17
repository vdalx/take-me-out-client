import './Footer.scss';
import EmailIcon from '../../assets/icons/envelope-solid.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import TwitterIcon from '../../assets/icons/x-twitter.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <h3 className='footer__text'>contact us</h3>
                <div className='footer__social-container'>
                    <img className='footer__social-icon' src={EmailIcon} alt='Email icon showing an envelope'/>
                    <img className='footer__social-icon' src={FacebookIcon} alt='Social media icon showing the Facebook logo'/>
                    <img className='footer__social-icon' src={InstagramIcon} alt='Social media icon showing the Instagram logo'/>
                    <img className='footer__social-icon' src={TwitterIcon} alt='Social media icon showing the Twitter logo'/>
                </div>
            </div>
        </div>
    )
}

export default Footer;