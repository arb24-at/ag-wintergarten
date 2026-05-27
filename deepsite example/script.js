document.addEventListener('DOMContentLoaded', function () {
  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Dynamic year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconMenu = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');

  if (mobileBtn && mobileMenu && iconMenu && iconClose) {
    mobileBtn.addEventListener('click', function () {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        iconMenu.classList.add('hidden');
        iconClose.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        iconMenu.classList.remove('hidden');
        iconClose.classList.add('hidden');
      }
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        iconMenu.classList.remove('hidden');
        iconClose.classList.add('hidden');
      });
    });
  }

  // Sticky header shadow on scroll
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.classList.add('shadow-lg');
      } else {
        header.classList.remove('shadow-lg');
      }
    });
  }

  // Form button interaction (demo)
  const formBtn = document.getElementById('form-submit-btn');
  if (formBtn) {
    formBtn.addEventListener('click', function (e) {
      e.preventDefault();
      // Simple frontend feedback
      const originalText = formBtn.innerHTML;
      formBtn.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Anfrage gesendet';
      if (window.lucide) lucide.createIcons();
      formBtn.disabled = true;
      formBtn.style.opacity = '0.9';
      
      setTimeout(function () {
        alert('Vielen Dank für Ihre Anfrage. Wir werden uns zeitnah mit Ihnen in Verbindung setzen.');
        formBtn.innerHTML = originalText;
        if (window.lucide) lucide.createIcons();
        formBtn.disabled = false;
        formBtn.style.opacity = '1';
      }, 400);
    });
  }
});