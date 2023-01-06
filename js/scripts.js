function nextLogoImage(evt) {
    evt.preventDefault(); // Prevents both both a mouse and touch event from being delivered.
    const logoImage = document.getElementById("logo");
    const sources = [
        "assets/logo_rotation/logo_600x600.png",
        "assets/logo_rotation/familiar_600x600.png",
        "assets/logo_rotation/familiar_closeup_600x600.png"
    ];
    switch(logoImage.getAttribute("src")) {
        case sources[0]:
            logoImage.src=sources[1];
            break;
        case sources[1]:
            logoImage.src=sources[2];
            break;
        default:
            logoImage.src=sources[0];
    }
}

const logo = document.getElementById("logo");
logo.addEventListener("click", nextLogoImage);
logo.addEventListener("touchstart", nextLogoImage);
