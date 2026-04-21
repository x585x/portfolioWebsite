// this code is responsible for hiding the songs menu until a password is provided



let url_string = window.location.href;
console.log("hi");
let url = new URL(url_string);
let password = url.searchParams.get("password");

let authenticated = url.searchParams.get("authenticated");
if ((authenticated == null) || (authenticated == false)) {
    authenticated = false;
    url.searchParams.set("authenticated", false);
    window.location.href = url.toString();
}

// check if password is correct or if user has been authenticated
if (password == "pass3434") {
    authenticated = "true";
    url.searchParams.delete("password");
    url.searchParams.set("authenticated", "true");
    window.location.href = url.toString();
}

if (authenticated == "true") {
    // remove the password box from the page
    let content = document.getElementsByClassName("content")[0];
    let password_section = document.getElementById("password-section"); // a div containing password related html
    content.removeChild(password_section);

    // show the music menu
    let songsMenu = document.getElementsByClassName("songs-menu")[0];
    songsMenu.style.display = "block";

    // show my spotify in the footer
    let footerText = document.querySelector("footer p");
    footerText.textContent = "All songs written by me. They can be found on my spotify: ";
    let footerLink = document.createElement("a");
    footerLink.href = "https://open.spotify.com/artist/2Jtat0jIkYW7WNgLWUNpgp?si=A4uyBLD5Qj6oo9AwaYk2rw";
    footerLink.textContent = "EllaElla.";
    footerText.appendChild(footerLink);
}

else if (password != null) {
    // show an incorrect password message when the wrong password is entered
    let password_form = document.getElementById("password-form");
    let incorrect = document.createElement("label");
    incorrect.style.color = "red";
    incorrect.textContent = "Incorrect Password.";
    password_form.appendChild(incorrect);
}