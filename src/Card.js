import React, { Component } from 'react';

class Card extends Component{
    render(){
        return(
            <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 tc">
                <img src={this.props.img} alt="Mates" style={{height: '200px', width: '200px'}}/>
                <div>
                    {this.props.name}
                </div>
            </div>
        )
    }
}

export default Card;