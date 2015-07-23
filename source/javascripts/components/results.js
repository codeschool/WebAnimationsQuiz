// *************************************
//
//   Results
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
  }

  render() {
    var results = this.props.data.map( ( answer, index ) => {
      return <li key={ index }>Question #{ index + 1 }: { answer }</li>;
    });

    return(
      <div className='results'>
        <p>The quiz is over. Here are your results:</p>
        <ul>
          { results }
        </ul>
      </div>
    );
  }

}
