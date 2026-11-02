import React from 'react';

export const Packs: React.FC = () => {
  return (
    <section className="packs-section" id="packs">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <p className="section-eyebrow" style={{ color: 'var(--color-ember)' }}>
            SPECIALIZED WORKFLOWS
          </p>
          <h2 className="section-title">The packs teams reach for first.</h2>
          <p className="section-desc" style={{ color: 'var(--color-ink-muted)' }}>
            Turnkey engineering competencies ready to plug directly into your production codebase or
            high-growth startup.
          </p>
        </div>

        <div className="packs-grid">
          {/* Pack 1 */}
          <div className="pack-card">
            <div className="pack-card-header">
              <div className="pack-icon-pill" style={{ background: 'var(--color-cyan)' }}>
                🤖
              </div>
              <span className="pack-badge" style={{ background: 'var(--color-cyan)' }}>
                Multi-AI
              </span>
            </div>
            <h3 className="pack-title">Cross-Model Orchestration</h3>
            <p className="pack-desc">
              Sync context across Claude, ChatGPT, Gemini, and DeepSeek. Inject prompts, scrape
              responses, and orchestrate automated AI consensus.
            </p>
            <div className="pack-footer">
              <span>Proof of work: Context Bridge</span>
              <span style={{ color: 'var(--color-lime-deep)' }}>MV3 Ready</span>
            </div>
          </div>

          {/* Pack 2 */}
          <div className="pack-card">
            <div className="pack-card-header">
              <div className="pack-icon-pill" style={{ background: 'var(--color-yellow)' }}>
                🍓
              </div>
              <span className="pack-badge" style={{ background: 'var(--color-yellow)' }}>
                E-Commerce
              </span>
            </div>
            <h3 className="pack-title">Soft-Minimalist Storefronts</h3>
            <p className="pack-desc">
              Luxury product positioning, optimized image grids, custom SVG micro-animations, and
              frictionless checkout flows that drive repeat orders.
            </p>
            <div className="pack-footer">
              <span>500+ orders fulfilled</span>
              <span style={{ color: 'var(--color-lime-deep)' }}>High Conversion</span>
            </div>
          </div>

          {/* Pack 3 */}
          <div className="pack-card">
            <div className="pack-card-header">
              <div className="pack-icon-pill" style={{ background: 'var(--color-ember)', color: '#fff' }}>
                🛡️
              </div>
              <span className="pack-badge" style={{ background: 'var(--color-ember)', color: '#fff' }}>
                Cybersecurity
              </span>
            </div>
            <h3 className="pack-title">Synthetic Audio Forensics</h3>
            <p className="pack-desc">
              Log-Mel spectrogram generation, CNN-based spoof classification, and Grad-CAM
              explainability heatmaps for defending against voice cloning.
            </p>
            <div className="pack-footer">
              <span>ASVspoof 2021 DF tested</span>
              <span style={{ color: 'var(--color-lime-deep)' }}>Real-time Streamlit</span>
            </div>
          </div>

          {/* Pack 4 */}
          <div className="pack-card">
            <div className="pack-card-header">
              <div className="pack-icon-pill" style={{ background: 'var(--color-purple)', color: '#fff' }}>
                ♟️
              </div>
              <span className="pack-badge" style={{ background: 'var(--color-purple)', color: '#fff' }}>
                WebAssembly
              </span>
            </div>
            <h3 className="pack-title">In-Browser WASM Engines</h3>
            <p className="pack-desc">
              Bundle C/C++ compiled binaries into the browser. Scrape dynamic live DOMs with zero lag
              and paint real-time mathematical vector overlays.
            </p>
            <div className="pack-footer">
              <span>Stockfish 16 WASM</span>
              <span style={{ color: 'var(--color-lime-deep)' }}>Zero Backend Cost</span>
            </div>
          </div>

          {/* Pack 5 */}
          <div className="pack-card">
            <div className="pack-card-header">
              <div className="pack-icon-pill" style={{ background: 'var(--color-lime)' }}>
                ⚡
              </div>
              <span className="pack-badge" style={{ background: 'var(--color-lime)' }}>
                Frontend
              </span>
            </div>
            <h3 className="pack-title">Neo-Brutalist High-Impact UI</h3>
            <p className="pack-desc">
              Crisp 3px borders, chunky sticker drop shadows, tactile button physics, Google font
              pairings, and responsive mobile-first layouts.
            </p>
            <div className="pack-footer">
              <span>Wakeout-Grade Aesthetics</span>
              <span style={{ color: 'var(--color-lime-deep)' }}>Zero Placeholders</span>
            </div>
          </div>

          {/* Pack 6 */}
          <div className="pack-card">
            <div className="pack-card-header">
              <div className="pack-icon-pill" style={{ background: 'var(--color-pink)' }}>
                📈
              </div>
              <span className="pack-badge" style={{ background: 'var(--color-pink)' }}>
                Analytics
              </span>
            </div>
            <h3 className="pack-title">End-to-End Brand Growth</h3>
            <p className="pack-desc">
              From wireframing in Figma to shipping Supabase databases, running Instagram social funnels,
              and managing physical inventory operations.
            </p>
            <div className="pack-footer">
              <span>Zero-dollar ad spend model</span>
              <span style={{ color: 'var(--color-lime-deep)' }}>Organic Scale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

