// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Responsive Navbar Toggle
const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');

navbarToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Email Subscription Form Submission
const subscriptionForm = document.getElementById('subscription-form');
subscriptionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;
    if (validateEmail(email)) {
        alert(`Thank you for subscribing, ${email}!`);
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}