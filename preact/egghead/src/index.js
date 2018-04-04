import { h, render, Component } from 'preact';

class Clock extends Component {

    state = {
        time: new Date().toLocaleTimeString()
    }

    componentDidMount () {
        this.timerId = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            });
        }, 1000);
    }

    componentWillUnmount () {
        clearTimeout(this.timerId);
    }

    render () {
        return <span>{this.state.time}</span>;
    }
}

render(
    <Clock/>,
    document.getElementById('preactMountPoint')
);
