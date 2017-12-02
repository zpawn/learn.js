import React from "react";
import './Search.css';

export class Search extends React.Component {
    render () {
        return (
            <div className="notes-search">
                <input type="search" placeholder="Search..." onChange={this.props.onSearch}/>
            </div>
        );
    }
}
