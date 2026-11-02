'use client';

import React, { useState } from 'react';
import { sounds } from './SoundEngine';
import { fireConfetti } from './Confetti';

interface NavbarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ soundEnabled, onToggleSound }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleConnectClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    sounds.playSuccess();
    const rect = e.currentTarget.getBoundingClientRect();
    fireConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
  };

  const toggleMobile = () => {
    sounds.playBlip();
    setMobileOpen((prev) => !prev);
  };

  return (
    <header className="header-nav">
      <div className="container nav-container">
        <a href="#" className="brand-logo" id="nav-brand">
          <img src="/assets/avatar.jpg" alt="Grishi Sachdeva" className="brand-icon" />
          <span>
            Grishi<span style={{ color: 'var(--color-lime-deep)' }}>.dev</span>
          </span>
        </a>

        <nav
          className="nav-links"
          style={
            mobileOpen
              ? {
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'absolute',
                  top: '72px',
                  left: 0,
                  right: 0,
                  background: 'var(--color-paper)',
                  padding: '1.5rem',
                  borderBottom: 'var(--border-thick)',
                  boxShadow: 'var(--shadow-lg)',
                }
              : undefined
          }
        >
          <a href="#projects" className="nav-link" onClick={() => setMobileOpen(false)}>
            Projects
          </a>
          <a href="#arsenal" className="nav-link" onClick={() => setMobileOpen(false)}>
            Arsenal
          </a>
          <a href="#packs" className="nav-link" onClick={() => setMobileOpen(false)}>
            Packs
          </a>
          <a href="#experience" className="nav-link" onClick={() => setMobileOpen(false)}>
            Experience
          </a>
          <a href="#education" className="nav-link" onClick={() => setMobileOpen(false)}>
            Education
          </a>
          <a href="#arcade" className="nav-link" onClick={() => setMobileOpen(false)}>
            Arcade
          </a>
        </nav>

        <div className="nav-actions">
          <button
            id="sound-toggle-btn"
            className="sound-toggle-btn"
            title="Toggle 8-bit Sound Effects"
            onClick={onToggleSound}
            style={{
              backgroundColor: soundEnabled ? 'var(--color-yellow)' : 'var(--color-paper)',
            }}
          >
            {soundEnabled ? 'Sound ON' : 'Sound OFF'}
          </button>
          <a
            href="https://drive.google.com/file/d/1EZjAboGyWFoupXcEUmrR8NEzGJBYI2VR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sticker btn-yellow btn-sm"
            title="View Resume in Google Drive"
          >
            📄 Resume
          </a>
          <a
            href="https://github.com/grishisachdeva"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sticker btn-paper btn-sm"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="btn-sticker btn-lime btn-sm"
            onClick={handleConnectClick}
          >
            Connect ⚡
          </a>
          <button
            id="mobile-toggle"
            className="mobile-nav-toggle"
            aria-label="Toggle menu"
            onClick={toggleMobile}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
