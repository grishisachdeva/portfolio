import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="brand-logo" style={{ color: 'var(--color-paper)', marginBottom: '0.75rem' }}>
              <img src="/assets/avatar.jpg" alt="Grishi" className="brand-icon" />
              <span>
                Grishi<span style={{ color: 'var(--color-yellow)' }}>.dev</span>
              </span>
            </div>
            <p className="footer-brand-tagline">
              B.Tech in Artificial Intelligence &amp; Data Science at GGSIPU. Founder of GlowBerry.
              Building intelligent, joyful software.
            </p>
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <a href="#projects">All Projects</a>
              </li>
              <li className="footer-link-item">
                <a href="#arsenal">Technical Arsenal</a>
              </li>
              <li className="footer-link-item">
                <a href="#packs">Skill Packs</a>
              </li>
              <li className="footer-link-item">
                <a href="#experience">Career &amp; Education</a>
              </li>
              <li className="footer-link-item">
                <a href="#arcade">Arcade Soundboard</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Key Projects</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <a
                  href="https://github.com/grishisachdeva/context-bridge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Context Bridge (MV3)
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="https://glow-berry-admin.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GlowBerry Admin
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="https://github.com/grishisachdeva/synthetic-voice-detector"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deepfake Audio Detector
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="https://chessio-beige.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chessio Stockfish WASM
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Direct Connect</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=grishisachdeva@gmail.com&su=Hello%20Grishi!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  grishisachdeva@gmail.com
                </a>
              </li>
              <li className="footer-link-item">
                <a href="tel:+918826527495">+91 8826527495</a>
              </li>
              <li className="footer-link-item">
                <a
                  href="https://www.linkedin.com/in/grishisachdeva/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="https://github.com/grishisachdeva"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Grishi Sachdeva. Built with Next.js, React &amp; TypeScript. Designed in
            Wakeout Neo-Brutalist Sticker Style.
          </p>
          <p style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span>Delhi, India 🇮🇳</span>
            <span>•</span>
            <a href="#hero" style={{ color: 'var(--color-yellow)', fontWeight: 'bold' }}>
              Back to Top ↑
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

