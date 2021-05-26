// (function() {
//   'use strict';

//   // YOUR CODE HERE
// })();

document.addEventListener('DOMContentLoaded', function () {
  let allButtons = document.querySelectorAll('.button')

  allButtons.forEach((button) => {
    button.addEventListener('mouseenter', function (event) {
      console.log(`Entered ${event.target.textContent} button`)
    })

    button.addEventListener('mouseleave', function (event) {
      console.log(`Left ${event.target.textContent} button`)
    })
  })



  let stopButton = document.querySelector('#stopButton')
  let stopBulb = document.querySelector('#stopLight')
  stopButton.addEventListener('click', function () {
    if (stopBulb.style.backgroundColor === 'red') {
      stopBulb.style.backgroundColor = 'black'
    } else {
      stopBulb.style.backgroundColor = 'red'
    }
  })

  let slowButton = document.querySelector('#slowButton')
  let slowBulb = document.querySelector('#slowLight')
  slowButton.addEventListener('click', function () {
    if (slowBulb.style.backgroundColor === 'orange') {
      slowBulb.style.backgroundColor = 'black'
    } else {
      slowBulb.style.backgroundColor = 'orange'
    }
  })

  let goButton = document.querySelector('#goButton')
  let goBulb = document.querySelector('#goLight')
  goButton.addEventListener('click', function () {
    if (goBulb.style.backgroundColor === 'green') {
      goBulb.style.backgroundColor = 'black'
    } else {
      goBulb.style.backgroundColor = 'green'
    }
  })


})
