import React from 'react';
import ReactDOM from 'react-dom';
import { ArticleList } from './components/ArticleList.jsx';
import quote from './quote.json';

ReactDOM.render(
    <ArticleList data={quote} />,
    document.getElementById('mount-point')
);