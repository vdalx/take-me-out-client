import './ArticleCardSmall.scss';
import { Link } from 'react-router-dom';

const ArticleCardSmall = ({ post }) => {
    return(
        <div className='article-card-small'>
            <Link
                to={`/posts/${post.id}`}
                className='article-card-small__link'
            >
                <div className='article-card-small__hero-img-container'>
                    <div>
                        <img className='article-card-small__hero-img' src={post.post_image} alt='Venue of the event'/>
                    </div>
                </div>
                <div className='article-card-small__content-container'>
                    <div className='article-card-small__title-container'>
                        <h3 className='article-card-small__title'>{post.post_name}</h3>
                    </div>
                    <div className='article-card-small__body-container'>
                        <p className='article-card-small__body-container'>{post.post_desc}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ArticleCardSmall;