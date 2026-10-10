// ============================================================
// Hotel Booking Analytics — Portfolio Website JS
// Animates bar widths on page load using IntersectionObserver
// No external libraries — vanilla JS only
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Animate bars when they scroll into view ──────────────
  const bars = document.querySelectorAll('.bar-fill[data-w]');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.w + '%';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    bars.forEach(b => {
      b.style.width = '0%';           // start collapsed
      b.style.transition = 'width .55s cubic-bezier(.4,0,.2,1)';
      io.observe(b);
    });
  } else {
    // fallback for old browsers
    bars.forEach(b => { b.style.width = b.dataset.w + '%'; });
  }

  // ── Smooth active nav link highlight ─────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (sections.length && navLinks.length) {
    const sio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(a => {
            a.style.color = '';
            if (a.getAttribute('href') === '#' + e.target.id) {
              a.style.color = 'var(--accent)';
            }
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => sio.observe(s));
  }

  // ── Current year in footer ────────────────────────────────
  const yrEl = document.getElementById('current-year');
  if (yrEl) yrEl.textContent = new Date().getFullYear();

});
