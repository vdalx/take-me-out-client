import './ArticleListContainer.scss';
import ArticleCardSmall from '../ArticleCardSmall';

const ArticleListContainer = ({ articleListTitle, postList }) => {
    return (
        <div className='article-list-container'>
            <div className='article-list-container__title-wrap'>
                <h2 className='article-list-container__title-text'>{articleListTitle}</h2>
            </div>
            <div className='article-list-container__card-wrap'>
                {postList &&
                    postList.map(post =>
                        <ArticleCardSmall
                            key={post.post_id}
                            post={post}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default ArticleListContainer;