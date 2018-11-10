import React , { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor(){
        super()

        this.state = {
            color: "",
            pluralNoun: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const inputValue = event.target.value;
        const stateName = event.target.name;
        this.setState({ [stateName]: inputValue });
    }

    render() {
        return (
            <div className="card">
                <h1>{ this.state.color }</h1>
                { Input('color', "Color", this.state.color, this.handleInputChange) }
                <h1>{ this.state.pluralNoun }</h1>
                { Input('pluralNoun', "Plural Noun", this.state.pluralNoun, this.handleInputChange) }
            </div>
        )
    }
}

export default Card;