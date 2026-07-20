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

