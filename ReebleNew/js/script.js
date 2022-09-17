// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}


const myFunction = () => {
  document.getElementById("first").style.display ='block'
  document.getElementById("second").style.display ='none'
  document.getElementById("third").style.display ='none'
  document.getElementById("fourth").style.display ='none'
  document.getElementById("fifth").style.display ='none'
  document.getElementById("sixth").style.display ='none'
  document.getElementById("seventh").style.display ='none'
  document.getElementById("eighth").style.display ='none'
}

const myFunction2 = () => {
  document.getElementById("second").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("third").style.display ='none'
  document.getElementById("fourth").style.display ='none'
  document.getElementById("fifth").style.display ='none'
  document.getElementById("sixth").style.display ='none'
  document.getElementById("seventh").style.display ='none'
  document.getElementById("eighth").style.display ='none'
}

const myFunction3 = () => {
  document.getElementById("third").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("second").style.display ='none'
  document.getElementById("fourth").style.display ='none'
  document.getElementById("fifth").style.display ='none'
  document.getElementById("sixth").style.display ='none'
  document.getElementById("seventh").style.display ='none'
  document.getElementById("eighth").style.display ='none'
}
const myFunction4 = () => {
  document.getElementById("fourth").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("second").style.display ='none'
  document.getElementById("third").style.display ='none'
  document.getElementById("fifth").style.display ='none'
  document.getElementById("sixth").style.display ='none'
  document.getElementById("seventh").style.display ='none'
  document.getElementById("eighth").style.display ='none'
}
const myFunction5 = () => {
  document.getElementById("fifth").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("second").style.display ='none'
  document.getElementById("fourth").style.display ='none'
  document.getElementById("third").style.display ='none'
  document.getElementById("sixth").style.display ='none'
  document.getElementById("seventh").style.display ='none'
  document.getElementById("eighth").style.display ='none'
}
const myFunction6 = () => {
  document.getElementById("sixth").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("second").style.display ='none'
  document.getElementById("fourth").style.display ='none'
  document.getElementById("fifth").style.display ='none'
  document.getElementById("third").style.display ='none'
  document.getElementById("seventh").style.display ='none'
  document.getElementById("eighth").style.display ='none'
}
const myFunction7 = () => {
  document.getElementById("seventh").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("second").style.display ='none'
  document.getElementById("fourth").style.display ='none'
  document.getElementById("fifth").style.display ='none'
  document.getElementById("sixth").style.display ='none'
  document.getElementById("third").style.display ='none'
  document.getElementById("eighth").style.display ='none'
}
const myFunction8 = () => {
  document.getElementById("eighth").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("second").style.display ='none'
  document.getElementById("fourth").style.display ='none'
  document.getElementById("fifth").style.display ='none'
  document.getElementById("sixth").style.display ='none'
  document.getElementById("third").style.display ='none'
  document.getElementById("seventh").style.display ='none'
}
$('.js-anchor-link').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
});