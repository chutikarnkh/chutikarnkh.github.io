const mainNav = document.querySelector('.main-nav');
const link = document.querySelectorAll('.main-nav-link');


//==================================
// Active link
//==================================
mainNav.addEventListener('click', (e) => {
  if (e.target.classList.contains('main-nav-link')) {
    removeActive();
    e.target.classList.add('active');
  }
});


function removeActive() {
  for (let i = 0; i < link.length; i++) {
    link[i].classList.remove('active');
  }
}


//==================================
// Smooth scrolling animation
//==================================
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach((link) => {
  link.addEventListener('click', (e) => {

    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    // Scroll to other links
    if (href !== "#" && href.startsWith('#')) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//==================================
// Sticky navigation
//==================================
const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver((entries) => {
  const ent = entries[0];
  if (!ent.isIntersecting) {
    document.body.classList.add('sticky');
  }

  if (ent.isIntersecting) {
    document.body.classList.remove('sticky');
  }
}, {
  root: null,
  threshold: 0,
  rootMargin: '-80px'
});
obs.observe(sectionHeroEl);

feather.replace();