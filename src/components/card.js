import React , { Component } from 'react';

import Input from './input';
import Content from './content';

const INITIAL_STATE = {
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
    adjectiveFive: '',
    contentVisible: false,
}

class Card extends Component {

    constructor(){
        super();
        this.state = INITIAL_STATE;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event){
        const inputValue = event.target.value;
        const stateName = event.target.name;
        this.setState({ [stateName]: inputValue });
    }

    handleFormSubmit(event){
        event.preventDefault();
        if(this.state.contentVisible){
            console.log("Goes inside");
            this.setState(INITIAL_STATE);
        }
        else{
            this.setState({ contentVisible: true });
        }
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
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="card__inputs">
                {
                    inputData.map((data, index) => Input((data), this.handleInputChange, index))
                }
                </div>
                <button type="submit">{!this.state.contentVisible ? "Generate" : "Clear"} Mad Lib</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
            </form>
        )
    }
}

export default Card;