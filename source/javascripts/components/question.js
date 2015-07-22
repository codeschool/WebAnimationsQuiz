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

  render() {
    var answers = this.props.answers.map( ( answer, index ) => {
      return(
        <li key={ index } className='answer'>{ answer }</li>
      );
    });

    return(
      <div className='question'>
        <h3>{ this.props.title }</h3>
        <ul className='has-answer'>
          { answers }
        </ul>
      </div>
    );
  }

}
