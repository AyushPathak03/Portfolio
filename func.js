// Scroll to Top Button
const scrollBtn = document.createElement('button');
scrollBtn.id = "scrollTopBtn";
scrollBtn.innerText = "↑";
scrollBtn.title = "Scroll to Top";
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.display = "none";
scrollBtn.style.padding = "12px 16px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#fd4766";
scrollBtn.style.color = "#fff";
scrollBtn.style.border = "none";
scrollBtn.style.fontSize = "1.2rem";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.zIndex = "1000";
scrollBtn.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-in Animation for Sections
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));

// Responsive Navigation Toggle (for mobile)
const nav = document.querySelector('nav');
const navToggle = document.createElement('button');
navToggle.id = "navToggle";
navToggle.innerHTML = "☰";
navToggle.style.display = "none";
navToggle.style.background = "none";
navToggle.style.border = "none";
navToggle.style.fontSize = "2rem";
navToggle.style.color = "#fd4766";
navToggle.style.cursor = "pointer";
navToggle.style.marginLeft = "auto";
nav.parentNode.insertBefore(navToggle, nav);

function handleResize() {
  if (window.innerWidth < 700) {
    nav.style.display = "none";
    navToggle.style.display = "block";
  } else {
    nav.style.display = "flex";
    navToggle.style.display = "none";
  }
}
window.addEventListener('resize', handleResize);
handleResize();

navToggle.addEventListener('click', () => {
  if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.background = "#22223b";
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.right = "0";
    nav.style.width = "100%";
    nav.style.padding = "20px 0";
  } else {
    nav.style.display = "none";
  }
});
