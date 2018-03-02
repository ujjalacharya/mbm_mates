import React, { Component } from 'react';
import Card from "./Card";

class CardList extends Component{
    render(){
        const {mates} = this.props;
        const cardlist = mates.map((mate, i)=>{
            return <Card name={mates[i].name} img={mates[i].img} key={mates[i].id}/>
        }) 
        return(
            <div>
            {cardlist}                
            </div>
        )
    }
}

export default CardList;