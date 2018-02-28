import React, { Component } from 'react';
import './App.css';
import Validation from './Components/Validation/Validation';
import Char from './Components/Char/Char';

class App extends Component {

    state = {
        chars: [],
        length: 0
    }

    textChangeHandler = (e) => {
        const chars = e.target.value.split('');

        this.setState({
            chars: chars,
            length: chars.length
        });
    }

    removeCharHandler = (index) => {
        const chars = [ ...this.state.chars ];
        chars.splice(index, 1);
        this.setState({ chars: chars });
    }

    render() {

        let chars = this.state.chars.join(''),
            charsList = this.state.chars.map((char, index) => {
                return <Char
                    key={index}
                    char={char}
                    clicked={this.removeCharHandler.bind(this, index)}
                />
            });

        return (
            <div className="App">
                <input type="text" value={chars} onChange={this.textChangeHandler.bind(this)}/>
                <p>{chars}</p>
                <Validation length={this.state.length}/>
                <div>{charsList}</div>
            </div>
        );
    }
}

export default App;
