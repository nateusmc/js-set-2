'use strict';
//1
let jediName = function(firstName, lastName) {
  console.log(lastName.slice(0, 3) + firstName.slice(0, 2));
};
jediName('Nate', 'Garrett');

//2

let beyond = function (num){
  if (num === Infinity) {
    console.log('And beyond');
  }
  else if(num > 0 && num !== Infinity) {
    console.log('To infinity');
  }

  else if (num < 0 && num !== Infinity){
    console.log('To negative infinity');
  }

  else {
    console.log('Staying home');
  }
};
beyond(Infinity);
beyond(4);
beyond(-4);
beyond(0);

//3

let decode = function(encodedWord){
  if (encodedWord.charAt(0) === 'a') {
    console.log(encodedWord.charAt(1));
  }
  else if (encodedWord.charAt(0) === 'b') {
    console.log(encodedWord.charAt(2));
  }
  else if (encodedWord.charAt(0) === 'c') {
    console.log(encodedWord.charAt(3));
  }
  else if (encodedWord.charAt(0) === 'd') {
    console.log(encodedWord.charAt(4));
  }
  else {
    console.log(' ');
  }
};
decode('craft');
decode('block');
decode('argon');
decode('meter');
decode('bells');
decode('brown');
decode('croon');
decode('droop');

//4