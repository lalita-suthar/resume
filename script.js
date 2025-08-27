// Fade-in sections on scroll
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

// Vertical Project Carousel
document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project-card');
  const prevBtn = document.getElementById('prev-project');
  const nextBtn = document.getElementById('next-project');
  let currentIndex = 0;

  function showProject(index) {
    projects.forEach((proj, i) => {
      proj.classList.toggle('active', i === index);
    });
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    showProject(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    showProject(currentIndex);
  });

  // Initialize first project
  showProject(currentIndex);
});
