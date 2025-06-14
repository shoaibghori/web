document.addEventListener("DOMContentLoaded", function () {
  // Search bar toggle
  const toggle = document.getElementById('searchToggle');
  const form = document.getElementById('searchForm');

  if (toggle && form) {
    toggle.addEventListener('click', () => {
      form.classList.toggle('active');
      const input = form.querySelector('.search-input');
      if (form.classList.contains('active')) {
        setTimeout(() => input.focus(), 150);
      }
    });

    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !form.contains(e.target)) {
        form.classList.remove('active');
      }
    });
  }



  // Assign active class to navbar links
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href) {
      const linkPath = href.split("/").pop();
      if (linkPath === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
});