import React from 'react';

export const Experience: React.FC = () => {
  return (
    <section className="timeline-section" id="experience">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <p className="section-eyebrow" style={{ color: 'var(--color-lime-deep)' }}>
            TRAJECTORY &amp; BACKGROUND
          </p>
          <h2 className="section-title">Experience &amp; Academic Honors</h2>
          <p className="section-desc" style={{ color: 'var(--color-ink-muted)' }}>
            Proven track record in software engineering, startup leadership, and top-tier academic
            rigor.
          </p>
        </div>

        <div className="timeline-cards-wrap">
          {/* Card 1: CyberFrat */}
          <div className="timeline-card">
            <div className="timeline-meta">
              <span className="timeline-period">SUMMER INTERN</span>
              <h3 className="timeline-entity">CyberFrat</h3>
              <span
                className="pill-badge timeline-role-pill"
                style={{ background: 'var(--color-lime)', color: 'var(--color-ink)' }}
              >
                Web Development Intern
              </span>
              <span
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-ink-muted)',
                  marginTop: '0.5rem',
                }}
              >
                HTML5 • CSS3 • React • JS
              </span>
            </div>
            <div className="timeline-body">
              <ul className="timeline-bullets">
                <li>
                  Developed and maintained responsive web applications using React.js and modern
                  JavaScript.
                </li>
                <li>
                  Collaborated directly with engineering mentors to optimize web performance,
                  improving overall user experience and page load times.
                </li>
                <li>
                  Assisted in troubleshooting, code review, bug triage, and implementing new features
                  based on project specifications.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: GlowBerry Founder */}
          <div className="timeline-card">
            <div className="timeline-meta">
              <span className="timeline-period">FOUNDER &amp; LEAD ENGINEER</span>
              <h3 className="timeline-entity">Glowberry</h3>
              <span
                className="pill-badge timeline-role-pill"
                style={{ background: 'var(--color-yellow)', color: 'var(--color-ink)' }}
              >
                Founder / Tech Lead
              </span>
              <span
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-ink-muted)',
                  marginTop: '0.5rem',
                }}
              >
                500+ Happy Customers • E-Commerce
              </span>
            </div>
            <div className="timeline-body">
              <ul className="timeline-bullets">
                <li>
                  <strong>End-to-End E-Commerce Leadership:</strong> Designed and engineered the
                  official GlowBerry website and Instagram storefront, cultivating a premium brand
                  identity that has fulfilled 500+ customer orders across India.
                </li>
                <li>
                  <strong>High-Performance UI/UX:</strong> Implemented modern design principles
                  including custom SVG micro-animations, optimized product grids, and high-contrast
                  typography pairings.
                </li>
                <li>
                  <strong>Strategic Brand Management:</strong> Direct all digital marketing,
                  inventory logistics, and luxury product positioning, leveraging technical web
                  analytics to drive consistent organic business growth.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Education - GGSIPU */}
          <div className="timeline-card" id="education">
            <div className="timeline-meta">
              <span className="timeline-period">SEP 2023 – SEP 2027</span>
              <h3 className="timeline-entity">GGSIPU (ADGIPS)</h3>
              <span
                className="pill-badge timeline-role-pill"
                style={{ background: 'var(--color-cyan)', color: 'var(--color-ink)' }}
              >
                B.Tech AI &amp; Data Science
              </span>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--color-lime-deep)',
                  marginTop: '0.5rem',
                }}
              >
                ★ CGPA: 8.55 / 10.0
              </span>
            </div>
            <div className="timeline-body">
              <ul className="timeline-bullets">
                <li>
                  Pursuing specialized degree in <strong>Artificial Intelligence and Data Science</strong>{' '}
                  at Dr. Akhilesh Das Gupta Institute of Professional Studies (ADGIPS), Guru Gobind
                  Singh Indraprastha University.
                </li>
                <li>
                  Core Coursework: Deep Learning, Neural Networks, Data Structures &amp; Algorithms,
                  Operating Systems, Database Management Systems, Machine Learning, Computer Vision.
                </li>
                <li>
                  Active researcher and builder in audio deepfake detection, WASM browser extensions,
                  and agentic LLM orchestration.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4: High School - Holy Child */}
          <div className="timeline-card">
            <div className="timeline-meta">
              <span className="timeline-period">HIGH SCHOOL</span>
              <h3 className="timeline-entity">Holy Child Sr. Sec.</h3>
              <span
                className="pill-badge timeline-role-pill"
                style={{ background: 'var(--color-pink)', color: 'var(--color-ink)' }}
              >
                Class X &amp; Class XII
              </span>
              <span
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-ink-muted)',
                  marginTop: '0.5rem',
                }}
              >
                CBSE Board Excellence
              </span>
            </div>
            <div className="timeline-body">
              <ul className="timeline-bullets">
                <li>
                  <strong>Class XII (2023):</strong> Graduated with <strong>83%</strong> with rigorous
                  focus on Physics, Chemistry, and Mathematics.
                </li>
                <li>
                  <strong>Class X (2021):</strong> Graduated with <strong>93%</strong> distinction in
                  Science and Mathematics.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

