'use client';

import React, { useState } from 'react';
import { sounds } from './SoundEngine';

interface ProjectsProps {
  onOpenModal: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenModal }) => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'web' | 'extension' | 'startup'>('all');

  const handleFilterClick = (newFilter: 'all' | 'ai' | 'web' | 'extension' | 'startup') => {
    sounds.playPop();
    setFilter(newFilter);
  };

  const isVisible = (categories: string[]) => {
    if (filter === 'all') return true;
    return categories.includes(filter);
  };

  return (
    <section className="stage-section" id="projects">
      {/* Floating Stage SVGs */}
      <div
        style={{
          position: 'absolute',
          top: '30px',
          right: '8%',
          transform: 'rotate(-12deg)',
          pointerEvents: 'none',
        }}
      >
        <svg width="120" height="84" viewBox="0 0 130 91">
          <path
            d="M4 87 L 4 40.95 A 61 40.95 0 0 1 126 40.95 L 126 87 Z"
            fill="#ffc629"
            stroke="#043629"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '6%',
          transform: 'rotate(6deg)',
          pointerEvents: 'none',
        }}
      >
        <svg width="130" height="38" viewBox="0 0 120 34" fill="none">
          <path
            d="M3 28 L 18 6 L 33 28 L 48 6 L 63 28 L 78 6 L 93 28 L 108 6 L 117 20"
            stroke="#68be00"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      <div className="container" style={{ textAlign: 'center' }}>
        <p className="section-eyebrow">SIX FLAGSHIP BUILDS</p>
        <h2 className="section-title">Projects built for real humans &amp; real impact.</h2>
        <p className="section-desc">
          Click on any project to launch deep-dive architecture specs, run interactive live demos, or
          view open-source GitHub code.
        </p>

        {/* Category Filter Pills */}
        <div className="filter-bar">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            All Builds (6)
          </button>
          <button
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => handleFilterClick('ai')}
          >
            AI &amp; Deep Learning
          </button>
          <button
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => handleFilterClick('web')}
          >
            Full-Stack Web
          </button>
          <button
            className={`filter-btn ${filter === 'extension' ? 'active' : ''}`}
            onClick={() => handleFilterClick('extension')}
          >
            Chrome MV3
          </button>
          <button
            className={`filter-btn ${filter === 'startup' ? 'active' : ''}`}
            onClick={() => handleFilterClick('startup')}
          >
            Startup &amp; E-Commerce
          </button>
        </div>

        {/* Projects Showcase Grid */}
        <div className="projects-showcase-grid">
          {/* Project 1: Context Bridge */}
          {isVisible(['ai', 'extension']) && (
            <div className="project-card">
              <div className="project-img-box">
                <span
                  className="pill-badge project-pill-tag"
                  style={{ background: 'var(--color-cyan)', color: 'var(--color-ink)' }}
                >
                  Multi-AI Routing
                </span>
                <img src="/assets/context_bridge.jpg" alt="Context Bridge" />
              </div>
              <h3 className="project-card-title">Context Bridge</h3>
              <p className="project-card-desc">
                Chrome MV3 extension enabling real-time interoperability across 5 AI platforms
                (ChatGPT, Claude, Gemini, Perplexity, DeepSeek). Instant cross-model critiques.
              </p>
              <div className="project-tech-pills">
                <span className="tech-pill">Chrome MV3</span>
                <span className="tech-pill">JavaScript</span>
                <span className="tech-pill">DOM APIs</span>
                <span className="tech-pill">Service Workers</span>
              </div>
              <div className="project-actions">
                <button
                  className="btn-sticker btn-cyan btn-sm"
                  onClick={() => onOpenModal('context-bridge')}
                >
                  Inspect Architecture
                </button>
                <a
                  href="https://github.com/grishisachdeva/context-bridge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sticker btn-paper btn-sm"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          )}

          {/* Project 2: GlowBerry E-Commerce */}
          {isVisible(['web', 'startup']) && (
            <div className="project-card">
              <div className="project-img-box">
                <span
                  className="pill-badge project-pill-tag"
                  style={{ background: 'var(--color-yellow)', color: 'var(--color-ink)' }}
                >
                  500+ Customers
                </span>
                <img src="/assets/glowberry.jpg" alt="Glowberry E-Commerce" />
              </div>
              <h3 className="project-card-title">GlowBerry Platform &amp; Admin</h3>
              <p className="project-card-desc">
                Founder &amp; Engineer for India&apos;s cutest gifting &amp; jewelry boutique.
                Soft-minimalist responsive storefront, Next.js admin, SVG micro-animations, and
                Supabase backend.
              </p>
              <div className="project-tech-pills">
                <span className="tech-pill">Next.js</span>
                <span className="tech-pill">Supabase</span>
                <span className="tech-pill">Tailwind CSS</span>
                <span className="tech-pill">Figma UI/UX</span>
              </div>
              <div className="project-actions">
                <button
                  className="btn-sticker btn-yellow btn-sm"
                  onClick={() => onOpenModal('glowberry')}
                >
                  Case Study
                </button>
                <a
                  href="https://glow-berry-admin.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sticker btn-lime btn-sm"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          )}

          {/* Project 3: Audio Deepfake & Synthetic Voice Detector */}
          {isVisible(['ai']) && (
            <div className="project-card">
              <div className="project-img-box">
                <span
                  className="pill-badge project-pill-tag"
                  style={{ background: 'var(--color-ember)', color: '#fff' }}
                >
                  Cybersecurity AI
                </span>
                <img src="/assets/deepfake_detector.jpg" alt="Deepfake Audio Detector" />
              </div>
              <h3 className="project-card-title">Audio Deepfake Detector</h3>
              <p className="project-card-desc">
                Deep-learning classifier identifying BONAFIDE vs SPOOF speech via Log-Mel
                spectrograms, CNN architecture, and Grad-CAM explainability on ASVspoof 2021 DF
                dataset.
              </p>
              <div className="project-tech-pills">
                <span className="tech-pill">PyTorch</span>
                <span className="tech-pill">Librosa</span>
                <span className="tech-pill">Grad-CAM</span>
                <span className="tech-pill">Streamlit</span>
              </div>
              <div className="project-actions">
                <button
                  className="btn-sticker btn-ember btn-sm"
                  onClick={() => onOpenModal('voice-detector')}
                >
                  ML Specs
                </button>
                <a
                  href="https://github.com/grishisachdeva/synthetic-voice-detector"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sticker btn-paper btn-sm"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          )}

          {/* Project 4: Chessio & Chessio Web */}
          {isVisible(['extension', 'web']) && (
            <div className="project-card">
              <div className="project-img-box">
                <span
                  className="pill-badge project-pill-tag"
                  style={{ background: 'var(--color-purple)', color: '#fff' }}
                >
                  WASM Engine
                </span>
                <img src="/assets/chessio.jpg" alt="Chessio Assistant" />
              </div>
              <h3 className="project-card-title">Chessio: Live Stockfish</h3>
              <p className="project-card-desc">
                Real-time Stockfish WASM chess assistant overlaid directly on Chess.com &amp;
                Lichess. Scrapes board state, paints eval bar, mini-board, and best move vector
                arrows.
              </p>
              <div className="project-tech-pills">
                <span className="tech-pill">Stockfish WASM</span>
                <span className="tech-pill">Chrome MV3</span>
                <span className="tech-pill">Next.js</span>
                <span className="tech-pill">Vercel</span>
              </div>
              <div className="project-actions">
                <button
                  className="btn-sticker btn-purple btn-sm"
                  onClick={() => onOpenModal('chessio')}
                >
                  Extension Info
                </button>
                <a
                  href="https://chessio-beige.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sticker btn-lime btn-sm"
                >
                  Live Web App ↗
                </a>
              </div>
            </div>
          )}

          {/* Project 5: CyberFrat Web Applications */}
          {isVisible(['web']) && (
            <div className="project-card">
              <div
                className="project-img-box"
                style={{
                  background: 'linear-gradient(135deg, #043629, #0f614a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <span
                  className="pill-badge project-pill-tag"
                  style={{ background: 'var(--color-lime)', color: 'var(--color-ink)' }}
                >
                  Internship
                </span>
                <span style={{ fontSize: '3.5rem' }}>⚡</span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    color: '#fff',
                    fontWeight: 700,
                  }}
                >
                  CyberFrat Frontend
                </span>
              </div>
              <h3 className="project-card-title">CyberFrat Web Platform</h3>
              <p className="project-card-desc">
                Responsive enterprise web apps built during summer internship. Collaborated with core
                engineering team to optimize load times, user flow, and cross-browser rendering.
              </p>
              <div className="project-tech-pills">
                <span className="tech-pill">React.js</span>
                <span className="tech-pill">HTML5/CSS3</span>
                <span className="tech-pill">JavaScript</span>
                <span className="tech-pill">Performance</span>
              </div>
              <div className="project-actions">
                <button
                  className="btn-sticker btn-lime btn-sm"
                  onClick={() => onOpenModal('cyberfrat')}
                >
                  Internship Work
                </button>
                <a
                  href="https://www.linkedin.com/in/grishisachdeva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sticker btn-paper btn-sm"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          )}

          {/* Project 6: GlowBerry Admin Portal */}
          {isVisible(['web', 'startup']) && (
            <div className="project-card">
              <div
                className="project-img-box"
                style={{
                  background: 'linear-gradient(135deg, #fce4ec, #f8bbd0)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <span
                  className="pill-badge project-pill-tag"
                  style={{ background: 'var(--color-pink)', color: 'var(--color-ink)' }}
                >
                  E-Commerce CRM
                </span>
                <span style={{ fontSize: '3.5rem' }}>📊</span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    color: 'var(--color-ink)',
                    fontWeight: 700,
                  }}
                >
                  Admin Dashboard
                </span>
              </div>
              <h3 className="project-card-title">GlowBerry Admin Dashboard</h3>
              <p className="project-card-desc">
                Custom back-office operations suite powering order tracking, customer SMS alerts,
                inventory counts, and luxury hamper bundle configurations for 500+ happy buyers.
              </p>
              <div className="project-tech-pills">
                <span className="tech-pill">Next.js 14</span>
                <span className="tech-pill">Supabase Auth</span>
                <span className="tech-pill">PostgreSQL</span>
                <span className="tech-pill">Vercel</span>
              </div>
              <div className="project-actions">
                <a
                  href="https://glow-berry-admin.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sticker btn-pink btn-sm"
                >
                  Open Admin App ↗
                </a>
                <a
                  href="https://github.com/grishisachdeva/GlowBerry-Admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sticker btn-paper btn-sm"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

