/**
 * WAKEOUT REPLICA INTERACTIVE SCRIPT FOR GRISHI SACHDEVA PORTFOLIO
 * Features:
 * - Web Audio Sound Effects Engine (8-bit pop, laser, fanfare, click)
 * - Canvas Confetti Physics Burst
 * - Smartphone Mockup Interactive Screen Carousel
 * - Project Filter System
 * - Project Deep Dive Modal
 * - Interactive Soundboard & Wiggle Mode
 * - Clipboard Copy with Animated Toast
 */

// --- Web Audio Synthesizer ---
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playPop() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(840, now + 0.08);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } catch (e) {}
  }

  playBlip() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.setValueAtTime(880, now + 0.04);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
    } catch (e) {}
  }

  playCoin() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(987.77, now); // B5
      osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.36);
    } catch (e) {}
  }

  playSuccess() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const time = this.ctx.currentTime + (idx * 0.07);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, time);
        gain.gain.setValueAtTime(0.15, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(time);
        osc.stop(time + 0.22);
      });
    } catch (e) {}
  }

  playLaser() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.15);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    } catch (e) {}
  }
}

const sounds = new SoundEngine();

// --- Confetti Explosion Engine ---
function fireConfetti(x = window.innerWidth / 2, y = window.innerHeight / 2) {
  const canvas = document.getElementById('confetti-canvas') || createConfettiCanvas();
  const ctx = canvas.getContext('2d');
  const count = 75;
  const colors = ['#68be00', '#ffc629', '#ff6b3e', '#00b6d2', '#8a38f5', '#f66f8e', '#043629'];
  const particles = [];

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 8 + 4;
    particles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 12,
      opacity: 1,
      shape: Math.random() > 0.4 ? 'rect' : 'circle'
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25; // gravity
      p.vx *= 0.98; // drag
      p.rotation += p.rotSpeed;
      p.opacity -= 0.018;

      if (p.opacity > 0) {
        active = true;
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.strokeStyle = '#043629';
        ctx.lineWidth = 1.5;

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
          ctx.strokeRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
        ctx.restore();
      }
    });

    if (active) {
      requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  requestAnimationFrame(render);
}

function createConfettiCanvas() {
  const c = document.createElement('canvas');
  c.id = 'confetti-canvas';
  c.style.position = 'fixed';
  c.style.top = '0';
  c.style.left = '0';
  c.style.width = '100vw';
  c.style.height = '100vh';
  c.style.pointerEvents = 'none';
  c.style.zIndex = '999';
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  window.addEventListener('resize', () => {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  });
  document.body.appendChild(c);
  return c;
}

// --- Interactive Phone Screen Carousel Data ---
const phoneScreens = [
  {
    tag: 'CHROME MV3 EXTENSION',
    tagColor: 'var(--color-cyan)',
    title: 'Context Bridge',
    desc: 'Interoperability across 5 AI platforms (ChatGPT, Claude, Gemini, DeepSeek, Perplexity) in 1-click.',
    metric: '5 AI Models • Zero Tab Swapping',
    actionText: 'View Extension Details',
    projectId: 'context-bridge'
  },
  {
    tag: 'E-COMMERCE STARTUP',
    tagColor: 'var(--color-yellow)',
    title: '🍓 GlowBerry Jewelry',
    desc: 'Soft-minimalist online boutique jewelry & luxury gifting with 500+ satisfied customers.',
    metric: '500+ Orders • Next.js & Supabase',
    actionText: 'Explore Glowberry',
    projectId: 'glowberry'
  },
  {
    tag: 'AI & CYBERSECURITY',
    tagColor: 'var(--color-ember)',
    title: 'Synthetic Voice Detector',
    desc: 'CNN classifier using Log-Mel spectrograms + Grad-CAM to detect AI cloned speech.',
    metric: 'ASVspoof 2021 DF • Real-Time Streamlit',
    actionText: 'Inspect ML Pipeline',
    projectId: 'voice-detector'
  },
  {
    tag: 'WASM & GAME AUTOMATION',
    tagColor: 'var(--color-purple)',
    title: 'Chessio Assistant',
    desc: 'Stockfish WASM chess engine overlaid live on Chess.com & Lichess with eval bar.',
    metric: 'Stockfish WASM • Real-time Eval',
    actionText: 'Check Chessio Web',
    projectId: 'chessio'
  }
];

let currentScreenIdx = 0;
let phoneAutoInterval = null;

function updatePhoneScreen(idx) {
  currentScreenIdx = idx;
  const data = phoneScreens[idx];
  const tagEl = document.getElementById('phone-tag');
  const titleEl = document.getElementById('phone-title');
  const descEl = document.getElementById('phone-desc');
  const metricEl = document.getElementById('phone-metric');
  const actionBtn = document.getElementById('phone-action-btn');

  if (tagEl) {
    tagEl.innerText = data.tag;
    tagEl.style.backgroundColor = data.tagColor;
  }
  if (titleEl) titleEl.innerText = data.title;
  if (descEl) descEl.innerText = data.desc;
  if (metricEl) metricEl.innerText = data.metric;
  if (actionBtn) {
    actionBtn.innerText = data.actionText;
    actionBtn.setAttribute('data-project', data.projectId);
  }

  // update dots
  document.querySelectorAll('.phone-nav-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
}

function startPhoneAutoPlay() {
  stopPhoneAutoPlay();
  phoneAutoInterval = setInterval(() => {
    const nextIdx = (currentScreenIdx + 1) % phoneScreens.length;
    updatePhoneScreen(nextIdx);
  }, 4500);
}

function stopPhoneAutoPlay() {
  if (phoneAutoInterval) clearInterval(phoneAutoInterval);
}

// --- Project Details Data for Modal ---
const projectDetails = {
  'context-bridge': {
    title: 'Context Bridge | Chrome Extension (MV3)',
    tag: 'Manifest V3 • JavaScript • DOM Automation',
    tagColor: 'var(--color-cyan)',
    desc: 'Context Bridge bridges the gap between today’s leading AI models (ChatGPT, Claude, Gemini, Perplexity, DeepSeek). By orchestrating DOM extraction, input injection, and background service workers, it enables seamless cross-model routing, prompt synchronization, and multi-AI critiques with a single click.',
    highlights: [
      'Built a Chrome Manifest V3 extension with synchronized multi-tab communication.',
      'Developed persistent memory and context layers with structured replay capabilities.',
      'Enables iterative cross-model evaluation without repetitive copying and pasting.',
      'Architected event-driven message buses between content scripts and service workers.'
    ],
    tech: ['JavaScript (ES6+)', 'Chrome APIs (MV3)', 'DOM Manipulation', 'Event-Driven Architecture', 'Service Workers'],
    github: 'https://github.com/grishisachdeva/context-bridge',
    live: 'https://github.com/grishisachdeva/context-bridge'
  },
  'glowberry': {
    title: 'GlowBerry E-Commerce Platform & Admin',
    tag: 'Founder • Full-Stack • 500+ Customers',
    tagColor: 'var(--color-yellow)',
    desc: 'Founded and engineered India’s cutest gifting and boutique jewelry brand. Cultivated a premium soft-minimalist brand identity, built the high-performance customer storefront and full-featured Admin dashboard, fulfilling over 500+ customer orders with organic digital marketing and luxury product positioning.',
    highlights: [
      'Engineered responsive web storefront with custom SVG micro-animations and Figma UI/UX design.',
      'Implemented optimized product grids and high-contrast typography pairings.',
      'Developed GlowBerry-Admin dashboard on Next.js & Supabase for inventory and order management.',
      'Directed luxury product positioning and social media analytics driving consistent business growth.'
    ],
    tech: ['Next.js', 'React.js', 'Supabase', 'Tailwind CSS', 'Figma', 'JavaScript (ES6)', 'Git'],
    github: 'https://github.com/grishisachdeva/GlowBerry',
    live: 'https://glow-berry-admin.vercel.app'
  },
  'voice-detector': {
    title: 'Audio Deepfake & Synthetic Voice Detector',
    tag: 'Deep Learning • Cybersecurity • PyTorch',
    tagColor: 'var(--color-ember)',
    desc: 'An AI-powered cybersecurity system designed to identify synthetic and cloned human speech. It extracts 2D Log-Mel spectrograms from raw audio streams and passes them through a convolutional neural network (CNN), augmented with Grad-CAM explainability heatmaps for model interpretability.',
    highlights: [
      'Trained and evaluated on the ASVspoof 2021 Deepfake (DF) dataset.',
      'Constructed complete end-to-end preprocessing, feature extraction, and real-time inference pipeline.',
      'Implemented Grad-CAM explainability to visualize acoustic artifacts that reveal synthetic tampering.',
      'Deployed interactive Streamlit application for drag-and-drop audio file inspection and confidence scoring.'
    ],
    tech: ['Python', 'PyTorch', 'Librosa', 'NumPy', 'Streamlit', 'Matplotlib', 'ASVspoof 2021'],
    github: 'https://github.com/grishisachdeva/synthetic-voice-detector',
    live: 'https://github.com/grishisachdeva/synthetic-voice-detector'
  },
  'chessio': {
    title: 'Chessio: Real-Time Stockfish Chess Assistant',
    tag: 'WASM • Chrome MV3 • Next.js Web App',
    tagColor: 'var(--color-purple)',
    desc: 'A Manifest V3 browser extension and companion Next.js web application that scrapes the board directly from Chess.com and Lichess, executes a bundled Stockfish WASM engine locally in the browser, and overlays dynamic evaluation bars and best move suggestion arrows in real-time.',
    highlights: [
      'Bundled Stockfish WASM engine for ultra-low latency in-browser move evaluation.',
      'Live DOM mutation observer to detect piece moves and board orientation in milliseconds.',
      'Visual overlays: dynamic advantage bar, best-move directional vectors, and mini-board.',
      'Companion web dashboard deployed on Vercel for game review and opening analysis.'
    ],
    tech: ['Stockfish WASM', 'Chrome Extension MV3', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/grishisachdeva/chessio',
    live: 'https://chessio-beige.vercel.app'
  },
  'cyberfrat': {
    title: 'CyberFrat | Web Development Internship',
    tag: 'Frontend Engineering • Performance Optimization',
    tagColor: 'var(--color-lime)',
    desc: 'Worked as Web Development Intern at CyberFrat, building responsive modern web applications, optimizing bundle sizes and asset delivery to improve page speed and user retention.',
    highlights: [
      'Developed and maintained responsive web applications using HTML5, CSS3, JavaScript, and React.',
      'Collaborated with engineering team to optimize web performance, improving load times.',
      'Assisted in debugging, modular refactoring, and rolling out new customer-facing features.'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Git', 'Performance Optimization'],
    github: 'https://github.com/grishisachdeva',
    live: 'https://www.linkedin.com/in/grishisachdeva/'
  }
};

// --- Show Toast Notification ---
function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>🎉</span> <span>${message}</span>`;
  toast.classList.add('show');
  sounds.playCoin();

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// --- Copy to Clipboard Helper ---
function copyTextToClipboard(text, successMsg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg);
    fireConfetti();
  }).catch(() => {
    // fallback
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast(successMsg);
  });
}

// --- Open Modal Dialog ---
function openProjectModal(projectId) {
  const data = projectDetails[projectId];
  if (!data) return;

  sounds.playPop();

  const modal = document.getElementById('project-modal');
  const tagEl = document.getElementById('modal-tag');
  const titleEl = document.getElementById('modal-title');
  const descEl = document.getElementById('modal-desc');
  const bulletsEl = document.getElementById('modal-bullets');
  const techEl = document.getElementById('modal-tech');
  const githubBtn = document.getElementById('modal-github-btn');
  const liveBtn = document.getElementById('modal-live-btn');

  if (tagEl) {
    tagEl.innerText = data.tag;
    tagEl.style.backgroundColor = data.tagColor || 'var(--color-yellow)';
  }
  if (titleEl) titleEl.innerText = data.title;
  if (descEl) descEl.innerText = data.desc;

  if (bulletsEl) {
    bulletsEl.innerHTML = data.highlights.map(h => `<li>${h}</li>`).join('');
  }

  if (techEl) {
    techEl.innerHTML = data.tech.map(t => `<span class="tech-pill">${t}</span>`).join('');
  }

  if (githubBtn) githubBtn.href = data.github;
  if (liveBtn) liveBtn.href = data.live;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    sounds.playBlip();
  }
}

// --- Document Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  createConfettiCanvas();

  // Initialize Phone auto-rotation
  updatePhoneScreen(0);
  startPhoneAutoPlay();

  // Phone screen dots click
  document.querySelectorAll('.phone-nav-dot').forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      sounds.playPop();
      updatePhoneScreen(idx);
      startPhoneAutoPlay();
    });
  });

  // Phone screen action button click
  const phoneActionBtn = document.getElementById('phone-action-btn');
  if (phoneActionBtn) {
    phoneActionBtn.addEventListener('click', () => {
      const pId = phoneActionBtn.getAttribute('data-project') || 'context-bridge';
      openProjectModal(pId);
    });
  }

  // Sound Toggle Button
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      const active = sounds.toggle();
      soundToggleBtn.innerHTML = active ? 'Sound ON' : 'Sound OFF';
      soundToggleBtn.style.backgroundColor = active ? 'var(--color-yellow)' : 'var(--color-paper)';
      if (active) sounds.playPop();
    });
  }

  // Project Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sounds.playPop();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          card.style.animation = 'enter 0.3s ease-out forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Project Modal Triggers
  document.querySelectorAll('[data-open-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const pId = trigger.getAttribute('data-open-modal');
      openProjectModal(pId);
    });
  });

  // Modal Close Button & Overlay click
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalOverlay = document.getElementById('project-modal');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeProjectModal();
    });
  }

  // Escape key to close modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });

  // Copy Email Buttons
  document.querySelectorAll('[data-copy-email]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      copyTextToClipboard('grishisachdeva@gmail.com', 'Copied grishisachdeva@gmail.com to clipboard!');
    });
  });

  // Copy Phone Buttons
  document.querySelectorAll('[data-copy-phone]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      copyTextToClipboard('+918826527495', 'Copied +91 8826527495 to clipboard!');
    });
  });

  // Confetti on Primary CTAs
  document.querySelectorAll('[data-confetti-btn]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      sounds.playSuccess();
      const rect = btn.getBoundingClientRect();
      fireConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
    });
  });

  // Interactive Arcade Soundboard Keys
  document.querySelectorAll('.arcade-key-btn').forEach(key => {
    key.addEventListener('click', () => {
      const soundType = key.getAttribute('data-sound');
      key.classList.add('active-pop');
      setTimeout(() => key.classList.remove('active-pop'), 200);

      if (soundType === 'pop') sounds.playPop();
      else if (soundType === 'blip') sounds.playBlip();
      else if (soundType === 'coin') sounds.playCoin();
      else if (soundType === 'laser') sounds.playLaser();
      else if (soundType === 'success') {
        sounds.playSuccess();
        const rect = key.getBoundingClientRect();
        fireConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
    });
  });

  // Wiggle toggle easter egg
  const wiggleToggle = document.getElementById('wiggle-toggle-btn');
  if (wiggleToggle) {
    let wiggling = false;
    wiggleToggle.addEventListener('click', () => {
      wiggling = !wiggling;
      sounds.playLaser();
      document.querySelectorAll('.sticker-card, .pill-badge, .project-card, .pack-card').forEach(el => {
        el.classList.toggle('animate-wobble', wiggling);
      });
      wiggleToggle.innerText = wiggling ? 'Stop Wiggling!' : 'Turn on Wiggle Mode';
      wiggleToggle.style.backgroundColor = wiggling ? 'var(--color-pink)' : 'var(--color-yellow)';
      if (wiggling) fireConfetti();
    });
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      sounds.playBlip();
      const isOpen = navLinks.style.display === 'flex';
      navLinks.style.display = isOpen ? 'none' : 'flex';
      if (!isOpen) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '72px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'var(--color-paper)';
        navLinks.style.padding = '1.5rem';
        navLinks.style.borderBottom = 'var(--border-thick)';
        navLinks.style.boxShadow = 'var(--shadow-lg)';
      }
    });
  }
});
