import Button from './Button.js';

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    updateTerm(e) {
        let term = e.target.value;
        this.setState({ term });
    }

    render() {
        return (
            <div className="ui icon input">
                <input type="text" placeholder={`${this.props.children}...`} val={this.state.term}
                  onChange={this.updateTerm.bind(this)}
                />
                <Button 
                  handleClick={() => this.props.handleSubmit(this.state.term)}>
                    {this.props.children}
                </Button>
            </div>
        );
    }
}

export default Input;