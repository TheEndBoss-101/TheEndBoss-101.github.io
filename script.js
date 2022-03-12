/*
    File: script.js
    Notes: 
    Purpace: N/A
    By: Webmaster
    At: 12:00 PM, 2/20/2022
*/

function HideDiscordWidget() {
  var x = document.getElementById("DiscordWidget");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//Find body
const container = document.getElementById("container");

//Get the button:
backtotopbtn = document.getElementById("backtotopbtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backtotopbtn.style.display = "block";
  } else {
    backtotopbtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
