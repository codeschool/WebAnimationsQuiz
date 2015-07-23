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

    this.state = {
      matches: [],
      results: null
    }
  }

  componentDidMount() {
    var results = this._getResults();
    this.setState( { results: results } );
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
    var matches  = []
    var filename = '';

    this.props.results.forEach( ( result, index ) => {
      if ( this._intersection( this.props.answers, result.answers ).length === 3 ) {
        matches.push( result.character );
      }
    });

    if ( matches.length === 0 ) {
      filename = 'images/donut.svg';

      return(
        <div className='mbm'>
          <h2 className='mbm'>You are the Donut!</h2>
          <img src={ filename } alt='Donut' className='db mbm' />
        </div>
      );
    } else if ( matches.length > 1 ) {
      var randomMatches = this._randomizer( matches );

      filename = `images/${ randomMatches.toLowerCase() }.svg`;

      return(
        <div className='mbm'>
          <h2 className='mbm'>You are the { randomMatches }!</h2>
          <img src={ filename } alt={ randomMatches } className='db mbm' />
        </div>
      );
    } else {
      filename = `images/${ matches[ 0 ].toLowerCase() }.svg`;

      return(
        <div className='mbm'>
          <h2 className='mbm'>You are the { matches[ 0 ] }!</h2>
          <img src={ filename } alt={ matches[ 0 ] } className='db mbm' />
        </div>
      );
    }
  }

  render() {
    return(
      <div className='results tac'>
        { this.state.results }
        <Share
          text='I found out what character in Sweet Lands I am! You can, too!'
          url='http://www.example.com' />
      </div>
    );
  }

}
