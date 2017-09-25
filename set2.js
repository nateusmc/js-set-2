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