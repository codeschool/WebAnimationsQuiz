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
//   Results
// -------------------------------------

var results = [
  {
    character : '1',
    answers   : [ 'One', 'Three', 'Five' ]
  },
  {
    character : '2',
    answers   : [ 'Two', 'Four', 'Six' ]
  },
  {
    character : '3',
    answers   : [ 'One', 'Five', 'Nine' ]
  },
  {
    character : '4',
    answers   : [ 'Two', 'Six', 'Ten' ]
  },
  {
    character : '5',
    answers   : [ 'One', 'Six', 'Ten' ]
  }
];

// -------------------------------------
//   Base
// -------------------------------------

React.render(
  <Quiz questions={ questions } results={ results } />,
  document.getElementById( 'app' )
);
