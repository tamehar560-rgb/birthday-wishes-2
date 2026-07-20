document.addEventListener("DOMContentLoaded", function () {
    const cake = document.querySelector(".cake");

    cake.addEventListener("click", function () {
        alert("🎂 Happy Birthday! May your day be filled with happiness and smiles ❤️");
    });
});
function showWish() {
    alert("🎂 Happy Birthday! May your day be full of happiness, success and beautiful moments ❤️");
}
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

setInterval(createConfetti, 200);
const colors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff"
];

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

setInterval(createConfetti, 200);
const text = "🎂 Happy Birthday! Wishing you lots of happiness and success ❤️";
let index = 0;

function typeMessage() {
    if (index < text.length) {
        document.querySelector("p").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeMessage, 100);
    }
}

typeMessage();
let colors = ["#ff9a9e", "#fad0c4", "#a1c4fd", "#c2e9fb"];

let i = 0;

setInterval(() => {
    document.body.style.background = 
    `linear-gradient(45deg, ${colors[i]}, #ffffff)`;

    i++;

    if (i >= colors.length) {
        i = 0;
    }

}, 2000);
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.className = "heart";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);
function playMusic() {
    let music = document.getElementById("birthdayMusic");
    music.play();
                                     }
function createStar() {
    const star = document.createElement("div");

    star.innerHTML = "✨";
    star.className = "star";

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 5000);
}

setInterval(createStar, 700);
function createBalloon() {
    const balloon = document.createElement("div");

    balloon.innerHTML = "🎈";
    balloon.className = "balloon";

    balloon.style.left = Math.random() * window.innerWidth + "px";
    balloon.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.body.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 6000);
}

setInterval(createBalloon, 1000);
