  const items = document.querySelectorAll('.carouselItem');
        const carousel = document.getElementById('carousel');

        // Set background images from img tags and hide images
        items.forEach(item => {
            const img = item.querySelector('img');
            if (img) {
                item.style.backgroundImage = `url(${img.src})`;
            }
        });

        let current = 0;

        function updateCarousel() {
            items.forEach((item, index) => {
                item.classList.remove('active', 'left', 'right');
                if (index === current) {
                    item.classList.add('active');
                } else if (index === (current - 1 + items.length) % items.length) {
                    item.classList.add('left');
                } else if (index === (current + 1) % items.length) {
                    item.classList.add('right');
                }
            });
        }

        function nextSlide() {
            current = (current + 1) % items.length;
            updateCarousel();
        }

        function prevSlide() {
            current = (current - 1 + items.length) % items.length;
            updateCarousel();
        }

        // Drag & Touch functionality
        let startX = 0;
        let isDragging = false;

        const dragSpeed = 1.5;
        const threshold = 30;

        carousel.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isDragging = true;
            carousel.classList.add('dragging');
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const diff = (e.clientX - startX) * dragSpeed;
            if (diff > threshold) {
                prevSlide();
                isDragging = false;
            } else if (diff < -threshold) {
                nextSlide();
                isDragging = false;
            }
        });

        carousel.addEventListener('mouseup', () => {
            isDragging = false;
            carousel.classList.remove('dragging');
        });

        carousel.addEventListener('mouseleave', () => {
            isDragging = false;
            carousel.classList.remove('dragging');
        });

        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        carousel.addEventListener('touchmove', (e) => {
            const diff = (e.touches[0].clientX - startX) * dragSpeed;
            if (diff > threshold) {
                prevSlide();
                startX = e.touches[0].clientX;
            } else if (diff < -threshold) {
                nextSlide();
                startX = e.touches[0].clientX;
            }
        });

        updateCarousel();
        // === Auto Scroll Feature ===
        let autoScrollInterval;

        function startAutoScroll() {
            autoScrollInterval = setInterval(nextSlide, 3000);
        }

        function stopAutoScroll() {
            clearInterval(autoScrollInterval);
        }

        startAutoScroll();

        carousel.addEventListener('mouseenter', stopAutoScroll);
        carousel.addEventListener('mouseleave', startAutoScroll);