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
      'This is the first answer.',
      'This is the second answer.',
      'This is the third answer.',
    ]
  },
  {
    title   : 'This is the second question?',
    answers : [
      'This is the first answer.',
      'This is the second answer.',
      'This is the third answer.',
    ]
  },
  {
    title   : 'This is the third question?',
    answers : [
      'This is the first answer.',
      'This is the second answer.',
      'This is the third answer.',
    ]
  },
  {
    title   : 'This is the fourth question?',
    answers : [
      'This is the first answer.',
      'This is the second answer.',
      'This is the third answer.',
    ]
  },
  {
    title   : 'This is the fifth question?',
    answers : [
      'This is the first answer.',
      'This is the second answer.',
      'This is the third answer.',
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
