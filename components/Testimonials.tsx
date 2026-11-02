import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <p className="section-eyebrow" style={{ color: 'var(--color-lime-deep)' }}>
            COLLABORATOR &amp; USER FEEDBACK
          </p>
          <h2 className="section-title">Real humans. Real code.</h2>
          <p className="section-desc" style={{ color: 'var(--color-ink-muted)' }}>
            What team members, clients, and fellow engineers say about working with Grishi.
          </p>
        </div>

        <div className="testimonials-grid">
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-quote">
              &ldquo;Grishi&apos;s execution on GlowBerry was breathtaking. She single-handedly
              created the aesthetic, engineered the website, and managed orders flawlessly for
              hundreds of buyers. Rare blend of design taste and technical grit.&rdquo;
            </p>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: 'var(--color-pink)' }}>
                R
              </div>
              <div>
                <p className="testi-name">Riya M.</p>
                <p className="testi-role">E-Commerce Collaborator</p>
              </div>
            </div>
          </div>

          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-quote">
              &ldquo;Context Bridge is genuinely one of the most useful Chrome extensions I&apos;ve
              tested. Comparing Claude vs ChatGPT outputs without 10 open tabs saved hours of developer
              prompting. Brilliant architecture!&rdquo;
            </p>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: 'var(--color-cyan)' }}>
                A
              </div>
              <div>
                <p className="testi-name">Aarav K.</p>
                <p className="testi-role">Full-Stack Developer</p>
              </div>
            </div>
          </div>

          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-quote">
              &ldquo;Consistently top of her cohort at GGSIPU. Her deepfake audio detection pipeline on
              the ASVspoof dataset showed deep comprehension of signal processing and CNN
              interpretability beyond regular coursework.&rdquo;
            </p>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: 'var(--color-yellow)' }}>
                S
              </div>
              <div>
                <p className="testi-name">Dr. Sharma</p>
                <p className="testi-role">Academic Mentor &amp; Faculty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

