class Note extends React.Component {
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

class NoteEditor extends React.Component {
    constructor (props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.state = { text: '' };
    }

    handleTextChange (e) {
        this.setState({ text: e.target.value });
    }

    handleNoteAdd (e) {
        let newNote = {
            text: this.state.text,
            color: 'yellow',
            id: Date.now()
        };
        this.props.onNoteAdd(newNote);
        this.setState({ text: ''   });
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
            </div>
        );
    }
}

class NotesGrid extends React.Component {
    componentDidMount () {
        let grid = this.refs.grid;
        this.msnry = new Masonry(grid, {
            'itemSelector': '.note',
            'columnWidth': 200,
            'gutter': 10
        });
    }

    componentDidUpdate (prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }

    render () {
        let onNoteDelete = this.props.onNoteDelete;

        return (
            <div className="notes-grid" ref="grid">
                {
                    this.props.notes.map(note => {
                        return (
                            <Note
                                key={note.id}
                                color={note.color}
                                onDelete={onNoteDelete.bind(null, note)}>

                                {note.text}
                            </Note>
                        );
                    })
                }
            </div>
        );
    }
}

class NotesApp extends React.Component {
    constructor (props) {
        super(props);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleNoteDelete = this.handleNoteDelete.bind(this);
        this.state = { notes: [] };
    }

    componentDidMount () {
        let localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({ notes: localNotes });
        }
    }

    componentDidUpdate () {
        this._updateLocalStorage();
    }

    handleNoteAdd (newNote) {
        let newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    }

    handleNoteDelete (note) {
        let noteId = note.id,
            newNotes = this.state.notes.filter(note => note.id !== noteId);
        this.setState({ notes: newNotes  });
    }

    render () {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
            </div>
        );
    }

    _updateLocalStorage () {
        let notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
}

ReactDOM.render(
    <NotesApp/>,
    document.getElementById('mount-point')
);