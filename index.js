function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof (url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
    'send_to': 'AW-16633600614/8cfmCLTX178ZEOa0wvs9',
    'value': 1.0,
    'currency': 'BRL',
    'event_callback': callback
  });
  return false;
}

function openGoogleMapsWith() {
  const lat = "-22.119333599999997"
  const long = "-51.399502399999996"

  if ((navigator.platform.indexOf("iPhone") != -1)
    || (navigator.platform.indexOf("iPod") != -1)
    || (navigator.platform.indexOf("iPad") != -1)) {
    window.open(`maps://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${lat},${long}`);
    return
  }
  window.open(`https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${lat},${long}`);
}

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'AW-16633600614');

// Menu mobile
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const navLinks = document.querySelector('.nav-links');
  const icon = mobileMenuButton.querySelector('i');

  if (mobileMenuButton && navLinks) {
    mobileMenuButton.addEventListener('click', function () {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');

      // Atualizar o ícone
      if (isExpanded) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      }
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function (e) {
      if (!mobileMenuButton.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  }
});

// Botão voltar ao topo
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Animações ao rolar
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.feature-card, .value-item, section');

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Inicializar elementos com opacidade 0
document.querySelectorAll('.feature-card, .value-item, section').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
