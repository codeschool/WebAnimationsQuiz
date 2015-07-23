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
import Results from './results';

// -------------------------------------
//   Base
// -------------------------------------

export default class extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      current: 0,
      answers: []
    };
  }

  _handleSubmit( answer ) {
    var next       = ++this.state.current;
    var newAnswers = this.state.answers.concat( [ answer ] );

    this.setState({ current: next, answers: newAnswers });
  }

  render() {
    var question = this.props.questions[ this.state.current ];

    if ( question ) {

      return(
        <div className='quiz'>
          <Question
            title={ question.title }
            answers={ question.answers }
            submitHandler={ this._handleSubmit.bind( this ) } />
        </div>
      );

    } else { return <Results results={ this.props.results } answers={ this.state.answers } />; }
  }

}
