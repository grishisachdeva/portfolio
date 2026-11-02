'use client';

import React, { useState } from 'react';
import { sounds } from './SoundEngine';
import { fireConfetti } from './Confetti';

interface ArcadeProps {
  onToggleWiggle: () => void;
  isWiggling: boolean;
}

export const Arcade: React.FC<ArcadeProps> = ({ onToggleWiggle, isWiggling }) => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const triggerKey = (type: 'pop' | 'coin' | 'laser' | 'success', e?: React.MouseEvent) => {
    setActiveKey(type);
    setTimeout(() => setActiveKey(null), 200);

    if (type === 'pop') sounds.playPop();
    else if (type === 'coin') sounds.playCoin();
    else if (type === 'laser') sounds.playLaser();
    else if (type === 'success') {
      sounds.playSuccess();
      if (e) {
        const rect = e.currentTarget.getBoundingClientRect();
        fireConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
      } else {
        fireConfetti();
      }
    }
  };

  return (
    <section className="arcade-section" id="arcade">
      <div className="container">
        <div className="arcade-box">
          <p className="section-eyebrow" style={{ color: 'var(--color-yellow)' }}>
            RETRO SOUNDBOARD &amp; EASTER EGGS
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.75rem' }}>
            Interactive Arcade
          </h2>
          <p
            style={{
              color: 'rgba(255, 248, 230, 0.85)',
              fontSize: '1rem',
              maxWidth: '500px',
              margin: '0 auto 1.5rem',
            }}
          >
            Just like Wakeout makes you move, click these buttons to test our Web Audio synthesizer or
            toggle global wiggle physics!
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <button
              className="btn-sticker btn-sm"
              id="wiggle-toggle-btn"
              onClick={onToggleWiggle}
              style={{
                backgroundColor: isWiggling ? 'var(--color-pink)' : 'var(--color-yellow)',
              }}
            >
              {isWiggling ? 'Stop Wiggling!' : 'Turn on Wiggle Mode'}
            </button>
          </div>

          {/* 4 Arcade Keys */}
          <div className="arcade-board">
            <button
              className={`arcade-key-btn ${activeKey === 'pop' ? 'active-pop' : ''}`}
              onClick={(e) => triggerKey('pop', e)}
            >
              <span style={{ fontSize: '1.8rem' }}>🫧</span>
              <span>Pop (420Hz)</span>
            </button>
            <button
              className={`arcade-key-btn ${activeKey === 'coin' ? 'active-pop' : ''}`}
              onClick={(e) => triggerKey('coin', e)}
            >
              <span style={{ fontSize: '1.8rem' }}>🪙</span>
              <span>Coin (8-bit)</span>
            </button>
            <button
              className={`arcade-key-btn ${activeKey === 'laser' ? 'active-pop' : ''}`}
              onClick={(e) => triggerKey('laser', e)}
            >
              <span style={{ fontSize: '1.8rem' }}>⚡</span>
              <span>Laser Zap</span>
            </button>
            <button
              className={`arcade-key-btn ${activeKey === 'success' ? 'active-pop' : ''}`}
              onClick={(e) => triggerKey('success', e)}
            >
              <span style={{ fontSize: '1.8rem' }}>🎉</span>
              <span>Confetti Fanfare</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

