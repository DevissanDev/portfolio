

  document.querySelector(".slidercendera").addEventListener("click", function() {
    if (!this.classList.contains("slidercenderaactive")) {
        this.classList.add("slidercenderaactive");
        // Desactivar el scroll
        document.body.style.overflow = "hidden";
        // Mostrar cerrarfotos con display: flex
        document.querySelector(".cerrarfotos").style.display = "flex";
        document.querySelector(".capa").style.display = "flex";
        document.querySelector(".mySwiper7").style.display = "none";
        document.querySelectorAll(".mySwiper6 .swiper-slide img").forEach(img => {
          img.style.height = "22rem";
          img.style.borderRadius = "20px";
      });
     
    }
});

document.querySelector(".sliderchat").addEventListener("click", function() {
    if (!this.classList.contains("sliderchatactive")) {
        this.classList.add("sliderchatactive");
        // Desactivar el scroll
        document.body.style.overflow = "hidden";
        // Mostrar cerrarfotos con display: flex
        document.querySelector(".cerrarfotos").style.display = "flex";
        document.querySelector(".capa").style.display = "flex";
        document.querySelector(".mySwiper5").style.display = "none";
        document.querySelectorAll(".mySwiper4 .swiper-slide img").forEach(img => {
          img.style.height = "22rem";
          img.style.borderRadius = "20px";
      });
    }
});

document.querySelector(".sliderdial").addEventListener("click", function() {
    if (!this.classList.contains("sliderdialactive")) {
        this.classList.add("sliderdialactive");
        // Desactivar el scroll
        document.body.style.overflow = "hidden";
        // Mostrar cerrarfotos con display: flex
        document.querySelector(".cerrarfotos").style.display = "flex";
        document.querySelector(".capa").style.display = "flex";
        document.querySelector(".mySwiper3").style.display = "none";
        document.querySelectorAll(".mySwiper2 .swiper-slide img").forEach(img => {
          img.style.height = "22rem";
          img.style.borderRadius = "20px";
      });
    }
});


document.querySelector(".cerrarfotos").addEventListener("click", function() {
  // Remover las clases activas
  document.querySelector(".slidercendera").classList.remove("slidercenderaactive");
  document.querySelector(".sliderchat").classList.remove("sliderchatactive");
  document.querySelector(".sliderdial").classList.remove("sliderdialactive");

  // Activar el scroll de nuevo
  document.body.style.overflow = "auto";

  // Ocultar cerrarfotos
  this.style.display = "none";
  document.querySelector(".capa").style.display = "none";
  document.querySelector(".mySwiper7").style.display = "block";
  document.querySelectorAll(".mySwiper6 .swiper-slide img").forEach(img => {
    img.style.height = "17rem";
    img.style.borderRadius = "0px";
});
document.querySelector(".mySwiper5").style.display = "block";
  document.querySelectorAll(".mySwiper4 .swiper-slide img").forEach(img => {
    img.style.height = "17rem";
    img.style.borderRadius = "0px";
});
document.querySelector(".mySwiper3").style.display = "block";
  document.querySelectorAll(".mySwiper2 .swiper-slide img").forEach(img => {
    img.style.height = "17rem";
    img.style.borderRadius = "0px";
});

});


document.querySelectorAll(".swiper-button-next, .swiper-button-prev").forEach(button => {
  button.addEventListener("click", function(event) {
      event.stopPropagation(); // Detiene la propagación del evento hacia arriba en el DOM
  });
});





document.getElementById("btnScrollcendera").addEventListener("click", function() {
  const target = document.querySelector("#btnScrollcendera");
  if (target) {
      const offset = 3 * 16; // 5rem convertido a píxeles (1rem = 16px)
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      
      
      
      window.scrollTo({
          top: targetPosition - offset,
          behavior: "smooth"
      });

    
  }
});
document.getElementById("btnScrollchat").addEventListener("click", function() {
  const target = document.querySelector("#btnScrollchat");
  if (target) {
      const offset = 3 * 16; // 5rem convertido a píxeles (1rem = 16px)
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
          top: targetPosition - offset,
          behavior: "smooth"
      });
  }
});
  
document.getElementById("btnScrolldial").addEventListener("click", function() {
  const target = document.querySelector("#btnScrolldial");
  if (target) {
      const offset = 3 * 16; // 5rem convertido a píxeles (1rem = 16px)
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
          top: targetPosition - offset,
          behavior: "smooth"
      });
  }
});
  
  


    const texts = document.querySelectorAll('.text');
    const sections = document.querySelectorAll('.content');

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                texts.forEach(text => text.classList.remove('visible'));
                texts[index].classList.add('visible');
            }
        });
    });


    document.addEventListener("DOMContentLoaded", () => {
      const span = document.querySelector("body > div > header > div > span:nth-child(1)");
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
    
const button = document.querySelector('.menu-toggle');
const menu = document.getElementById('contact-menu');

button.addEventListener('click', (e) => {
  e.stopPropagation(); // Evita que el menú se cierre al hacer clic en el botón
  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!expanded));
  button.classList.toggle('active');
  menu.classList.toggle('show');
});

// Cierra el menú y remueve "active" si se hace clic fuera
document.addEventListener('click', (e) => {
  if (!button.contains(e.target) && !menu.contains(e.target)) {
    button.setAttribute('aria-expanded', 'false');
    button.classList.remove('active');
    menu.classList.remove('show');
  }
});
