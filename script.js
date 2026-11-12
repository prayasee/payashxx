
  // ── LOADER ──
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
    }, 2200);
  });

  // ── HAMBURGER ──
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  // ── CIRCUIT CANVAS ──
  const canvas = document.getElementById('circuit-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  if (canvas && ctx) {
    let W, H, particles = [], traces = [];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.alpha = Math.random() * 0.6 + 0.1;
        this.size = Math.random() * 2 + 0.5;
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = '#00D2FF';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class Trace {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.len = Math.random() * 120 + 40;
        this.dir = [0, 1, 2, 3][Math.floor(Math.random() * 4)];
        this.alpha = Math.random() * 0.25 + 0.05;
        this.progress = 0;
        this.speed = Math.random() * 1.5 + 0.5;
      }
      update() {
        this.progress += this.speed;
        if (this.progress > this.len + 20) this.reset();
      }
      draw() {
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
        const d = dirs[this.dir];
        const start = Math.max(0, this.progress - this.len);
        const end = this.progress;
        ctx.globalAlpha = this.alpha;
        ctx.strokeStyle = '#00D2FF';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x + d[0] * start, this.y + d[1] * start);
        ctx.lineTo(this.x + d[0] * end, this.y + d[1] * end);
        ctx.stroke();
      }
    }

    for (let i = 0; i < 60; i++) particles.push(new Particle());
    for (let i = 0; i < 30; i++) traces.push(new Trace());

    function draw() {
      ctx.clearRect(0, 0, W, H);
      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 120) {
            ctx.globalAlpha = (1 - dist/120) * 0.15;
            ctx.strokeStyle = '#00D2FF';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      traces.forEach(t => { t.update(); t.draw(); });
      particles.forEach(p => { p.update(); p.draw(); });
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }
    draw();

  }

  // ── SCROLL REVEAL ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // skill bars removed — using card-style display

  // ── CONTACT FORM ──
  function sendEmail() {
    const name = document.getElementById('cName').value;
    const email = document.getElementById('cEmail').value;
    const subject = document.getElementById('cSubject').value;
    const message = document.getElementById('cMessage').value;
    if (!name || !email || !message) { alert('Please fill in all required fields.'); return; }
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:prayas629@gmail.com,prayas_23ee279@gkciet.ac.in?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(body)}`;
  }

  // ── NAV ACTIVE STATE ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--blue)' : '';
    });
  });

  // ── SMOOTH ANCHOR CLOSE MOBILE ──
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
  });
