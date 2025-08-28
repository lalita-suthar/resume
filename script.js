// // Fade-in sections on scroll
// const sections = document.querySelectorAll("section, header, footer");
// window.addEventListener("scroll", () => {
//   const scrollY = window.scrollY;
//   sections.forEach(section => {
//     const sectionTop = section.offsetTop;
//     if (scrollY + window.innerHeight > sectionTop + 100) {
//       section.classList.add("fade-in");
//     }
//   });
// });

// Fade-in scroll animation
const sections = document.querySelectorAll("section, header, footer");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if(scrollY + window.innerHeight > sectionTop + 100){
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

// Skills tab switch
const tabs = document.querySelectorAll(".skill-tabs .tab");
const containers = document.querySelectorAll(".skills-container");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    containers.forEach(c => c.classList.remove("show"));
    document.getElementById(tab.dataset.target).classList.add("show");
  });
});



// Smooth scroll nav
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Download CV
document.getElementById('download-cv').addEventListener('click', () => {
  window.open('Lalita_Suthar_Backend_Developer.pdf', '_blank');
});

// Experience hover details
const roles = document.querySelectorAll('.role-item');
roles.forEach(role => {
  role.addEventListener('mouseenter', () => {
    roles.forEach(r => r.classList.remove('active'));
    role.classList.add('active');
  });
  role.addEventListener('mouseleave', () => {
    role.classList.remove('active');
  });
});

document.getElementById('download-cv').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'Lalita_Suthar_Backend_Developer.pdf'; // path to your PDF
  link.download = 'Lalita_Suthar_Backend_Developer.pdf'; // optional file name
  link.click();
});


