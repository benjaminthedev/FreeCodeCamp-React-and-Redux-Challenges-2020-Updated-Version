class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
    }
    // Add handleChange() and submitMessage() methods here
    handleChange(data) {
        this.setState({
            input: data.target.value,
        })
    }

    submitMessage() {
        this.setState({
            input: '',
            messages: [...this.state.messages, this.state.input]
        })
    }

    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input onChange={this.handleChange.bind(this)} value={this.state.input} />
                <button onClick={this.submitMessage.bind(this)}>Submit Message</button>
                <ul>
                    {this.state.messages.map(function (message, index) {
                        return <li>{message}</li>
                    })}
                </ul>
            </div>
        );
    }
};


