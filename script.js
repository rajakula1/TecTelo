/**
 * Tectelo Consulting - Interactive Logic
 * AI Architecture & Agent Engineering
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Navigation
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('active');
    });

    // Close menu on link click
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Dynamic Copyright Year
  const yearSpan = document.getElementById('yearSpan');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 3. Service Card Pre-Selection
  const serviceSelect = document.getElementById('serviceSelect');
  const serviceLinks = document.querySelectorAll('[data-service]');

  serviceLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const serviceName = link.getAttribute('data-service');
      if (serviceSelect && serviceName) {
        // Find matching option or closest match
        let found = false;
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].value.includes(serviceName) || serviceName.includes(serviceSelect.options[i].text)) {
            serviceSelect.selectedIndex = i;
            found = true;
            break;
          }
        }
        if (!found) {
          // If it's a demo or specific request
          for (let i = 0; i < serviceSelect.options.length; i++) {
            if (serviceSelect.options[i].value.includes(serviceName.split(':')[0])) {
              serviceSelect.selectedIndex = i;
              break;
            }
          }
        }
      }
    });
  });

  // 4. Contact Form Handling (Prepares mailto & shows confirmation)
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('fullName')?.value.trim();
      const workEmail = document.getElementById('workEmail')?.value.trim();
      const companyName = document.getElementById('companyName')?.value.trim() || 'Not specified';
      const selectedService = document.getElementById('serviceSelect')?.value;
      const projectDetails = document.getElementById('projectDetails')?.value.trim();

      const recipient = 'raj.akula@praxifyai.com';
      const subject = encodeURIComponent(`Tectelo Consulting Inquiry: ${selectedService} - ${fullName}`);
      const body = encodeURIComponent(
`Hi Raj,

I would like to inquire about consulting services with Tectelo Consulting.

Name: ${fullName}
Company: ${companyName}
Email: ${workEmail}
Service of Interest: ${selectedService}

Context / Project Details:
${projectDetails}

Looking forward to speaking with you.
`
      );

      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

      // Show user feedback
      if (formFeedback) {
        formFeedback.hidden = false;
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `
          <strong>Thank you, ${fullName}!</strong><br/>
          Your inquiry is ready. Opening your email client to send to <strong>${recipient}</strong>.<br/>
          <small>If your mail client didn't open automatically, <a href="${mailtoUrl}" style="color: #38bdf8; text-decoration: underline;">click here to send directly</a> or call <strong>(737) 610-3312</strong>.</small>
        `;
      }

      // Trigger mailto link
      window.location.href = mailtoUrl;
    });
  }

  // 5. Microsoft Bookings Modal Handlers
  const bookingTriggers = document.querySelectorAll('.trigger-booking-modal');
  const bookingModal = document.getElementById('bookingModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  if (bookingModal) {
    bookingTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        bookingModal.classList.add('active');
      });
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => {
        bookingModal.classList.remove('active');
      });
    }

    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('active');
      }
    });
  }
});

