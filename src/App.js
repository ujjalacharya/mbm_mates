import React, { Component } from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';
import Scroll from './Scroll'


class App extends Component {
    constructor() {
        super();
        this.state = {
            mates: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://api.myjson.com/bins/799p1')
            .then((res) => {
                return res.json()
            })
            .then(infos => this.setState({ mates: infos }))
    }

    handleSearch = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filteredMates = this.state.mates.filter((mate) => {
            return mate.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.mates.length === 0) { return <h2>Loading...</h2> }
        return (
            <React.Fragment>
                <h1 className="tc">MBM 2072</h1>
                <SearchBar searchChange={this.handleSearch} />
                <Scroll>
                <CardList mates={filteredMates} />                    
                </Scroll>
            </React.Fragment>
        )
    }
}

export default App;