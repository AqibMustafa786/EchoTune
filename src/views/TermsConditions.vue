<script setup>
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
};

const handleSwipe = () => {
  const swipeDistance = touchEndX - touchStartX;
  if (swipeDistance > 100) {
    window.location.href = 'echotune://settings';
  }
};

onMounted(() => {
  window.addEventListener('touchstart', handleTouchStart, { passive: true });
  window.addEventListener('touchend', handleTouchEnd, { passive: true });

  let ctx = gsap.context(() => {
    gsap.from(".legal-header > *", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    const sections = document.querySelectorAll('.terms-section');
    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });

    const items = document.querySelectorAll('.term-card');
    items.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    });
  });
});

onUnmounted(() => {
  window.removeEventListener('touchstart', handleTouchStart);
  window.removeEventListener('touchend', handleTouchEnd);
});
</script>

<template>
  <div class="legal-page section-container">
    <div class="noise-overlay"></div>
    <div class="glow-spot top-right"></div>
    <div class="glow-spot bottom-left"></div>
    
    <header class="legal-header">
      <h1 class="gradient-text">Terms & Conditions</h1>
      <p class="subtitle">Agreement for the EchoTune experience. Last updated: April 30, 2026.</p>
    </header>

    <div class="legal-content glass-card">
      <section class="terms-section">
        <h2>1. Agreement to Terms</h2>
        <p>
          By downloading, installing, or using EchoTune, you agree to be bound by these Terms and Conditions. 
          If you do not agree, please do not use the application.
        </p>
      </section>

      <section class="terms-section">
        <div class="term-grid">
          <div class="term-card">
            <h3>License to Use</h3>
            <p>EchoTune grants you a personal, non-exclusive, non-transferable license to use the app for personal, non-commercial media playback on your device.</p>
          </div>
          <div class="term-card">
            <h3>Content Ownership</h3>
            <p>You retain all rights to your local media. EchoTune does not host, share, or claim ownership of any content you play.</p>
          </div>
        </div>
      </section>

      <section class="terms-section">
        <h2>2. App Functionality</h2>
        <p>
          EchoTune utilizes advanced on-device technologies to provide a premium experience:
        </p>
        <ul class="feature-terms">
          <li><strong>Autoplay Engine:</strong> By using the app, you acknowledge that EchoTune processes local playback history to automate media transitions.</li>
          <li><strong>Engagement Engine:</strong> You agree to receive local notifications (which can be disabled in system settings) for app updates and feature highlights.</li>
          <li><strong>Permissions:</strong> You acknowledge that storage and media permissions are essential for the app's core functionality.</li>
        </ul>
      </section>

      <section class="terms-section">
        <h2>3. User Responsibilities</h2>
        <p>
          You are responsible for ensuring that you have the legal right to play the media files stored on your device. 
          You agree not to attempt to decompile, reverse engineer, or bypass any security features of the application.
        </p>
      </section>

      <section class="terms-section">
        <h2>4. Disclaimer of Warranty</h2>
        <div class="disclaimer-box">
          <p>
            EchoTune is provided "AS IS" without warranties of any kind. We do not guarantee that the app will be error-free or uninterrupted. 
            Local media playback depends on device hardware and file integrity.
          </p>
        </div>
      </section>

      <section class="terms-section">
        <h2>5. Limitation of Liability</h2>
        <p>
          In no event shall EchoTune or its developers be liable for any data loss, device damage, or indirect damages arising from the use of the app. 
          As an offline player, data management and backup are the sole responsibility of the user.
        </p>
      </section>

      <section class="terms-section">
        <h2>6. Changes to Terms</h2>
        <p>
          We reserve the right to update these terms at any time. Significant changes will be communicated via the app or our official website.
        </p>
      </section>

      <div class="contact-info">
        <p>Legal inquiries: <a href="mailto:aqib2k1@gmail.com" class="gradient-text">aqib2k1@gmail.com</a></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.legal-page {
  padding-top: 180px;
  padding-bottom: 120px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.top-right {
  top: -150px;
  right: -150px;
  background: var(--accent);
}

.bottom-left {
  bottom: -150px;
  left: -150px;
  background: var(--secondary);
}

.legal-header {
  text-align: center;
  margin-bottom: 80px;
}

.legal-header h1 {
  font-size: 5rem;
  margin-bottom: 16px;
  letter-spacing: -0.04em;
}

.subtitle {
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  color: var(--text-muted);
  font-size: 1.25rem;
}

.legal-content {
  padding: 80px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 64px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.terms-section h2 {
  font-size: 2.2rem;
  margin-bottom: 24px;
  color: white;
  background: linear-gradient(to right, #fff, #999);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-muted);
}

.term-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.term-card {
  padding: 32px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  border: 1px solid var(--glass-border);
  transition: all 0.4s ease;
}

.term-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: var(--accent);
  transform: translateY(-5px);
}

.term-card h3 {
  color: white;
  font-size: 1.4rem;
  margin-bottom: 12px;
  font-family: 'Outfit', sans-serif;
}

.feature-terms {
  list-style: none;
  padding: 0;
  margin-top: 24px;
}

.feature-terms li {
  margin-bottom: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  color: var(--text-muted);
  border-left: 4px solid var(--accent);
}

.feature-terms strong {
  color: var(--accent);
  display: block;
  margin-bottom: 4px;
}

.disclaimer-box {
  padding: 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px dashed rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.contact-info {
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid var(--glass-border);
  text-align: center;
}

@media (max-width: 1024px) {
  .legal-content {
    padding: 60px;
  }
}

@media (max-width: 768px) {
  .legal-page {
    padding-top: 140px;
    padding-bottom: 80px;
  }
  .legal-header h1 {
    font-size: 3.2rem;
  }
  .legal-content {
    padding: 40px 24px;
    gap: 48px;
  }
  .terms-section h2 {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .legal-header h1 {
    font-size: 2.5rem;
  }
  .legal-content {
    padding: 32px 20px;
  }
}
</style>
