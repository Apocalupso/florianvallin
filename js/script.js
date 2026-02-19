// ===============================
// Chargement dynamique du header
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  fetch("partials/header.html")
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML("afterbegin", data);
      initNavbar(); // on initialise le menu après insertion
    });

  function initNavbar() {
    const navbar = document.querySelector(".navbar");
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav-links");

    if (!navbar || !toggle || !nav) return;

    function closeMenu() {
      navbar.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    function openMenu() {
      navbar.classList.add("nav-open");
      toggle.setAttribute("aria-expanded", "true");
    }

    toggle.addEventListener("click", () => {
      const isOpen = navbar.classList.contains("nav-open");
      isOpen ? closeMenu() : openMenu();
    });

    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => closeMenu());
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) closeMenu();
    });
  }
});


document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    item.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("phone-toggle");
  const phone = document.getElementById("phone-number");

  toggle.addEventListener("click", function () {
    phone.style.display = "inline";
    toggle.style.display = "none";
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const scrollY = window.scrollY;

  // Limite à 300px pour éviter un blur excessif
  const maxScroll = 300;
  const scrollRatio = Math.min(scrollY / maxScroll, 1);

  // Blur progressif de 6px à 12px
  const blurValue = 6 + (6 * scrollRatio);

  // Opacité progressive de 0.8 à 0.95
  const opacityValue = 0.8 + (0.15 * scrollRatio);

  navbar.style.backdropFilter = `blur(${blurValue}px)`;
  navbar.style.background = `rgba(255, 255, 255, ${opacityValue})`;
});
