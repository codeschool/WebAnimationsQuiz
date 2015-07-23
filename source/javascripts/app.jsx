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
import Quiz from './components/quiz'

// -------------------------------------
//   Characters
// -------------------------------------

var characters = [ 'Unicorn', 'Rainbow', 'Cupcake', 'Donut' ];

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
  <Quiz questions={ questions } characters={ characters } />,
  document.getElementById( 'app' )
);
