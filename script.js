/* =========================================================
   STUDENT PORTFOLIO JAVASCRIPT
   Author: Raghunath
   Features:
   1. Dark / Light Mode Toggle with LocalStorage
   2. Mobile Hamburger Menu Toggle
   3. Active Link Highlight on Scroll
   4. One-Click Copy Email to Clipboard
   5. Contact Form Validation & Friendly Feedback
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------------
     1. THEME TOGGLE (DARK / LIGHT MODE)
     --------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Retrieve saved theme preference from localStorage or default to 'dark'
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  body.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
    });
  }

  /* ---------------------------------------------------------
     2. MOBILE NAVIGATION HAMBURGER MENU
     --------------------------------------------------------- */
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Close menu when any nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  /* ---------------------------------------------------------
     3. ACTIVE NAVIGATION LINK ON SCROLL
     --------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');

  const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll);

  /* ---------------------------------------------------------
     4. COPY EMAIL TO CLIPBOARD
     --------------------------------------------------------- */
  const copyBtn = document.getElementById('copy-email-btn');
  const emailTextEl = document.getElementById('email-text');
  const copyTooltip = document.getElementById('copy-tooltip');

  if (copyBtn && emailTextEl && copyTooltip) {
    copyBtn.addEventListener('click', async () => {
      const email = emailTextEl.textContent.trim();

      try {
        await navigator.clipboard.writeText(email);
        copyTooltip.textContent = 'Copied!';
        copyBtn.classList.add('copied');

        setTimeout(() => {
          copyTooltip.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        // Fallback for older browsers
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        copyTooltip.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyTooltip.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      }
    });
  }

  /* ---------------------------------------------------------
     5. CONTACT FORM VALIDATION & INTERACTIVE FEEDBACK
     --------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const formSuccessAlert = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        nameInput.closest('.form-group').classList.remove('has-error');
      }

      // Validate Email with regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
        emailInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        emailInput.closest('.form-group').classList.remove('has-error');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        messageInput.closest('.form-group').classList.remove('has-error');
      }

      if (isValid) {
        // Display success confirmation
        if (formSuccessAlert) {
          formSuccessAlert.style.display = 'flex';
          formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Reset form inputs
        contactForm.reset();

        // Hide success message after 6 seconds
        setTimeout(() => {
          if (formSuccessAlert) {
            formSuccessAlert.style.display = 'none';
          }
        }, 6000);
      }
    });

    // Clear error style on input typing
    [nameInput, emailInput, messageInput].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          input.closest('.form-group').classList.remove('has-error');
        });
      }
    });
  }

});
