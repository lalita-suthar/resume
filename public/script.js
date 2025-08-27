// Simple scroll animation for sections
const sections = document.querySelectorAll("section, header, footer");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY + window.innerHeight > sectionTop + 100) {
      section.classList.add("fade-in");
    }
  });
});
