document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const overlay = document.querySelector(".nav-overlay");
  const mobileNav = document.querySelector(".mobile-nav");

  if (!burger || !overlay || !mobileNav) return;

  const openMenu = () => {
    burger.classList.add("open");
    overlay.classList.add("open");
    mobileNav.classList.add("open");
    burger.setAttribute("aria-expanded", "true");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    burger.classList.remove("open");
    overlay.classList.remove("open");
    mobileNav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  burger.addEventListener("click", () => {
    burger.classList.contains("open") ? closeMenu() : openMenu();
  });

  overlay.addEventListener("click", closeMenu);

  mobileNav.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 650) closeMenu();
  });
});
