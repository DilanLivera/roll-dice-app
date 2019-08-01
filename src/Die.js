import React, { Component } from 'react';
import './Die.css';

class Die extends Component {

  render() {
    let iconClasses = `fas fa-dice-${ this.props.face }`;
    let { isRolling } = this.props;

    if(isRolling) iconClasses += " Die-Rolling";
     
    return (
      <i className={ `${iconClasses} Die` }></i>
    );
  }
}

export default Die;