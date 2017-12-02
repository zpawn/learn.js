import React from "react";
import './Note.css';

export class Note extends React.Component {
    render () {
        let styles = { backgroundColor: this.props.color };
        return (
            <div className="note" style={styles}>
                <span className="delete-note" onClick={this.props.onDelete}>&times;</span>
                {this.props.children}
            </div>
        );
    }
}
