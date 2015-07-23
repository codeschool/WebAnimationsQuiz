// *************************************
//
//   Results
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

import React from 'react';
import Share from './share';

// -------------------------------------
//   Base
// -------------------------------------

export default class extends React.Component {

  constructor( props ) {
    super( props );
  }

  _intersection( firstArray, secondArray ) {
    return firstArray.filter( ( value ) => {  return secondArray.indexOf( value ) > -1; } );
  }

  _randomizer( array ) {
    var randomNumber;
    randomNumber = Math.floor( Math.random() * array.length );
    return array[ randomNumber ];
  }

  _getResults() {
    var matches = [];

    this.props.results.forEach( ( result, index ) => {
      if ( this._intersection( this.props.answers, result.answers ).length === 3 ) {
        matches.push( 'You are character #' + result.character + '!' );
      }
    });

    if ( matches.length === 0 ) {
      return <span>You are a donut.</span>;
    } else if ( matches.length > 1 ) {
      var randomMatches = this._randomizer( matches );
      return <span>{ randomMatches }</span>;
    } else {
      return <span>{ matches[ 0 ] }</span>;
    }
  }

  render() {
    var results = this._getResults();

    return(
      <div className='results tac'>
        <h1>{ results }</h1>
        <Share />
      </div>
    );
  }

}
