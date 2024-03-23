import './HomePage.scss';
import ArticleListContainer from '../../components/ArticleListContainer';

const HomePage = () => {
    return (
        <div className='home-page'>
            <ArticleListContainer articleListTitle='What is happening?'/>
        </div>
    )
}

export default HomePage;