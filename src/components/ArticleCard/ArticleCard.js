import './ArticleCard.scss';
import ArticleImg from '../../assets/images/chris-zhang-uGh-hHVPRYI-unsplash.jpg';

const ArticleCard = () => {
    return(
        <div className='article-card'>
            <div className='article-card__hero-img-container'>
                <div>
                    <img className='article-card__hero-img' src={ArticleImg} alt='Venue of the event'/>
                </div>
            </div>
            <div className='article-card__content-container'>
                <div className='article-card__title-container'>
                    <h3 className='article-card__title'>Summer 2024 Festival Season</h3>
                </div>
                <div className='article-card__body-container'>
                    <p className='article-card__body-container'>Discover some of the most popular festivals happening this summer near you.</p>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard;