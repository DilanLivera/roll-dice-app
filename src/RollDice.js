import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  static defaultProps = {
    faces: ["one", "two", "three", "four", "five", "six"]
  }

  constructor(props) {
    super(props);

    this.state = {
      diceOneFace: "one",
      diceTwoFace: "one",
      isRolling: false
    }
    this.roll = this.roll.bind(this);
  }

  roll(e) {
    const randNum1 = Math.floor(Math.random() * this.props.faces.length);
    const randNum2 = Math.floor(Math.random() * this.props.faces.length);
    const diceOneFace= this.props.faces[randNum1];
    const diceTwoFace= this.props.faces[randNum2];

    this.setState({
      diceOneFace,
      diceTwoFace,
      isRolling: true
    });

    //button text change
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  render() {
    const { isRolling } = this.state;
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={ this.state.diceOneFace } isRolling={ this.state.isRolling } />
          <Die face={ this.state.diceTwoFace } isRolling={ this.state.isRolling } />
        </div>
        <button onClick={ this.roll } disabled={ isRolling }>{ isRolling? "Rolling" : "Roll Dice!" }</button>
      </div>
    );
  }
}

export default RollDice;