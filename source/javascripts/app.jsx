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
//   Questions
// -------------------------------------

var questions = [
  {
    title   : 'This is the first question?',
    answers : [
      'One',
      'Two',
    ]
  },
  {
    title   : 'This is the second question?',
    answers : [
      'Three',
      'Four',
    ]
  },
  {
    title   : 'This is the third question?',
    answers : [
      'Five',
      'Six',
    ]
  },
  {
    title   : 'This is the fourth question?',
    answers : [
      'Seven',
      'Eight',
    ]
  },
  {
    title   : 'This is the fifth question?',
    answers : [
      'Nine',
      'Ten',
    ]
  },
];

// -------------------------------------
//   Base
// -------------------------------------

React.render(
  <Quiz data={ questions } />,
  document.getElementById( 'app' )
);
