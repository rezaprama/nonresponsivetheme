 window.onscroll = function() {myFunction()};

// Navbar
var navbar = document.getElementById("navbar");

// Position of navbar
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Footerbar

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("footerbar").style.bottom = "0";
  } else {
    document.getElementById("footerbar").style.bottom = "0px";
  }
  prevScrollpos = currentScrollPos;
}