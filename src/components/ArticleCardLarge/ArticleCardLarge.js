import './ArticleCardLarge.scss';
import EventCardSmall from '../EventCardSmall';

const ArticleCardLarge = ({ post }) => {
    return(
        <div className='article-card-large'>
            <div className='article-card-large__hero-banner'>
                <div className='article-card-large__hero-img-container'>
                    <img className='article-card-large__hero-img' src={post.post_image} alt='Venue of the event'/>
                </div>
            </div>
            <div className='article-card-large__container'>
                <div className='article-card-large__content'>
                    <div className='article-card-large__title-container'>
                        <h2 className='article-card-large__title'>{post.post_name}</h2>
                    </div>
                    <div className='article-card-large__body-container'>
                        <p className='article-card-large__body-container'>{post.post_body}</p>
                    </div>
                </div>
                <div className='event-list-container__card-wrap'>
                    {post.post_events &&
                        post.post_events.map(event =>
                            <EventCardSmall
                                key={event.id}
                                event={event}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ArticleCardLarge;