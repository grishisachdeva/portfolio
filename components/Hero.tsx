'use client';

import React, { useEffect, useState } from 'react';
import { phoneScreens } from './data';
import { sounds } from './SoundEngine';
import { fireConfetti } from './Confetti';

interface HeroProps {
  onOpenModal: (projectId: string) => void;
  onCopyEmail: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal, onCopyEmail }) => {
  const [screenIdx, setScreenIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setScreenIdx((prev) => (prev + 1) % phoneScreens.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (idx: number) => {
    sounds.playPop();
    setScreenIdx(idx);
  };

  const handleHeroProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    sounds.playSuccess();
    const rect = e.currentTarget.getBoundingClientRect();
    fireConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
  };

  const currentScreen = phoneScreens[screenIdx];

  return (
    <section className="hero-section" id="hero">
      {/* 16-point Spinning Starburst Top Left */}
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          top: '120px',
          left: '5%',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        <svg width="68" height="68" viewBox="0 0 100 100" className="animate-spin-slow">
          <path
            d="M 50.00 4.00 L 58.42 29.67 L 82.53 17.47 L 70.33 41.58 L 96.00 50.00 L 70.33 58.42 L 82.53 82.53 L 58.42 70.33 L 50.00 96.00 L 41.58 70.33 L 17.47 82.53 L 29.67 58.42 L 4.00 50.00 L 29.67 41.58 L 17.47 17.47 L 41.58 29.67 Z"
            fill="#ffc629"
            stroke="#043629"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 5x5 Polka Dot Matrix Top Right */}
      <div
        style={{
          position: 'absolute',
          top: '170px',
          right: '6%',
          pointerEvents: 'none',
          zIndex: 2,
        }}
        className="animate-float-delayed"
      >
        <svg width="105" height="84" viewBox="0 0 110 88">
          <circle cx="11" cy="11" r="5.5" fill="#043629" />
          <circle cx="33" cy="11" r="5.5" fill="#043629" />
          <circle cx="55" cy="11" r="5.5" fill="#043629" />
          <circle cx="77" cy="11" r="5.5" fill="#043629" />
          <circle cx="99" cy="11" r="5.5" fill="#043629" />
          <circle cx="11" cy="33" r="5.5" fill="#043629" />
          <circle cx="33" cy="33" r="5.5" fill="#043629" />
          <circle cx="55" cy="33" r="5.5" fill="#043629" />
          <circle cx="77" cy="33" r="5.5" fill="#043629" />
          <circle cx="99" cy="33" r="5.5" fill="#043629" />
          <circle cx="11" cy="55" r="5.5" fill="#043629" />
          <circle cx="33" cy="55" r="5.5" fill="#043629" />
          <circle cx="55" cy="55" r="5.5" fill="#043629" />
          <circle cx="77" cy="55" r="5.5" fill="#043629" />
          <circle cx="99" cy="55" r="5.5" fill="#043629" />
          <circle cx="11" cy="77" r="5.5" fill="#043629" />
          <circle cx="33" cy="77" r="5.5" fill="#043629" />
          <circle cx="55" cy="77" r="5.5" fill="#043629" />
          <circle cx="77" cy="77" r="5.5" fill="#043629" />
          <circle cx="99" cy="77" r="5.5" fill="#043629" />
        </svg>
      </div>

      {/* Wavy Doodle Left Center */}
      <div
        style={{
          position: 'absolute',
          top: '58%',
          left: '2%',
          transform: 'rotate(-10deg)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        <svg width="150" height="45" viewBox="0 0 120 36" fill="none">
          <path
            d="M2 18 Q 15 2 30 18 T 60 18 T 90 18 T 118 18"
            stroke="#ff6b3e"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Zigzag Doodle Bottom Right */}
      <div
        style={{
          position: 'absolute',
          bottom: '35px',
          right: '4%',
          transform: 'rotate(8deg)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        <svg width="150" height="42" viewBox="0 0 120 34" fill="none">
          <path
            d="M3 28 L 18 6 L 33 28 L 48 6 L 63 28 L 78 6 L 93 28 L 108 6 L 117 20"
            stroke="#00b6d2"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      <div className="container">
        <div className="hero-grid">
          {/* Hero Text Column */}
          <div>
            <div className="hero-top-badge">
              <span
                className="pill-badge"
                style={{
                  backgroundColor: 'var(--color-yellow)',
                  color: 'var(--color-ink)',
                }}
              >
                <span style={{ fontSize: '1rem' }}>🚀</span> B.TECH AI &amp; DATA SCIENCE • GGSIPU
                &apos;27
              </span>
            </div>

            <h1 className="hero-title">
              Bring back the{' '}
              <span className="highlight-pen">
                <span className="pen-text">joy</span>
                <span className="pen-stroke"></span>
              </span>{' '}
              of building.
            </h1>

            <p className="hero-lead">
              Hi, I&apos;m <strong>Grishi Sachdeva</strong>. Full-Stack Engineer &amp; AI Developer
              building intelligent multi-agent browser extensions, deepfake voice detectors, and
              e-commerce platforms that customers love.
            </p>

            {/* Hero Action Buttons */}
            <div className="hero-ctas">
              <a
                href="#projects"
                className="btn-sticker btn-lime hero-primary-btn"
                onClick={handleHeroProjectsClick}
              >
                <span className="btn-sticker-avatar">
                  <img
                    src="/assets/avatar.jpg"
                    alt="Grishi Avatar"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </span>
                Explore My Projects
              </a>

              <a
                href="https://github.com/grishisachdeva"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sticker btn-paper"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub Profile
              </a>

              <a
                href="https://drive.google.com/file/d/1EZjAboGyWFoupXcEUmrR8NEzGJBYI2VR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sticker btn-yellow"
                title="View Resume in Google Drive"
              >
                <span style={{ fontSize: '1.2rem' }}>📄</span> View Resume
              </a>

              <button className="btn-sticker btn-cyan btn-sm" onClick={onCopyEmail}>
                📋 Copy Email
              </button>
            </div>

            {/* Glowberry E-Commerce Banner */}
            <div className="study-banner">
              <div>
                <span className="study-banner-headline">🍓 500+ Orders Fulfilled</span>
                <span className="study-banner-sub">
                  as Founder &amp; Engineer at Glowberry Jewelry
                </span>
              </div>
              <a
                href="https://glow-berry-admin.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="study-link"
              >
                See Live Platform →
              </a>
            </div>

            {/* Laurel Wreath & Accreditations */}
            <div className="accreditations-row">
              <div className="laurel-wreath-badge">
                <svg width="28" height="48" viewBox="0 0 36 60" aria-hidden="true">
                  <path
                    d="M 26.27 54.78 L 24.41 54.09 L 22.61 53.25 L 20.88 52.28 L 19.23 51.17 L 17.68 49.94 L 16.23 48.58 L 14.89 47.12 L 13.67 45.55 L 12.58 43.89 L 11.62 42.15 L 10.81 40.34 L 10.14 38.47 L 9.62 36.55 L 9.26 34.60 L 9.05 32.62 L 9.00 30.64 L 9.11 28.66 L 9.37 26.69 L 9.79 24.75 L 10.37 22.85 L 11.09 21.00 L 11.95 19.21 L 12.96 17.50 L 14.10 15.87 L 15.36 14.34 L 16.74 12.91 L 18.23 11.60 L 19.82 10.41 L 21.50 9.35"
                    fill="none"
                    stroke="#043629"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <ellipse
                    cx="12"
                    cy="50"
                    rx="2.5"
                    ry="5.5"
                    fill="#e0ad12"
                    stroke="#043629"
                    strokeWidth="1"
                    transform="rotate(-250 12 50)"
                  />
                  <ellipse
                    cx="7"
                    cy="41"
                    rx="2.4"
                    ry="5.4"
                    fill="#e0ad12"
                    stroke="#043629"
                    strokeWidth="1"
                    transform="rotate(-230 7 41)"
                  />
                  <ellipse
                    cx="5"
                    cy="31"
                    rx="2.3"
                    ry="5.1"
                    fill="#e0ad12"
                    stroke="#043629"
                    strokeWidth="1"
                    transform="rotate(-210 5 31)"
                  />
                  <ellipse
                    cx="7"
                    cy="21"
                    rx="2.1"
                    ry="4.8"
                    fill="#e0ad12"
                    stroke="#043629"
                    strokeWidth="1"
                    transform="rotate(-190 7 21)"
                  />
                  <ellipse
                    cx="12"
                    cy="13"
                    rx="2.0"
                    ry="4.5"
                    fill="#e0ad12"
                    stroke="#043629"
                    strokeWidth="1"
                    transform="rotate(-170 12 13)"
                  />
                </svg>
                <span className="laurel-text">
                  8.55 CGPA
                  <br />
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-ink-muted)' }}>
                    AI &amp; Data Science
                  </span>
                </span>
                <svg
                  width="28"
                  height="48"
                  viewBox="0 0 36 60"
                  aria-hidden="true"
                  style={{ transform: 'scaleX(-1)' }}
                >
                  <path
                    d="M 26.27 54.78 L 24.41 54.09 L 22.61 53.25 L 20.88 52.28 L 19.23 51.17 L 17.68 49.94 L 16.23 48.58 L 14.89 47.12 L 13.67 45.55 L 12.58 43.89 L 11.62 42.15 L 10.81 40.34 L 10.14 38.47 L 9.62 36.55 L 9.26 34.60 L 9.05 32.62 L 9.00 30.64 L 9.11 28.66 L 9.37 26.69 L 9.79 24.75 L 10.37 22.85 L 11.09 21.00 L 11.95 19.21 L 12.96 17.50 L 14.10 15.87 L 15.36 14.34 L 16.74 12.91 L 18.23 11.60 L 19.82 10.41 L 21.50 9.35"
                    fill="none"
                    stroke="#043629"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <ellipse
                    cx="12"
                    cy="50"
                    rx="2.5"
                    ry="5.5"
                    fill="#e0ad12"
                    stroke="#043629"
                    strokeWidth="1"
                    transform="rotate(-250 12 50)"
                  />
                  <ellipse
                    cx="7"
                    cy="41"
                    rx="2.4"
                    ry="5.4"
                    fill="#e0ad12"
                    stroke="#043629"
                    strokeWidth="1"
                    transform="rotate(-230 7 41)"
                  />
                  <ellipse
                    cx="5"
                    cy="31"
                    rx="2.3"
                    ry="5.1"
                    fill="#e0ad12"
                    stroke="#043629"
                    strokeWidth="1"
                    transform="rotate(-210 5 31)"
                  />
                  <ellipse
                    cx="7"
                    cy="21"
                    rx="2.1"
                    ry="4.8"
                    fill="#e0ad12"
                    stroke="#043629"
                    strokeWidth="1"
                    transform="rotate(-190 7 21)"
                  />
                  <ellipse
                    cx="12"
                    cy="13"
                    rx="2.0"
                    ry="4.5"
                    fill="#e0ad12"
                    stroke="#043629"
                    strokeWidth="1"
                    transform="rotate(-170 12 13)"
                  />
                </svg>
              </div>

              <div className="stat-pill">
                <svg width="22" height="22" viewBox="0 0 100 100">
                  <path
                    d="M 50 4 L 58.4 29.7 L 82.5 17.5 L 70.3 41.6 L 96 50 L 70.3 58.4 L 82.5 82.5 L 58.4 70.3 L 50 96 L 41.6 70.3 L 17.5 82.5 L 29.7 58.4 L 4 50 L 29.7 41.6 L 17.5 17.5 L 41.6 29.7 Z"
                    fill="#68be00"
                    stroke="#043629"
                    strokeWidth="3"
                  />
                </svg>
                <span>93% &amp; 83% Merit</span>
              </div>

              <div className="stat-pill">
                <svg width="22" height="22" viewBox="0 0 100 100">
                  <path
                    d="M 50 4 L 58.4 29.7 L 82.5 17.5 L 70.3 41.6 L 96 50 L 70.3 58.4 L 82.5 82.5 L 58.4 70.3 L 50 96 L 41.6 70.3 L 17.5 82.5 L 29.7 58.4 L 4 50 L 29.7 41.6 L 17.5 17.5 L 41.6 29.7 Z"
                    fill="#ff6b3e"
                    stroke="#043629"
                    strokeWidth="3"
                  />
                </svg>
                <span>5 AI Models Interconnected</span>
              </div>
            </div>
          </div>

          {/* Hero Interactive Device Mockup Column */}
          <div className="hero-device-wrapper">
            <div className="device-blob-backdrop">
              <svg width="100%" height="100%" viewBox="0 0 140 140" className="animate-wobble">
                <path
                  d="M70 6 C 104 8 132 32 134 70 C 136 108 104 130 70 132 C 36 130 8 104 6 70 C 4 36 36 4 70 6 Z"
                  fill="#ffc629"
                  stroke="#043629"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <div className="pill-badge device-sticker-tag-1">YOU ARE THE BUILDER</div>
            <div className="pill-badge device-sticker-tag-2">ZERO FLUFF • 100% CODE</div>

            {/* Smartphone Shell */}
            <div className="device-phone">
              <div className="device-notch">
                <div className="notch-camera"></div>
                <div className="notch-sensor"></div>
              </div>

              <div className="device-screen">
                <div className="phone-header-ui">
                  <span className="phone-time">09:41 AM</span>
                  <span className="phone-battery">
                    <span>100%</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 4h-3V2h-4v2H7v18h10V4z" />
                    </svg>
                  </span>
                </div>

                <div className="phone-screen-content">
                  <div style={{ textAlign: 'center' }}>
                    <span
                      className="pill-badge"
                      id="phone-tag"
                      style={{
                        background: currentScreen.tagColor,
                        color: 'var(--color-ink)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {currentScreen.tag}
                    </span>
                    <h3 className="phone-project-title" id="phone-title">
                      {currentScreen.title}
                    </h3>
                    <p className="phone-project-desc" id="phone-desc">
                      {currentScreen.desc}
                    </p>
                  </div>

                  <div className="phone-project-preview">
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '6px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          color: 'var(--color-yellow)',
                        }}
                      >
                        STATUS: LIVE
                      </span>
                      <span style={{ fontSize: '0.65rem', color: '#fff' }}>v2.4.0</span>
                    </div>
                    <div
                      style={{
                        height: '48px',
                        background: 'rgba(0,0,0,0.25)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                      }}
                    >
                      <span style={{ fontSize: '1.2rem' }}>🤖</span>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: 'var(--color-paper)',
                        }}
                        id="phone-metric"
                      >
                        {currentScreen.metric}
                      </span>
                    </div>
                  </div>

                  <div>
                    <button
                      className="phone-interactive-btn"
                      id="phone-action-btn"
                      onClick={() => onOpenModal(currentScreen.projectId)}
                    >
                      {currentScreen.actionText}
                    </button>

                    <div className="phone-screen-controls">
                      {phoneScreens.map((_, i) => (
                        <span
                          key={i}
                          className={`phone-nav-dot ${i === screenIdx ? 'active' : ''}`}
                          onClick={() => handleDotClick(i)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

