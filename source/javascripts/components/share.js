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
      <div className='card card--b share'>
        <p className='share-msg'>Share your character with the world!</p>
        <a className='btn share-link' href='#'>Twitter</a>
        <a className='btn share-link' href='#'>Facebook</a>
        <a className='btn share-link' href='#'>Google+</a>
      </div>
    );
  }

}
