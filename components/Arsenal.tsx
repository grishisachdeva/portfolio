import React from 'react';

export const Arsenal: React.FC = () => {
  return (
    <section className="arsenal-section" id="arsenal">
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="section-eyebrow" style={{ color: 'var(--color-lime-deep)' }}>
          ENGINEERING CAPABILITIES
        </p>
        <h2 className="section-title">One tech stack. Endless possibilities.</h2>
        <p className="section-desc" style={{ color: 'var(--color-ink-muted)' }}>
          From low-level browser DOM hooks and WASM binaries to deep neural networks and pixel-perfect
          high-converting web apps.
        </p>

        <div className="arsenal-grid">
          {/* Pillar 1: AI & Deep Learning */}
          <div className="arsenal-card card-lime">
            <div
              className="arsenal-icon-circle"
              style={{ background: 'var(--color-lime)', color: 'var(--color-ink)' }}
            >
              🧠
            </div>
            <h3 className="arsenal-heading">AI &amp; Deep Learning</h3>
            <p className="arsenal-lead">
              Designing robust convolutional networks, audio spectrogram extractors, and generative
              LLM pipelines with explainability built in.
            </p>
            <div className="skill-tag-cloud">
              <span className="skill-tag">PyTorch</span>
              <span className="skill-tag">TensorFlow</span>
              <span className="skill-tag">Keras</span>
              <span className="skill-tag">Scikit-learn</span>
              <span className="skill-tag">OpenCV</span>
              <span className="skill-tag">XGBoost</span>
              <span className="skill-tag">Librosa</span>
              <span className="skill-tag">NumPy</span>
              <span className="skill-tag">Streamlit</span>
            </div>
          </div>

          {/* Pillar 2: Modern Full-Stack Web */}
          <div className="arsenal-card card-cyan">
            <div
              className="arsenal-icon-circle"
              style={{ background: 'var(--color-cyan)', color: 'var(--color-ink)' }}
            >
              💻
            </div>
            <h3 className="arsenal-heading">Full-Stack Web</h3>
            <p className="arsenal-lead">
              Crafting fluid, high-octane client interfaces and resilient backend servers with
              high-contrast typography and micro-interactions.
            </p>
            <div className="skill-tag-cloud">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">Redux</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Framer Motion</span>
              <span className="skill-tag">JavaScript (ES6+)</span>
              <span className="skill-tag">HTML5 / CSS3</span>
            </div>
          </div>

          {/* Pillar 3: Browser MV3 & Systems */}
          <div className="arsenal-card card-ember">
            <div
              className="arsenal-icon-circle"
              style={{ background: 'var(--color-ember)', color: '#fff' }}
            >
              ⚡
            </div>
            <h3 className="arsenal-heading">Browser &amp; Systems</h3>
            <p className="arsenal-lead">
              Building background service workers, WebAssembly execution layers, relational
              databases, and automated DOM scraping systems.
            </p>
            <div className="skill-tag-cloud">
              <span className="skill-tag">Chrome MV3</span>
              <span className="skill-tag">Stockfish WASM</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Supabase</span>
              <span className="skill-tag">Git / GitHub</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">C Language</span>
              <span className="skill-tag">BASH / Linux</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

