import { h, Component } from 'preact';

import classes from './Clock.css';

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
        return <div className={classes.Clock}>{this.state.time}</div>;
    }
}

export default Clock;
