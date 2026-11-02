import React from 'react';

export const Award: React.FC = () => {
  return (
    <section className="award-feature-section">
      <div className="container">
        <div className="award-box">
          <div className="award-trophy-icon">🏆</div>
          <p className="section-eyebrow" style={{ color: 'var(--color-yellow)' }}>
            ACADEMIC EXCELLENCE &amp; ENTREPRENEURSHIP
          </p>
          <h2 className="award-box-title">Built with Passion. Proven by Results.</h2>
          <p className="award-box-desc">
            Maintaining an 8.55 CGPA in Artificial Intelligence &amp; Data Science while scaling a
            commercial e-commerce business to 500+ customers and engineering bleeding-edge AI Chrome
            extensions.
          </p>

          <div className="award-metrics-row">
            <div className="award-stat-item">
              <span className="award-stat-num">8.55</span>
              <span className="award-stat-lbl">Undergrad CGPA</span>
            </div>
            <div className="award-stat-item">
              <span className="award-stat-num">500+</span>
              <span className="award-stat-lbl">Customers Served</span>
            </div>
            <div className="award-stat-item">
              <span className="award-stat-num">5+</span>
              <span className="award-stat-lbl">AI Models Bridged</span>
            </div>
            <div className="award-stat-item">
              <span className="award-stat-num">93%</span>
              <span className="award-stat-lbl">High School Honors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

