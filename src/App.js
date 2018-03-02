import React, { Component } from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';
import {mates} from "./db"


class App extends Component{
    constructor(){
        super();
        this.state={
            mates: mates,
            searchField: ''
        }
    }
   
    handleSearch = (event)=>{
        this.setState({searchField: event.target.value})
    }
    render(){
        const filteredMates = this.state.mates.filter((mate)=>{
            return mate.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return(
            <React.Fragment>
                <h2 className="tc">MBM 2072</h2>
                <SearchBar searchChange={this.handleSearch}/>
            <CardList mates={filteredMates}/>
            </React.Fragment>
        )
    }
}

export default App;