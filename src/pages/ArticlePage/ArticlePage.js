import './ArticlePage.scss';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ArticleCardLarge from '../../components/ArticleCardLarge';
import axiosInstance from '../../utils';

const ArticlePage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState('');

    useEffect(() => {
        axiosInstance.get(`/content/${postId}`)
        .then(result => {
            setPost(result.data);
        })
        .catch(err => {
            console.log(err)
        })
    },[postId]
    );

    return (
        <div className='article-page'>
            <ArticleCardLarge post={post}/>
        </div>
    )
}

export default ArticlePage;