'use strict';
// //1
// let jediName = function(firstName, lastName) {
//   console.log(lastName.slice(0, 3) + firstName.slice(0, 2));
// };
// jediName('Nate', 'Garrett');

// //2

// let beyond = function (num){
//   if (num === Infinity) {
//     console.log('And beyond');
//   }
//   else if(num > 0 && num !== Infinity) {
//     console.log('To infinity');
//   }

//   else if (num < 0 && num !== Infinity){
//     console.log('To negative infinity');
//   }

//   else {
//     console.log('Staying home');
//   }
// };
// beyond(Infinity);
// beyond(4);
// beyond(-4);
// beyond(0);

// //3

// let decode = function(encodedWord){
//   if (encodedWord.charAt(0) === 'a') {
//     console.log(encodedWord.charAt(1));
//   }
//   else if (encodedWord.charAt(0) === 'b') {
//     console.log(encodedWord.charAt(2));
//   }
//   else if (encodedWord.charAt(0) === 'c') {
//     console.log(encodedWord.charAt(3));
//   }
//   else if (encodedWord.charAt(0) === 'd') {
//     console.log(encodedWord.charAt(4));
//   }
//   else {
//     console.log(' ');
//   }
// };
// decode('craft');
// decode('block');
// decode('argon');
// decode('meter');
// decode('bells');
// decodgite('brown');
// decode('croon');
// decode('droop');

//4
// const monthDays = function(month){
//   switch(month) {
//   case 'January':
//     console.log('January has 31 Days');
//     break;
//   case 'February':
//     console.log('February has 28 Days Sometimes');
//     break;
//   case 'March':
//     console.log('March has 31 Days');
//     break;
//   case 'April':
//     console.log('April has 28 Days');
//     break;
//   case 'May':
//     console.log('May has 31 Days');
//     break;
//   case 'June':
//     console.log('June has 30 Days');
//     break;
//   case 'July':
//     console.log('July has 31 Days');
//     break;
//   case 'August':
//     console.log('August has 31 Days');
//     break;
//   case 'September':
//     console.log('September has 30 Days');
//     break;
//   case 'October':
//     console.log('October has 31 Days');
//     break;
//   case 'November':
//     console.log('November has 30 Days');
//     break;
//   case 'December':
//     console.log('Decemeber has 31 Days');
//     break;
//   }
// };
// monthDays('March');

//5
const Rock = 1;
const Paper = 2;
const Scissors = 3;


//Computer's Code
function RockPaperScissors(userChoice){
  let computer = 1 + Math.floor((Math.random()*3));
  if (userChoice == 1 && computer == 3) {
    console.log('You Win');
  }
  else if (userChoice == 1 && computer == 2) {
    console.log('You Lose');
  }
  else if (userChoice == 2 && computer == 1) {
    console.log('You Win');
  }
  else if (userChoice == 2 && computer == 3) {
    console.log('You Lose');
  }
  else if (userChoice == 3 && computer == 1) {
    console.log('You Lose');
  }
  else if (userChoice == 3 && computer == 2) {
    console.log('You Win');
  }
  else {
    console.log('You Tied');
  }
  console.log(computer);
}

RockPaperScissors(2);