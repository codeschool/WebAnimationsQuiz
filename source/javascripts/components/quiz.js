// *************************************
//
//   Quiz
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

import React from 'react';
import Question from './question';

// -------------------------------------
//   Base
// -------------------------------------

export default class extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      current: 0
    };
  }

  _handleSubmit( event ) {
    var next = ++this.state.current;
    this.setState({ current: next });
  }

  render() {
    var question = this.props.data[ this.state.current ];

    if ( question ) {

      return(
        <div className='quiz'>
          <h1>Which Sweet Lands character are you?</h1>
          <Question title={ question.title } answers={ question.answers } />
          <button onClick={ this._handleSubmit.bind( this ) }>Next</button>
        </div>
      );

    } else { return <p>The quiz is over.</p>; }
  }

}
