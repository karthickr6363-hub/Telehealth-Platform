const components = {
    header: `
        <nav class="navbar">
            <div class="container flex flex-nowrap justify-between align-center">
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
                    <li><a href="providers.html">Providers</a></li>
                    <li><a href="resources.html">Resources</a></li>
                    <li style="margin-top: 1rem;"><a href="login.html" class="btn btn-outline" style="width: 100%; margin-bottom: 1rem;">Sign In</a></li>
                    <li><a href="booking.html" class="btn btn-primary" style="width: 100%;">Book Appointment</a></li>
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
                        <a href="#" class="social-icon" aria-label="Facebook" style="color: var(--text-muted); transition: color 0.3s; display: flex; align-items: center; justify-content: center;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" class="social-icon" aria-label="Twitter" style="color: var(--text-muted); transition: color 0.3s; display: flex; align-items: center; justify-content: center;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </a>
                        <a href="#" class="social-icon" aria-label="LinkedIn" style="color: var(--text-muted); transition: color 0.3s; display: flex; align-items: center; justify-content: center;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="#" class="social-icon" aria-label="Instagram" style="color: var(--text-muted); transition: color 0.3s; display: flex; align-items: center; justify-content: center;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
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
                <div>
                    <h4>Contact Us</h4>
                    <ul class="footer-links">
                        <li style="display: flex; align-items: center; gap: 0.75rem; color: var(--text-muted); margin-bottom: 0.5rem;">
                            <span>📧</span> <a href="mailto:support@telehealth.com">support@telehealth.com</a>
                        </li>
                        <li style="display: flex; align-items: center; gap: 0.75rem; color: var(--text-muted); margin-bottom: 0.5rem;">
                            <span>📞</span> <a href="tel:+15551234567">+1 (555) 123-4567</a>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.75rem; color: var(--text-muted);">
                            <span>📍</span> <span>123 Health St, Medical City, CA</span>
                        </li>
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

    // Add Scroll-to-Top Button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scroll-top';
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.title = 'Back to Top';
    document.body.appendChild(scrollTopBtn);

    // Scroll Logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

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
