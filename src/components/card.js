import React , { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor(){
        super()

        this.state = {
            color: '',
            pluralNoun: '',
            adjectiveOne: '',
            cerebOne: '',
            adjectiveTwo: '',
            nounOne: '',
            numberOne: '',
            numberTwo: '',
            nounTwo: '',
            adjectiveThree: '',
            celebTwo: '',
            celebThree: '',
            adjectiveFour: '',
            nounThree: '',
            celebFour: '',
            adjectiveFive: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const inputValue = event.target.value;
        const stateName = event.target.name;
        this.setState({ [stateName]: inputValue });
    }

    render() {

        const inputData = [
            {name: 'color', title: 'Color', state: this.state.color},
            {name: 'pluralNoun', title: 'Plural Noun', state: this.state.color},
            {name: 'adjectiveOne', title: 'Adjective', state: this.state.color},
            {name: 'cerebOne', title: 'Celebrity', state: this.state.color},

            {name: 'adjectiveTwo', title: 'Adjective', state: this.state.adjectiveTwo},
            {name: 'nounOne', title: 'Noun', state: this.state.nounOne},
            {name: 'numberOne', title: 'Number', state: this.state.numberOne},
            {name: 'numberTwo', title: 'Number', state: this.state.numberTwo},

            {name: 'nounTwo', title: 'Noun', state: this.state.nounTwo},
            {name: 'adjectiveThree', title: 'Adjective', state: this.state.adjectiveThree},
            {name: 'celebTwo', title: 'Celebrity', state: this.state.celebTwo},
            {name: 'celebThree', title: 'Celebrity', state: this.state.celebThree},

            {name: 'adjectiveFour', title: 'Adjective', state: this.state.adjectiveFour},
            {name: 'nounThree', title: 'Noun', state: this.state.nounThree},
            {name: 'celebFour', title: 'Celebrity', state: this.state.celebFour},
            {name: 'adjectiveFive', title: 'Adjective', state: this.state.adjectiveFive}
        ]

        return (
            <div className="card">
                {
                    inputData.map(data => Input((data), this.handleInputChange))
                }
            </div>
        )
    }
}

export default Card;