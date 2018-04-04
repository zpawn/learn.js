import { h, Component } from 'preact';

class Input extends Component {

    state = {
        input: ''
    }

    inputChangeHandler = (e) => {
        console.log('alha');
        this.setState({ input: e.target.value });
    }

    render () {
        return (
            <div>
                <div>{this.state.input}</div>
                <input type="text" onInput={this.inputChangeHandler}/>
            </div>
        );
    }
}

export default Input;
