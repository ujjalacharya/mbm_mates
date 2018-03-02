import React, { Component } from 'react';

class SearchBar extends Component{
    render(){
        return(
            <div className="pa2 tc">
                <input className="pa3 ba b--green bg-lightest-blue" type="text" placeholder="Enter the name"/>
            </div>
        )
    }
}

export default SearchBar;