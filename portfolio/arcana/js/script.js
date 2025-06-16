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

    // === Dropdown toggle for mobile ===
  // const dropdowns = document.querySelectorAll(".nav-item.dropdown");

  // dropdowns.forEach(dropdown => {
  //   const link = dropdown.querySelector(".nav-link");

  //   if (link) {
  //     link.addEventListener("click", function (e) {
  //       const isMobile = window.innerWidth <= 1024;
  //       if (isMobile) {
  //         e.preventDefault();
  //         dropdown.classList.toggle("show");

  //         // Close other open dropdowns
  //         dropdowns.forEach(d => {
  //           if (d !== dropdown) {
  //             d.classList.remove("show");
  //           }
  //         });
  //       }
  //     });
  //   }
  // });


});



// // dropdown


// document.addEventListener("DOMContentLoaded", function () {
//             const dropdowns = document.querySelectorAll(".nav-item.dropdown");

//             dropdowns.forEach(dropdown => {
//                 const link = dropdown.querySelector(".nav-link");

//                 // Only on mobile
//                 link.addEventListener("click", function (e) {
//                     const isMobile = window.innerWidth <= 1024;
//                     if (isMobile) {
//                         e.preventDefault();
//                         dropdown.classList.toggle("show");

//                         // Close other open dropdowns
//                         dropdowns.forEach(d => {
//                             if (d !== dropdown) {
//                                 d.classList.remove("show");
//                             }
//                         });
//                     }
//                 });
//             });

//             // Close dropdown when clicking outside
//             document.addEventListener("click", function (e) {
//                 if (!e.target.closest(".nav-item.dropdown")) {
//                     document.querySelectorAll(".nav-item.dropdown.show").forEach(d => d.classList.remove("show"));
//                 }
//             });
//         });