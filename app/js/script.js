const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function(){
  console.log('click hamburger');

  if(header.classList.contains('open')){ // Closes Hamburger Menu
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  }
  else { // Open Hamburger Menu
    header.classList.add('open');
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
  }
});


// Triggers hamburger animation thats in CSS file

// Grabs btnHamburger id from index.html and saves it in btnHamburger variable
//    const btnHamburger = document.querySelector('#btnHamburger');

// Adds a listener to the variable and listens for a click also adds a function
//    btnHamburger.addEventListener('click', function(){
//      console.log('click hamburger');

//Searches the id for a class named "open"
//Function: If the variable (id) contains the class "open"
//    if(btnHamburger.classList.contains('open')){

//then remove the class "open" when a click is heard
//     btnHamburger.classList.remove('open');
//    }

//if it doesn't have the class then add the class to trigger
//    else {
//      btnHamburger.classList.add('open');
//    }
//  });