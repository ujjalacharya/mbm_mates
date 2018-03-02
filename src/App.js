import React, { Component } from 'react';
import CardList from './CardList';
import {mates} from './db';


class App extends Component{
    render(){
        return(
            <React.Fragment>
                <h2 className="tc">MBM 2072</h2>
            <CardList mates={mates}/>
            </React.Fragment>
        )
    }
}

export default App;