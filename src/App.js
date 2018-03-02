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
        console.log(event.target.value)
    }
    render(){
        return(
            <React.Fragment>
                <h2 className="tc">MBM 2072</h2>
                <SearchBar searchChange={this.handleSearch}/>
            <CardList mates={mates}/>
            </React.Fragment>
        )
    }
}

export default App;