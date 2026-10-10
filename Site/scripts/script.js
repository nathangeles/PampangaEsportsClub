/*
    Student Name: Nathaniel Angeles
    File Name: Script.js
*/

//Global variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");


//Hamburger menu function

function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("pec-logo")
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.dispay = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

//Functions to display example video
function burpees() {
    videoSource.src = "media/burpees.mp4";
    descriptionSource = "media/burpees-description.vtt";
    video.style.display = "block";
    video.load();
}

//Functions to display plank example video
function plank() {
    videoSource.src = "media/plank.mp4";
    descriptionSource = "media/plank-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

//Functions to display mountain example video
function mountain() {
    videoSource.src = "media/mountain.mp4";
    descriptionSource = "media/mountain-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display a promo code
function discount() {
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "Promo Code: D25START";
    promo.style.color = "#ff0000";
    promo.style.fontSize = "2em";
}