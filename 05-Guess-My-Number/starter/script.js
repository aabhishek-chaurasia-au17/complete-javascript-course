'use strict';

let score = 20;
let highscore = 0;

const secretNumber = Math.trunc(Math.random() *20) +1

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if(!guess){
      //  document.querySelector('.message').textContent = 
      displayMessage("No Number!")

  }else if (guess === secretNumber) {
       displayMessage("Number is Correct")
      //  document.querySelector('.message').textContent = "Number is Correct"
       document.querySelector('.number').textContent = secretNumber

       score++
       document.querySelector('.score').textContent = score;
       document.querySelector('body').style.backgroundColor = '#60b347';
       document.querySelector('.number').style.width = '30rem';

       if (score > highscore) {
           highscore = score;
           document.querySelector('.highscore').textContent = highscore;
       }

  }else if(guess !== secretNumber){
      if (score > 1) {
        // document.querySelector('.message').textContent = guess > secretNumber ? "Number is too Big" : "Number is too small";
        displayMessage( guess > secretNumber ? "Number is too Big" : "Number is too small" )
        score--
        document.querySelector('.score').textContent = score
        
      }else{
        // document.querySelector('.message').textContent = "You Loos the game"
        displayMessage( "You Loos the game" )
        document.querySelector('body').style.backgroundColor = 'red';
     }
  }
  // else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = "Number is too Big"
  //       score--
  //       document.querySelector('.score').textContent = score
  //     }else{
  //       document.querySelector('.message').textContent = "You Loos the game"
  //       document.querySelector('body').style.backgroundColor = 'red';
  //    }
       
  // } else if (guess < secretNumber) {
  //       if (score > 1) {
  //           document.querySelector('.message').textContent = "Number is too small"
  //           score--
  //           document.querySelector('.score').textContent = score
  //       }else{
  //           document.querySelector('.message').textContent = "You Loos the game";
  //           document.querySelector('body').style.backgroundColor = 'red';
  //       }
  // } else {
  // }

})

let again = document.querySelector('.again');

again.addEventListener('click', function(){
    score = 20;
    document.querySelector('.guess').value;
    // document.querySelector('.message').textContent = 'Start guessing...'
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
})