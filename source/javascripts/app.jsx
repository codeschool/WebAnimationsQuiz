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
    title   : 'What do you value the most?',
    answers : [
      'Intelligence',
      'Friendship',
      'Power',
      'Candy',
    ]
  },
  {
    title   : 'If you could live anywhere, where would you choose?',
    answers : [
      'New York City',
      'Iceland',
      'Iowa',
      'A field of lollipops',
    ]
  },
  {
    title   : 'Your friends would say you’re…',
    answers : [
      'Sweet',
      'Sarcastic',
      'Supportive',
      'I don’t have any friends',
    ]
  },
  {
    title   : 'You have a day to yourself — how do you spend it?',
    answers : [
      'All by myself',
      'Outsmarting someone',
      'Hanging out with friends',
      'Eating candy',
    ]
  },
  {
    title   : 'What are you most afraid of?',
    answers : [
      'Socializing',
      'Being alone',
      'Not living up to my full potential',
      'Running out of candy',
    ]
  },
];

// -------------------------------------
//   Answer Key
// -------------------------------------

var answerKey = [
  {
    character : 'Unicorn',
    answers   : [
      'Candy',
      'A field of lollipops',
      'Supportive',
      'Eating candy',
      'Running out of candy'
    ]
  },
  {
    character : 'Rainbow',
    answers   : [
      'Power',
      'Iceland',
      'I don’t have any friends',
      'All by myself',
      'Socializing'
    ]
  },
  {
    character : 'Cupcake',
    answers   : [
      'Friendship',
      'Iowa',
      'Sweet',
      'Hanging out with friends',
      'Being alone'
    ]
  },
  {
    character : 'Donut',
    answers   : [
      'Intelligence',
      'New York City',
      'Sarcastic',
      'Outsmarting someone',
      'Not living up to my full potential'
    ]
  }
];

// -------------------------------------
//   Base
// -------------------------------------

React.render(
  <App
    answerKey={ answerKey }
    questions={ questions }
    characters={ characters }
    characterNames={ characterNames } />,

  document.getElementById( 'app' )
);
