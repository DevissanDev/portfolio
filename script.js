document
  .querySelectorAll(".swiper-button-next, .swiper-button-prev")
  .forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation(); // Detiene la propagación del evento hacia arriba en el DOM
    });
  });

document
  .getElementById("btnScrollcendera")
  .addEventListener("click", function () {
    const target = document.querySelector("#btnScrollcendera");
    if (target) {
      const offset = 3 * 16; // 5rem convertido a píxeles (1rem = 16px)
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: targetPosition - offset,
        behavior: "smooth",
      });
    }
  });

document
  .getElementById("btnScrollcendera2")
  .addEventListener("click", function () {
    const target = document.querySelector("#btnScrollcendera2");
    if (target) {
      const offset = 3 * 16; // 5rem convertido a píxeles (1rem = 16px)
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: targetPosition - offset,
        behavior: "smooth",
      });
    }
  });
document.getElementById("btnScrollchat").addEventListener("click", function () {
  const target = document.querySelector("#btnScrollchat");
  if (target) {
    const offset = 3 * 16; // 5rem convertido a píxeles (1rem = 16px)
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: targetPosition - offset,
      behavior: "smooth",
    });
  }
});

document.getElementById("btnScrolldial").addEventListener("click", function () {
  const target = document.querySelector("#btnScrolldial");
  if (target) {
    const offset = 3 * 16; // 5rem convertido a píxeles (1rem = 16px)
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: targetPosition - offset,
      behavior: "smooth",
    });
  }
});

const texts = document.querySelectorAll(".text");
const sections = document.querySelectorAll(".content");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY + window.innerHeight / 2;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      texts.forEach((text) => text.classList.remove("visible"));
      texts[index].classList.add("visible");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const span = document.querySelector(
    "body > div > header > div > span:nth-child(1)"
  );
  const svgPath = "img/SUBIRD.svg"; // Cambia esto por la ruta real

  window.addEventListener("scroll", () => {
    if (window.scrollY > 2) {
      span.classList.add("scrolled");
      span.innerHTML = `<a style="display: flex; justify-content: left; align-items: start;" href="#presentation"><img src="${svgPath}" alt="Icono" width="auto" height="40rem"></a>`; // Inserta la imagen
    } else {
      span.classList.remove("scrolled");
      span.textContent = "D"; // Vuelve al texto original
    }
  });
});

const button = document.querySelector(".menu-toggle");
const menu = document.getElementById("contact-menu");

button.addEventListener("click", (e) => {
  e.stopPropagation(); // Evita que el menú se cierre al hacer clic en el botón
  const expanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!expanded));
  button.classList.toggle("active");
  menu.classList.toggle("show");
});

// Cierra el menú y remueve "active" si se hace clic fuera
document.addEventListener("click", (e) => {
  if (!button.contains(e.target) && !menu.contains(e.target)) {
    button.setAttribute("aria-expanded", "false");
    button.classList.remove("active");
    menu.classList.remove("show");
  }
});
