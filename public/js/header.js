// Variables to track scroll position
let lastScrollTop = 0;
const header = document.querySelector('.header-container header');
const navbar = document.querySelector('.navbar-right');
const mobileMenuToggle = document.querySelector('.mobile-nav-toggle');
const overlay = document.querySelector('.overlay');
let headerHeight = header.offsetHeight;

// Function to toggle mobile menu
function toggleMobileMenu() {
    navbar.classList.toggle('active');
    mobileMenuToggle.querySelector('.menu-icon').classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

// Add event listener for mobile menu toggle
mobileMenuToggle.addEventListener('click', toggleMobileMenu);
overlay.addEventListener('click', toggleMobileMenu);

// Function to handle header visibility on scroll
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add the 'scrolled' class when page is scrolled down a bit
    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Hide/show header based on scroll direction
    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
        // Scrolling down - hide header
        header.style.transform = 'translateY(-${headerHeight}px)';
    } else {
        // Scrolling up - show header
        header.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Update header height on window resize
window.addEventListener('resize', () => {
    headerHeight = header.offsetHeight;
});
