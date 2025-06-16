document.addEventListener("DOMContentLoaded", function () {
            const dropdowns = document.querySelectorAll(".nav-item.dropdown");

            dropdowns.forEach(dropdown => {
                const link = dropdown.querySelector(".nav-link");

                // Only on mobile
                link.addEventListener("click", function (e) {
                    const isMobile = window.innerWidth <= 1024;
                    if (isMobile) {
                        e.preventDefault();
                        dropdown.classList.toggle("show");

                        // Close other open dropdowns
                        dropdowns.forEach(d => {
                            if (d !== dropdown) {
                                d.classList.remove("show");
                            }
                        });
                    }
                });
            });

            // Close dropdown when clicking outside
            document.addEventListener("click", function (e) {
                if (!e.target.closest(".nav-item.dropdown")) {
                    document.querySelectorAll(".nav-item.dropdown.show").forEach(d => d.classList.remove("show"));
                }
            });
        });