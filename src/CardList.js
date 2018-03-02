import React, { Component } from 'react';
import Card from "./Card";

class CardList extends Component {
    render() {
        const { mates } = this.props;
        return (
            <div> {
                mates.map((mate, i) => {
                    return (<Card name={mates[i].name} img={mates[i].img} key={mates[i].id} />)
                })
            }</div>
        )
    }
}

export default CardList;