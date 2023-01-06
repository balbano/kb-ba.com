"use strict";

// src values to rotate through when you click on the logo.
const logoSrcs = [
    "assets/logo_rotation/logo_600x600.png",
    "assets/logo_rotation/familiar_600x600.png",
    "assets/logo_rotation/familiar_closeup_600x600.png"
];
var logoSrcIndex = 0;

// Go to the next image in the array of srcs.
function nextLogoImage(evt) {
    evt.preventDefault(); // Prevents mouse+touch double click.
    logoSrcIndex = (logoSrcIndex + 1) % logoSrcs.length; // Wrap back to 0.
    document.getElementById("logo").src = logoSrcs[logoSrcIndex];
}

// Listen for a click or a finger tap.
// Use preventDefault() in the function to prevent double clicking.
const logo = document.getElementById("logo");
logo.addEventListener("click", nextLogoImage);
logo.addEventListener("touchstart", nextLogoImage);
