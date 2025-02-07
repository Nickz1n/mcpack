// Function to set up scrolling for all homepage lists
function carouselScrolling() {
    // Select all homepage lists
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach((list) => {
        const scrollContainer = list.querySelector('.carousel_items');
        const scrollLeftButton = list.querySelector('.scroll_button#scroll_left_button');
        const scrollRightButton = list.querySelector('.scroll_button#scroll_right_button');

        // Scroll left
        scrollLeftButton.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: -scrollContainer.clientWidth / 1.8,
                behavior: 'smooth',
            });
        });

        // Scroll right
        scrollRightButton.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: scrollContainer.clientWidth / 1.8,
                behavior: 'smooth',
            });
        });
    });
}

// Initialize scrolling behavior once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', carouselScrolling);