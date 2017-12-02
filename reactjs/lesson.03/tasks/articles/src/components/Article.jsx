import React from 'react';
import "./Article.css";

export class Article extends React.Component {
    render () {
        return (
            <article className="article__item">
                <blockquote className="article__text">{this.props.text}</blockquote>
                <p className="article__author">&mdash;&nbsp;{this.props.author}</p>
            </article>
        );
    }
}
