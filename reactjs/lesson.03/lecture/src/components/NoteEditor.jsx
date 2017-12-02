import React from "react";
import { ColorPicker } from "./ColorPicker.jsx";
import './NoteEditor.css';

export class NoteEditor extends React.Component {
    constructor (props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleSelectColor = this.handleSelectColor.bind(this);
        this.state = {
            text: '',
            color: 'yellow'
        };
    }

    handleTextChange (e) {
        this.setState({ text: e.target.value });
    }

    handleNoteAdd (e) {
        let newNote = {
            text: this.state.text,
            color: this.state.color,
            id: Date.now()
        };
        this.props.onNoteAdd(newNote);
        this.setState({ text: ''   });
    }

    handleSelectColor (color) {
        this.setState({ color: color });
    }

    render () {
        return (
            <div className="note-editor">
                <textarea
                    className="textarea"
                    placeholder="Enter your notes here..."
                    rows={5}
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
                <ColorPicker active={this.state.color} onSelectColor={this.handleSelectColor}/>
            </div>
        );
    }
}
