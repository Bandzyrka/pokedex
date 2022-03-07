
import './card.styles.css'
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import React, { Component } from 'react';

class Card extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            sprite: ""
        }
    }
    componentDidMount() {
    axios.get(this.props.pokemon.url)
    .then(res => {
      const sprite = res.data.sprites.front_default;
      this.setState({sprite: sprite});
    })
    }
    
    render() {
        return (
            <div className="card-container"> 
            <h2>{this.props.pokemon.name}</h2> 
            <img src={this.state.sprite} alt={this.props.pokemon.name} />
            </div>
        );
    }
}

export { Card }
