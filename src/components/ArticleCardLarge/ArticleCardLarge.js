import './ArticleCardLarge.scss';

const ArticleCardLarge = ({ post }) => {
    return(
        <div className='article-card-large'>
            <div className='article-card-large__hero-img-container'>
                <div>
                    <img className='article-card-large__hero-img' src={post.image} alt='Venue of the event'/>
                </div>
            </div>
            <div className='article-card-large__content-container'>
                <div className='article-card-large__title-container'>
                    <h3 className='article-card-large__title'>{post.post_name}</h3>
                </div>
                <div className='article-card-large__body-container'>
                    <p className='article-card-large__body-container'>{post.post_body}</p>
                </div>
            </div>
        </div>
    )
}

export default ArticleCardLarge;