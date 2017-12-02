import React from "react";
import { Color } from "./Color.jsx";
import './ColorPicker.css';

export class ColorPicker extends React.Component {
    constructor (props) {
        super(props);
        this.colors = [
            '#f3877b', '#fed279', '#fcef85', '#cfd8dd', '#7dd7fc', '#a0f7eb', '#c4ec8a'
        ];
    }

    render () {
        return (
            <div className="add-color">
                {
                    this.colors.map(
                        (color, i) => <Color
                            active={this.props.active === color}
                            key={i}
                            color={color}
                            onSelect={this.props.onSelectColor}
                        />
                    )
                }
            </div>
        );
    }
}
