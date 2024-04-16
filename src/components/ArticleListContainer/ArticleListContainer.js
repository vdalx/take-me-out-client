import './ArticleListContainer.scss';
import ArticleCard from '../ArticleCard';

const ArticleListContainer = ({ articleListTitle }) => {
    return (
        <div className='article-list-container'>
            <div className='article-list-container__title-wrap'>
                <h2 className='article-list-container__title-text'>{articleListTitle}</h2>
            </div>
            <div className='article-list-container__card-wrap'>
                <ArticleCard />
            </div>
        </div>
    )
}

export default ArticleListContainer;