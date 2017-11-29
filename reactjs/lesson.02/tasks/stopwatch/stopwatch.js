function padZero (num) {
    return num >= 10 ? num : '0' + num;
}

class Button extends React.Component {
    render () {
        let btnStyle = !(this.props.style) ? '' : `btn-${this.props.style}`;

        return (
            <a className={`btn ${btnStyle}`} href="javascript:void(0)" onClick={this.props.onHandleAction}>
                <span></span>
            </a>
        );
    }
}

class Stopwatch extends React.Component {
    constructor (props) {
        super(props);
        this.handleTogglePlay = this.handleTogglePlay.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            seconds: 0,
            minutes: 0,
            isStart: false
        };
    }

    componentWillMount () {
        clearInterval(this.timerId);
    }

    handleTogglePlay () {
        if (this.state.isStart) {
            clearInterval(this.timerId);
        } else {
            this.timerId = setInterval(this.tick.bind(this), 1000);
        }
        this.setState({ isStart: !this.state.isStart });
    }

    handleReset () {
        clearInterval(this.timerId);
        this.setState({
            seconds: 0,
            minutes: 0,
            isStart: false
        });
    }

    tick () {
        if (this.state.seconds === 60) {
            this.state.minutes = this.state.minutes + 1;
            this.state.seconds = 1
        } else {
            this.state.seconds = this.state.seconds + 1
        }

        this.setState({
            minutes: this.state.minutes,
            seconds: this.state.seconds
        });
    }

    render () {
        return (
            <div className="center-block">
                <Button style={this.state.isStart ? 'stop' : 'play'} onHandleAction={this.handleTogglePlay} />
                <span className="stopwatch-table">
                    {padZero(this.state.minutes)}:
                    {padZero(this.state.seconds)}
                </span>
                <Button style="refresh" onHandleAction={this.handleReset}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Stopwatch/>,
    document.getElementById('mount-point')
);
