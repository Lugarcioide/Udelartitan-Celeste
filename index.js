// Seleccionamos la imagen dentro de #sec1
let doodleImg = document.querySelector("#sec1 img");

// Lista de imágenes del carrusel
let imagenes = [
    "img/doodle1.svg",
    "img/doodle2.svg",
    "img/doodle3.svg",
    "img/doodle4.svg",
    "img/doodle5.svg",
    "img/doodle6.svg"
];

let indice = 0;

// Cuando se hace clic sobre la imagen, cambiar a la siguiente
doodleImg.addEventListener("click", () => {
    indice = (indice + 1) % imagenes.length; // bucle infinito
    doodleImg.classList.add("fade");

    // Espera que termine la transición y cambia la imagen
    setTimeout(() => {
        doodleImg.src = imagenes[indice];
        doodleImg.classList.remove("fade");
    }, 300); // coincide con la duración del fade
});

let doodle = document.querySelector("#doodle");
let brush = document.querySelector("#brush");

let brushFrames = ["img/brush1.png", "img/brush2.png"];
let frame = 0;
let animInterval = null;

// Mostrar el cepillo y ocultar el cursor
doodle.addEventListener("mouseenter", () => {
    brush.style.display = "block";
    document.body.classList.add("hide-cursor"); // 🔹 oculta el cursor

    brush.src = brushFrames[0];
    animInterval = setInterval(() => {
        frame = (frame + 1) % brushFrames.length;
        brush.src = brushFrames[frame];
    }, 150);
});

// Mover el cepillo con el mouse
doodle.addEventListener("mousemove", (e) => {
    brush.style.left = `${e.pageX}px`;
    brush.style.top = `${e.pageY}px`;
});

// Detener la animación y volver a mostrar el cursor
doodle.addEventListener("mouseleave", () => {
    clearInterval(animInterval);
    brush.style.display = "none";
    document.body.classList.remove("hide-cursor"); // 🔹 vuelve a mostrar el cursor
});