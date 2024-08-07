import './HomePage.scss';
import { useEffect, useState } from 'react';
import ArticleListContainer from '../../components/ArticleListContainer';
import axiosInstance from '../../utils';

const HomePage = () => {
    const [contentData, setContentData] = useState('')

    useEffect(() => {
        axiosInstance.get('/content')
        .then(result => {
            setContentData(result.data);
        })
        .catch(err => {
            console.log(err)
        })
    },[]
    );

    return (
        <div className='home-page'>
            <ArticleListContainer
                articleListTitle="What's happening?"
                postList={contentData}
            />
        </div>
    )
}

export default HomePage;