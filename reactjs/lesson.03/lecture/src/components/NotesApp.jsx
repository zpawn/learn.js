import React from "react";
import { NoteEditor } from "./NoteEditor.jsx";
import { NotesGrid } from "./NotesGrid.jsx";
import { Search } from "./Search.jsx";
import './NotesApp.css';

export class NotesApp extends React.Component {
    constructor (props) {
        super(props);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleNoteDelete = this.handleNoteDelete.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = { notes: [] };
    }

    componentDidMount () {
        this.notes = JSON.parse(localStorage.getItem('notes')) || [];
        if (this.notes) {
            this.setState({ notes: this.notes });
        }
    }

    handleNoteAdd (newNote) {
        let newNotes = this.notes.slice();
        newNotes.unshift(newNote);
        this.notes = newNotes;
        this.setState({
            notes: newNotes,
        }, this._updateLocalStorage());
    }

    handleNoteDelete (note) {
        let noteId = note.id,
            newNotes = this.notes.filter(note => note.id !== noteId);
        this.notes = newNotes;
        this.setState({notes: newNotes}, this._updateLocalStorage());
    }

    handleSearch (e) {
        let searchQuery = e.target.value.trim().toLowerCase();
        let newNotes = searchQuery.length
            ? this.notes.filter(note => note.text.toLowerCase().includes(searchQuery))
            : this.notes;

        this.setState({notes: newNotes});
    }

    render () {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <Search onSearch={this.handleSearch}/>
                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
            </div>
        );
    }

    _updateLocalStorage () {
        let notes = JSON.stringify(this.notes);
        localStorage.setItem('notes', notes);
    }
}
