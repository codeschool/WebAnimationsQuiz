// *************************************
//
//   Application
//   -> Manifest
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

import React from 'react';
import App from './components/app';

// -------------------------------------
//   Characters
// -------------------------------------

var characters     = [ 'Unicorn', 'Rainbow', 'Cupcake', 'Donut' ];
var characterNames = [ 'Sparkles', 'Pierre', 'Sweetheart', 'Beau Knut' ];

// -------------------------------------
//   Questions
// -------------------------------------

var questions = [
  {
    title   : 'This is the first question?',
    answers : [
      'Unicorn',
      'Rainbow',
      'Cupcake',
      'Donut',
    ]
  },
  {
    title   : 'This is the second question?',
    answers : [
      'Unicorn',
      'Rainbow',
      'Cupcake',
      'Donut',
    ]
  },
  {
    title   : 'This is the third question?',
    answers : [
      'Unicorn',
      'Rainbow',
      'Cupcake',
      'Donut',
    ]
  },
  {
    title   : 'This is the fourth question?',
    answers : [
      'Unicorn',
      'Rainbow',
      'Cupcake',
      'Donut',
    ]
  },
  {
    title   : 'This is the fifth question?',
    answers : [
      'Unicorn',
      'Rainbow',
      'Cupcake',
      'Donut',
    ]
  },
];

// -------------------------------------
//   Base
// -------------------------------------

React.render(
  <App
    questions={ questions }
    characters={ characters }
    characterNames={ characterNames } />,

  document.getElementById( 'app' )
);
