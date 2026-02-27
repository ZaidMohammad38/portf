// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animate skill bars when scrolled into view
const skills = document.querySelectorAll('.skill-bar span');
const skillsSection = document.querySelector('.skills');

function animateSkills() {
    const triggerBottom = window.innerHeight * 0.8;
    const skillsTop = skillsSection.getBoundingClientRect().top;

    if (skillsTop < triggerBottom) {
        skills.forEach(skill => {
            skill.style.width = skill.dataset.width;
        });
        window.removeEventListener('scroll', animateSkills);
    }
}
window.addEventListener('scroll', animateSkills);
