import Button from './Button.js';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    updateSearchTerm(e) {
        let searchTerm = e.target.value;
        this.setState({ searchTerm })
    }

    render() {
        return (
            <div className="ui icon input">
                <input type="text" placeholder="Search..." val={this.state.searchTerm}
                  onChange={this.updateSearchTerm.bind(this)}
                />
                <Button 
                  handleClick={() => this.props.handleSearch(this.state.searchTerm)}>
                    Search
                </Button>
            </div>
        );
    }
}

export default Search;