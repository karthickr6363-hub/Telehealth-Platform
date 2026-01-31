const components = {
    header: `
        <nav class="navbar">
            <div class="container flex justify-between align-center">
                <a href="index.html" class="logo-container">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#2563EB"/>
                        <path d="M20 10V30M10 20H30" stroke="white" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                    <span class="logo-brand">TeleHealth</span>
                </a>
                
                <ul class="nav-links">
                    <li><a href="index.html" class="nav-item">Home</a></li>
                    <li><a href="home2.html" class="nav-item">Home 2</a></li>
                    <li><a href="services.html" class="nav-item">Services</a></li>
                    <li><a href="doctors.html" class="nav-item">Doctors</a></li>
                    <li><a href="specialties.html" class="nav-item">Specialties</a></li>
                    <li><a href="pricing.html" class="nav-item">Pricing</a></li>
                    <li><a href="patient-portal.html" class="nav-item">Patient Portal</a></li>
                    <li><a href="providers.html" class="nav-item">Providers</a></li>
                    <li><a href="resources.html" class="nav-item">Resources</a></li>
                    <li><a href="login.html" class="btn btn-outline" style="height: 40px; padding: 0 1rem;">Sign In</a></li>
                    <li><a href="booking.html" class="btn btn-primary" style="height: 40px; padding: 0 1rem;">Book Appointment</a></li>
                </ul>

                <button class="hamburger" id="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>

        <div class="mobile-menu" id="mobile-menu">
            <div class="mobile-menu-content">
                <div class="flex justify-between align-center" style="padding: 1.5rem;">
                    <span class="logo-brand">TeleHealth</span>
                    <button id="close-menu" style="font-size: 2rem;">&times;</button>
                </div>
                <ul class="mobile-nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="home2.html">Home 2</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="doctors.html">Doctors</a></li>
                    <li><a href="specialties.html">Specialties</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="patient-portal.html">Dashboard</a></li>
                    <li style="margin-top: 1rem;"><a href="booking.html" class="btn btn-primary" style="width: 100%;">Book Appointment</a></li>
                </ul>
            </div>
        </div>
    `,
    footer: `
        <footer class="footer section">
            <div class="container grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 3rem;">
                <div>
                    <div class="logo-container" style="margin-bottom: 1.5rem;">
                         <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="8" fill="#2563EB"/>
                            <path d="M20 10V30M10 20H30" stroke="white" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                        <span class="logo-brand">TeleHealth</span>
                    </div>
                    <p style="color: var(--text-muted); margin-bottom: 1.5rem;">HIPAA-compliant virtual healthcare platform providing accessible medical consultations anytime, anywhere.</p>
                    <div class="social-links flex gap-1">
                        <a href="#" class="social-icon">FB</a>
                        <a href="#" class="social-icon">TW</a>
                        <a href="#" class="social-icon">LI</a>
                        <a href="#" class="social-icon">IG</a>
                    </div>
                </div>
                <div>
                    <h4>Platform</h4>
                    <ul class="footer-links">
                        <li><a href="services.html">Services</a></li>
                        <li><a href="doctors.html">Doctors</a></li>
                        <li><a href="specialties.html">Specialties</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Resources</h4>
                    <ul class="footer-links">
                        <li><a href="resources.html">Health Blog</a></li>
                        <li><a href="guides.html">Patient Guides</a></li>
                        <li><a href="faq.html">FAQs</a></li>
                        <li><a href="support.html">Support</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Legal</h4>
                    <ul class="footer-links">
                        <li><a href="privacy.html">Privacy Policy</a></li>
                        <li><a href="terms.html">Terms of Service</a></li>
                        <li><a href="hipaa.html">HIPAA Compliance</a></li>
                    </ul>
                </div>
            </div>
            <div class="container" style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border-color); text-align: center;">
                <p style="color: var(--text-muted); font-size: 0.875rem;">&copy; 2026 TeleHealth Platform. All rights reserved.</p>
            </div>
        </footer>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) headerPlaceholder.innerHTML = components.header;
    if (footerPlaceholder) footerPlaceholder.innerHTML = components.footer;

    // Mobile Menu Logic
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }

    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }

    // Active Link Highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-item, .mobile-nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
