// *************************************
//
//   Share
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
    return(
      <div className='share'>
        <p>Share your character with the world!</p>
        <a href='#'>Twitter</a>
        <a href='#'>Facebook</a>
        <a href='#'>Google+</a>
      </div>
    );
  }

}
