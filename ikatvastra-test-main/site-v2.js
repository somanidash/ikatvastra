const button = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const intro = document.querySelector(".brand-intro");
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  intro?.remove();
  document.body.classList.remove("intro-playing");
} else {
  window.setTimeout(() => {
    intro?.remove();
    document.body.classList.remove("intro-playing");
  }, 4400);
}
button?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", String(open));
});
nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  button?.setAttribute("aria-expanded", "false");
}));
