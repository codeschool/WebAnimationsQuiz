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
      selected: false,
      selection: null
    };
  }

  _handleSelection( answer ) {
    event.preventDefault();

    this.setState( { selected: true, selection: answer } );
  }

  _handleSubmit() {
    event.preventDefault();

    this.props.submitHandler( this.state.selection );
    this.setState( { selected: false } );
  }

  render() {
    var answers = this.props.answers.map( ( answer, index ) => {
      var answerClassNames = this.state.selected && this.state.selection === answer ? 'answer-link is-selected' : 'answer-link';

      return(
        <li key={ index } className='answer'>
          <a
            href='#'
            className={ answerClassNames }
            onClick={ this._handleSelection.bind( this, answer ) }>
            { answer }
          </a>
        </li>
      );
    });

    return(
      <div className='question'>
        <h2>{ this.props.title }</h2>
        <ul className='has-answer'>
          { answers }
        </ul>
        <button
          className='btn'
          onClick={ this._handleSubmit.bind( this ) } disabled={ !this.state.selected }>
          Next Question
        </button>
      </div>
    );
  }

}
