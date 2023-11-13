(() => {
  const mobileMenu = document.querySelector(".burger-menu");
  const openMenuBtn = document.querySelector(".menu-btn");
  const closeMenuBtn = document.querySelector(".js-close-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("is-open");
    document.body.classList.toggle("scroll-visible");
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  document.querySelectorAll(".mobile-nav-list a").forEach((item) => {
    item.addEventListener("click", toggleMenu);
  });

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
  });
})();
