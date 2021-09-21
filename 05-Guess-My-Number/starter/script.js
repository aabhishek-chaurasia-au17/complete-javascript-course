'use strict';


// console.log(document.querySelector('.message').textContent);

//

// document.querySelector('.guess').value = 50;

const number = Math.trunc(Math.random() *20) +1
document.querySelector('.number').textContent = number

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if(!guess){
       document.querySelector('.message').textContent = "No Number!"
  }
})