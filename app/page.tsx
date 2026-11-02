'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Arsenal } from '@/components/Arsenal';
import { Packs } from '@/components/Packs';
import { Experience } from '@/components/Experience';
import { Award } from '@/components/Award';
import { Testimonials } from '@/components/Testimonials';
import { Arcade } from '@/components/Arcade';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';
import { ProjectModal } from '@/components/ProjectModal';
import { Toast } from '@/components/Toast';
import { sounds } from '@/components/SoundEngine';
import { fireConfetti } from '@/components/Confetti';

export default function Home() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isWiggling, setIsWiggling] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    sounds.playCoin();
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const copyToClipboard = (text: string, successMsg: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          showToast(successMsg);
          fireConfetti();
        })
        .catch(() => {
          // Fallback
          const input = document.createElement('input');
          input.value = text;
          document.body.appendChild(input);
          input.select();
          document.execCommand('copy');
          document.body.removeChild(input);
          showToast(successMsg);
          fireConfetti();
        });
    }
  };

  const handleCopyEmail = () => {
    copyToClipboard('grishisachdeva@gmail.com', 'Copied grishisachdeva@gmail.com to clipboard!');
  };

  const handleCopyPhone = () => {
    copyToClipboard('+918826527495', 'Copied +91 8826527495 to clipboard!');
  };

  const handleToggleSound = () => {
    const active = sounds.toggle();
    setSoundEnabled(active);
    if (active) sounds.playPop();
  };

  const handleToggleWiggle = () => {
    setIsWiggling((prev) => {
      const next = !prev;
      sounds.playLaser();
      if (next) fireConfetti();
      return next;
    });
  };

  useEffect(() => {
    // Toggle wobble class on cards when isWiggling changes
    const targets = document.querySelectorAll(
      '.sticker-card, .pill-badge, .project-card, .pack-card'
    );
    targets.forEach((el) => {
      el.classList.toggle('animate-wobble', isWiggling);
    });
  }, [isWiggling]);

  const handleOpenModal = (projectId: string) => {
    sounds.playPop();
    setActiveModal(projectId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <main>
      <Navbar soundEnabled={soundEnabled} onToggleSound={handleToggleSound} />
      <Hero onOpenModal={handleOpenModal} onCopyEmail={handleCopyEmail} />
      <Projects onOpenModal={handleOpenModal} />
      <Arsenal />
      <Packs />
      <Experience />
      <Award />
      <Testimonials />
      <Arcade onToggleWiggle={handleToggleWiggle} isWiggling={isWiggling} />
      <ContactCTA
        onCopyEmail={handleCopyEmail}
        onCopyPhone={handleCopyPhone}
        showToast={showToast}
      />
      <Footer />

      {/* Project Deep Dive Modal */}
      <ProjectModal projectId={activeModal} onClose={handleCloseModal} />

      {/* Toast Notice */}
      <Toast message={toastMessage} />
    </main>
  );
}

