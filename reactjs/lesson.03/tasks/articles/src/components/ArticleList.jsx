import React from "react";
import { Article } from "./Article.jsx";
import "./ArticleList.css";

export class ArticleList extends React.Component {
    constructor (props) {
        super(props);
        this.data = this.props.data || [];
        this.state = {
            data: this.data.slice()
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch (e) {
        let search = e.target.value.toLowerCase(),
            newData = this.data.filter(quote => quote.author.toLocaleLowerCase().indexOf(search) !== -1)

        this.setState({ data: newData });
    }

    render () {
        return (
            <div className="article">
                <div className="article__search">
                    <input type="search" placeholder="Search..." onChange={this.handleSearch}/>
                </div>
            {
                this.state.data.map((quote, i) => <Article key={i} text={quote.text} author={quote.author} />)
            }
            </div>

        );
    }
}
