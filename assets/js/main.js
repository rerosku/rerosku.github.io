// ===== Blog Category Toggle =====
let activeCategory = null;

function toggleCategory(category) {
  const wrapper = document.getElementById('posts-' + category);
  const instruction = document.getElementById('blog-instruction');
  const allButtons = document.querySelectorAll('.category-card');
  const allContainers = document.querySelectorAll('.blog-posts-container');

  // Close all containers first
  allContainers.forEach(c => c.classList.remove('open'));
  allButtons.forEach(btn => btn.classList.remove('active', 'ring-2', 'ring-salvia-400'));

  // Click on same category → close and return
  if (activeCategory === category) {
    activeCategory = null;
    instruction.classList.remove('hidden');
    return;
  }

  // Activate the selected category
  activeCategory = category;
  const btn = document.getElementById('cat-btn-' + category);
  btn.classList.add('active', 'ring-2', 'ring-salvia-400');
  instruction.classList.add('hidden');

  // Show container, then trigger animation on next frame
  wrapper.classList.add('open');
  // Force reflow so the transition plays
  wrapper.offsetHeight;
  wrapper.style.opacity = '1';
  wrapper.style.transform = 'translateY(0)';

  // Smooth scroll to posts with offset for fixed navbar
  setTimeout(() => {
    const y = wrapper.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, 50);
}

// ===== Navbar scroll behavior =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add('bg-crema-50/90', 'nav-blur', 'shadow-sm', 'border-b', 'border-salvia-100/50');
  } else {
    navbar.classList.remove('bg-crema-50/90', 'nav-blur', 'shadow-sm', 'border-b', 'border-salvia-100/50');
  }

  lastScroll = currentScroll;
});

// ===== Mobile menu toggle =====
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// ===== Intersection Observer for reveal animations =====
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});