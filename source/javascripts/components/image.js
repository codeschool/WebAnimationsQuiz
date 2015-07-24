// *************************************
//
//   Image
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

  // ----- Constructor ----- //

  constructor( props ) {
    super( props );

    this.state = {
      loaded: false
    }
  }

  // ----- On Image Load ----- //

  _onImageLoad() {
    this.setState( { loaded: true } );
  }

  // ----- Component Did Mount ----- //

  componentDidMount() {
    var img    = React.findDOMNode( this.refs.img );
    console.log( img );
    img.onload = this._onImageLoad.bind( this );
  }

  // ----- Render ----- //

  render() {
    var classNames = this.state.loaded ? `${ this.props.className } is-loaded` : this.props.className;

    return(
      <img
        ref='img'
        src={ this.props.src }
        alt={ this.props.alt }
        className={ classNames } />
    );
  }

}
