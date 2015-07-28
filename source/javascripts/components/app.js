// *************************************
//
//   App
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

import React from 'react';
import Quiz from './quiz';
import Image from './image';

// -------------------------------------
//   Base
// -------------------------------------

export default class extends React.Component {

  // ----- Constructor ----- //

  constructor( props ) {
    super( props );

    this.state = {
      quizStarted: false,
    };
  }

  // ----- Handle Click ----- //

  _handleClick() {
    event.preventDefault();

    this.setState( { quizStarted: true } );
  }

  // ----- Render Characters ----- //

  _renderCharacters() {
    var characters = this.props.characters.map( ( character, index ) => {
      var filename   = `images/${ character.toLowerCase() }.svg`;
      var classNames = `characterList-item characterList-item--${ character.toLowerCase() }`;

      return(
        <li className={ classNames } key={ index }>
          <Image
            src={ filename }
            alt={ character } />
          <p className='characterList-item-title'>
            { this.props.characterNames[ index ] }
          </p>
        </li>
      );
    });

    return characters;
  }

  // ----- Render ----- //

  render() {
    if ( this.state.quizStarted ) {

      return(
        <Quiz
          answerKey={ this.props.answerKey }
          questions={ this.props.questions }
          characters={ this.props.characters } />
      );

    } else {

      var characters = this._renderCharacters();

      return(
        <div>
          <ul className='characterList group'>
            { characters }
          </ul>
          <div className='tac'>
            <a
              href='#'
              onClick={ this._handleClick.bind( this ) }
              className='btn btn--a'>
              Start Quiz!
            </a>
          </div>
        </div>
      );

    }
  }

}
