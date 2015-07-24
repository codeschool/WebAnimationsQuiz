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

  // ----- Constructor ----- //

  constructor( props ) {
    super( props );

    this.state = {
      results: null
    }
  }

  // ----- Component Did Mount ----- //

  componentDidMount() {
    var results   = this._displayResults();
    var character = this._calculateResults();

    this.setState( { results, character } );
  }

  // ----- Randomizer ----- //

  _randomizer( array ) {
    var randomNumber;
    randomNumber = Math.floor( Math.random() * array.length );
    return array[ randomNumber ];
  }

  // ----- Calculate Results ----- //

  _calculateResults() {
    var array      = this.props.answers,
        matches    = {},
        maxElement = array[0],
        maxCount   = 1,
        filename   = '';

    for( var i = 0; i < array.length; i++ ) {
      var element = array[ i ];

      if ( matches[ element ] == null ) {
        matches[ element ] = 1;
      } else {
        matches[ element ]++;
      }

      if ( matches[ element ] > maxCount ) {
        maxElement = element;
        maxCount = matches[ element ];
      }
      else if ( matches[ element ] ==  maxCount) {
        maxElement += '&' + element;
        maxCount = matches[ element ];
      }
    }

    if ( maxElement.indexOf( '&' ) !== -1 ) {
      maxElement = this._randomizer( maxElement.split( '&' ) );
    }

    return maxElement;
  }

  // ----- Display Results ----- //

  _displayResults() {
    var character = this._calculateResults();
    var filename  = `images/${ character.toLowerCase() }.svg`;

    return(
      <div className='mbm'>
        <h2 className='mbm'>You are the { character }!</h2>
        <img src={ filename } alt={ character } className='character db mbm' />
      </div>
    );
  }

  // ----- Render ----- //

  render() {
    return(
      <div className='results tac'>
        { this.state.results }
        <Share
          text={ `I am the ${ this.state.character } in Sweet Lands! Find out what character you are!` }
          url='http://www.example.com' />
      </div>
    );
  }

}
