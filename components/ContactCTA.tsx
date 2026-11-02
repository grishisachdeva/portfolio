'use client';

import React from 'react';
import { sounds } from './SoundEngine';
import { fireConfetti } from './Confetti';

interface ContactCTAProps {
  onCopyEmail: () => void;
  onCopyPhone: () => void;
  showToast: (msg: string) => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  onCopyEmail,
  onCopyPhone,
  showToast,
}) => {
  const handleEmailRedirect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Sound & confetti
    sounds.playSuccess();
    const rect = e.currentTarget.getBoundingClientRect();
    fireConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);

    // Auto copy email to clipboard as convenience guarantee
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('grishisachdeva@gmail.com').catch(() => {});
    }

    const gmailComposeUrl =
      'https://mail.google.com/mail/?view=cm&fs=1&to=grishisachdeva@gmail.com&su=Hello%20Grishi!';

    // Try opening in new tab
    const win = window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');

    if (!win || win.closed || typeof win.closed === 'undefined') {
      // Popup was blocked by browser, redirect current window or fallback to mailto
      showToast('Opening email client (grishisachdeva@gmail.com)...');
      window.location.href = 'mailto:grishisachdeva@gmail.com?subject=Hello%20Grishi!';
    } else {
      showToast('Opening Gmail compose...');
    }

    // prevent default since window.open or window.location was explicitly handled
    e.preventDefault();
  };

  return (
    <section className="cta-section" id="contact">
      <div className="container cta-box">
        <div
          className="pill-badge"
          style={{
            background: 'var(--color-lime)',
            color: 'var(--color-ink)',
            marginBottom: '1.25rem',
            transform: 'rotate(-2deg)',
          }}
        >
          OPEN FOR ROLES &amp; OPPORTUNITIES
        </div>

        <h2 className="cta-title">
          Ready to build something{' '}
          <span className="highlight-pen lime">
            <span className="pen-text">unforgettable</span>
            <span className="pen-stroke"></span>
          </span>
          ?
        </h2>

        <p className="cta-desc">
          Whether you have an ambitious AI project, a high-growth product team, or an engineering role,
          let&apos;s talk.
        </p>

        <div className="cta-actions">
          {/* Email button with reliable Gmail redirection */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=grishisachdeva@gmail.com&su=Hello%20Grishi!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sticker btn-lime btn-lg"
            onClick={handleEmailRedirect}
            title="Open in Gmail Compose"
          >
            <span style={{ fontSize: '1.5rem' }}>✉️</span> Say Hello via Email
          </a>

          <a
            href="https://www.linkedin.com/in/grishisachdeva/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sticker btn-paper btn-lg"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>

        {/* Quick Copy Direct Contact Pills */}
        <div className="direct-contacts-row">
          <div
            className="contact-pill-item"
            onClick={onCopyEmail}
            title="Click to copy email address"
          >
            <span>📧</span>
            <span>grishisachdeva@gmail.com</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-ink-muted)' }}>[copy]</span>
          </div>

          <div
            className="contact-pill-item"
            onClick={onCopyPhone}
            title="Click to copy phone number"
          >
            <span>📞</span>
            <span>+91 8826527495</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-ink-muted)' }}>[copy]</span>
          </div>

          <a
            href="https://github.com/grishisachdeva"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-pill-item"
          >
            <span>🐙</span>
            <span>github.com/grishisachdeva</span>
          </a>

          <a
            href="https://drive.google.com/file/d/1EZjAboGyWFoupXcEUmrR8NEzGJBYI2VR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-pill-item"
            title="View Resume in Google Drive"
          >
            <span>📄</span>
            <span>Resume (Google Drive)</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-ink-muted)' }}>[view ↗]</span>
          </a>
        </div>
      </div>
    </section>
  );
};

