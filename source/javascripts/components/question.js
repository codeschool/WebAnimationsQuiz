// *************************************
//
//   Question
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

import React from 'react';

// -------------------------------------
//   Base
// -------------------------------------

export default class extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      selected: false
    };
  }

  _handleSelection( event ) {
    this.setState( { selected: true } );
  }

  _handleSubmit( event ) {
    this.props.submitHandler( event );
    this.setState( { selected: false } );
  }

  render() {
    var answers = this.props.answers.map( ( answer, index ) => {
      return(
        <li key={ index } className='answer'>
          <a href='#' className='answer-link' onClick={ this._handleSelection.bind( this ) }>
            { answer }
          </a>
        </li>
      );
    });

    return(
      <div className='question'>
        <h3>{ this.props.title }</h3>
        <ul className='has-answer'>
          { answers }
        </ul>
        <button onClick={ this._handleSubmit.bind( this ) } disabled={ !this.state.selected }>Next Question</button>
      </div>
    );
  }

}
