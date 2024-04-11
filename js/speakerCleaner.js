let sound = document.getElementById('sound');
let img = document.getElementById("img");
let nav = document.getElementById("nav");
let note = document.getElementById("note");

let move = 0;
let moveCheck = true;
let oneClickCheck = true;

function play() {
    if (oneClickCheck) {
        oneClickCheck = false;
        sound.play();
        move = setInterval(moveImg, 50);
        note.style.backgroundColor = "red";
        note.style.color = "white";
        nav.style.zIndex = "1"; // the nav is behind of the img if the button is clicked.
    }
}

function pause() {
    oneClickCheck = true;
    sound.pause();
    clearInterval(move);
    note.style.backgroundColor = "white";
    note.style.color = "black";
    img.style.transform = "rotate(0deg)";
    nav.style.zIndex = "1";
}

function moveImg() {
    if (moveCheck) {
        img.style.transform = "rotate(2deg)";
        nav.style.zIndex = "1";
        moveCheck = false;
    }
    else {
        img.style.transform = "rotate(-2deg)";
        nav.style.zIndex = "1";
        moveCheck = true;
    }
} 