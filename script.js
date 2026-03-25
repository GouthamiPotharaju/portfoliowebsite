/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 65);
            revealObs.unobserve(e.target);
        }
    });
}, {
    threshold: 0.08
});
revealEls.forEach(el => revealObs.observe(el));

/* ── ACTIVE NAV ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
}, {
    passive: true
});

/* ── HAMBURGER / MOBILE MENU ── */
function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('mobileMenu');
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

function closeMenu() {
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('mobileMenu').classList.remove('open');
    document.body.style.overflow = '';
}

/* ── SEND MESSAGE ── */
function sendMessage() {
    const name = document.getElementById('msg-name').value.trim();
    const email = document.getElementById('msg-email').value.trim();
    const body = document.getElementById('msg-body').value.trim();
    if (!name || !email || !body) {
        alert('Please fill in your name, email, and message.');
        return;
    }
    const btnText = document.getElementById('msg-btn-text');
    btnText.textContent = 'Sending...';
    setTimeout(() => {
        ['msg-name', 'msg-email', 'msg-subject', 'msg-body'].forEach(id => document.getElementById(id).value = '');
        btnText.textContent = '✉ Send Message';
        const success = document.getElementById('msg-success');
        success.style.display = 'block';
        setTimeout(() => success.style.display = 'none', 4000);
    }, 1000);
}

/* ── BACK TO TOP ── */
const btt = document.getElementById('btt');
if (btt) {
    window.addEventListener('scroll', () => {
        btt.classList.toggle('show', scrollY > 300);
    }, {
        passive: true
    });
}