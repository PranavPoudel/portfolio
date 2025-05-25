const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

// Scrollspy to highlight nav links based on scroll position
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 110;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Remove scroll on load to section; instead load page at top
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
