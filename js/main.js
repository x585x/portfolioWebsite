// makes textboxes grow and link to a page when clicked
const links = [
    "https://github.com/x585x/AI_Object_Recognition_Script", 
    "https://github.com/x585x/portfolioWebsite",
    "./websiteDemos/aboutMe/index.html", 
    "./websiteDemos/ultrakillDemo/index.html", 
    "./websiteDemos/movieDemo/index.html", 
    "./websiteDemos/formDemo/index.html", 
    "./websiteDemos/dumbAndDumberDemo/index.html", 
    "./websiteDemos/scheduleDemo/index.html"];

let webSamepleButtons = document.getElementsByClassName("text-img-box");

for (let i=0; i<webSamepleButtons.length; i++) {
    // grows when mouse enters
    webSamepleButtons[i].addEventListener("mouseenter", () => {
        webSamepleButtons[i].style.transform = "scale(1.1)";
    });

    // shrink when mouse leaves
    webSamepleButtons[i].addEventListener("mouseleave", () => {
        webSamepleButtons[i].style.transform = "scale(1)";
    })

    // goes to link when pressed
    webSamepleButtons[i].addEventListener("click", () => {
        window.location.href = links[i];
    });
}


// makes images clickable
let freshco = document.getElementById("freshco-img");
let aerosports =  document.getElementById("aerosports-img");

freshco.addEventListener("click", () => {window.location.href = "https://www.freshco.com/";});
aerosports.addEventListener("click", () => {window.location.href = "https://www.aerosportsparks.ca/windsor";});