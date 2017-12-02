import React from "react";

export class Color extends React.Component {
    constructor (props) {
        super(props);
        this.handleSelectColor = this.handleSelectColor.bind(this);
    }

    handleSelectColor (color) {
        this.props.onSelect(color);
    }

    render () {
        let style = { backgroundColor: this.props.color };
        return (
            <a className={this.props.active ? 'active' : ''}
               style={style} href="javascript:void(0)"
               onClick={this.handleSelectColor.bind(null, this.props.color)}
            />
        );
    }
}
