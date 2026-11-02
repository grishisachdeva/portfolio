'use client';

import React, { useEffect } from 'react';
import { projectDetails } from './data';
import { sounds } from './SoundEngine';

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ projectId, onClose }) => {
  useEffect(() => {
    if (projectId) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          sounds.playBlip();
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [projectId, onClose]);

  if (!projectId) return null;
  const data = projectDetails[projectId];
  if (!data) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      sounds.playBlip();
      onClose();
    }
  };

  const handleCloseBtn = () => {
    sounds.playBlip();
    onClose();
  };

  return (
    <div
      className="modal-overlay open"
      id="project-modal"
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
    >
      <div className="modal-content-card">
        <button
          className="modal-close-btn"
          id="modal-close-btn"
          aria-label="Close modal"
          onClick={handleCloseBtn}
        >
          ✕
        </button>

        <span
          className="pill-badge"
          id="modal-tag"
          style={{
            background: data.tagColor || 'var(--color-yellow)',
            color: 'var(--color-ink)',
            marginBottom: '0.75rem',
          }}
        >
          {data.tag}
        </span>

        <h2
          id="modal-title"
          style={{ fontSize: '2rem', marginBottom: '0.75rem', color: 'var(--color-ink)' }}
        >
          {data.title}
        </h2>

        <p
          id="modal-desc"
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.6,
            color: 'var(--color-ink-muted)',
            marginBottom: '1.5rem',
          }}
        >
          {data.desc}
        </p>

        <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--color-ink)' }}>
          Key Architectural Highlights:
        </h4>
        <ul id="modal-bullets" className="timeline-bullets" style={{ marginBottom: '1.75rem' }}>
          {data.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--color-ink)' }}>
          Technologies Used:
        </h4>
        <div
          id="modal-tech"
          className="project-tech-pills"
          style={{ marginBottom: '2rem' }}
        >
          {data.tech.map((t, i) => (
            <span key={i} className="tech-pill">
              {t}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {data.live && (
            <a
              id="modal-live-btn"
              href={data.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sticker btn-lime"
            >
              🚀 Open Live Build
            </a>
          )}
          {data.github && (
            <a
              id="modal-github-btn"
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sticker btn-paper"
            >
              🐙 View GitHub Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

