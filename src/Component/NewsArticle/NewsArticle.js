import React from "react";
import './NewsArticle.css'

function NewsArticle({ author, title, description, url, urlToImage, publishedAt, contenrt }) {
    return (
        <div className="news-article-card" >
            <img src={urlToImage} alt="" className="news-article-img" />
            <h1 className="article-title">{title}</h1>
            <div className="article-info">
                <p className="article-author">{author}</p>
                <p className="article-publishment">{publishedAt}</p>
            </div>
            <p className="article-descrition">{description}</p>

            <a href={url} target="_blank" className="btn-read">Read More</a>
        </div>
    )
}
export default NewsArticle