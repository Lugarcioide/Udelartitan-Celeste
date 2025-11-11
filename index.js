let doodleImg = document.querySelector("#sec1 img");

let images = [
    "img/doodle1.svg",
    "img/doodle2.svg",
    "img/doodle3.svg",
    "img/doodle4.svg",
    "img/doodle5.svg",
    "img/doodle6.svg"
];

let index = 0;

//* Cambia imagen al hacer click
doodleImg.addEventListener("click", () => {
    index = (index + 1) % images.length;
    doodleImg.classList.add("fade");

    setTimeout(() => {
        doodleImg.src = images[index];
        doodleImg.classList.remove("fade");
    }, 300);
});

let doodle = document.querySelector("#doodle");
let brush = document.querySelector("#brush");

let brushFrames = ["img/brush1.png", "img/brush2.png"];
let frame = 0;
let animInterval = null;

//* Mostrar el cepillo y ocultar el cursor
doodle.addEventListener("mouseenter", () => {
    brush.style.display = "block";
    document.body.classList.add("hide-cursor");

    brush.src = brushFrames[0];
    animInterval = setInterval(() => {
        frame = (frame + 1) % brushFrames.length;
        brush.src = brushFrames[frame];
    }, 150);
});

//* Mover el cepillo con el mouse
doodle.addEventListener("mousemove", (e) => {
    brush.style.left = `${e.pageX}px`;
    brush.style.top = `${e.pageY}px`;
});

//* Detener la animación y volver a mostrar el cursor
doodle.addEventListener("mouseleave", () => {
    clearInterval(animInterval);
    brush.style.display = "none";
    document.body.classList.remove("hide-cursor");
});