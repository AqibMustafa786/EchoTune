<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useReveal } from '../composables/useReveal';

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
});

onUnmounted(() => {
  window.removeEventListener('touchstart', handleTouchStart);
  window.removeEventListener('touchend', handleTouchEnd);
});

// Initialize lightweight Intersection Observer reveals
useReveal();
</script>

<template>
  <div class="legal-page section-container">
    <div class="noise-overlay"></div>
    <div class="glow-spot top-left"></div>
    <div class="glow-spot bottom-right"></div>
    
    <header class="legal-header">
      <h1 class="gradient-text">Open Source Licenses</h1>
      <p class="subtitle">Compiled on May 4, 2026 | EchoTune Project</p>
    </header>

    <div class="legal-content glass-card">
      <section class="license-section">
        <h2>Acknowledgements</h2>
        <p>
          EchoTune is built using trusted open-source technologies. We sincerely thank the developers and communities behind these tools.
          All third-party libraries are used in accordance with their respective licenses.
        </p>
      </section>

      <section class="license-section">
        <h3 class="group-title">Core Frameworks</h3>
        <div class="license-grid">
          <div class="license-item">
            <span class="lib-name">Flutter SDK</span>
            <span class="license-type">BSD-3-Clause</span>
          </div>
          <div class="license-item">
            <span class="lib-name">Dart SDK</span>
            <span class="license-type">BSD-3-Clause</span>
          </div>
        </div>
      </section>

      <section class="license-section">
        <h3 class="group-title">Audio & Media Playback</h3>
        <div class="license-grid">
          <div class="license-item">
            <span class="lib-name">just_audio</span>
            <span class="license-type">MIT</span>
          </div>
          <div class="license-item">
            <span class="lib-name">audio_service</span>
            <span class="license-type">MIT</span>
          </div>
          <div class="license-item">
            <span class="lib-name">on_audio_query</span>
            <span class="license-type">MIT</span>
          </div>
          <div class="license-item">
            <span class="lib-name">video_player</span>
            <span class="license-type">BSD-3-Clause</span>
          </div>
          <div class="license-item">
            <span class="lib-name">audio_session</span>
            <span class="license-type">MIT</span>
          </div>
          <div class="license-item">
            <span class="lib-name">Autoplay Engine</span>
            <span class="license-type">MIT</span>
          </div>
        </div>
      </section>

      <section class="license-section">
        <h3 class="group-title">State Management & Storage</h3>
        <div class="license-grid">
          <div class="license-item">
            <span class="lib-name">provider</span>
            <span class="license-type">MIT</span>
          </div>
          <div class="license-item">
            <span class="lib-name">hive & hive_flutter</span>
            <span class="license-type">Apache 2.0</span>
          </div>
          <div class="license-item">
            <span class="lib-name">path_provider</span>
            <span class="license-type">BSD-3-Clause</span>
          </div>
        </div>
      </section>

      <section class="license-section">
        <h3 class="group-title">User Interface & Experience</h3>
        <div class="license-grid">
          <div class="license-item">
            <span class="lib-name">google_fonts</span>
            <span class="license-type">Apache 2.0</span>
          </div>
          <div class="license-item">
            <span class="lib-name">flutter_animate</span>
            <span class="license-type">MIT</span>
          </div>
          <div class="license-item">
            <span class="lib-name">marquee</span>
            <span class="license-type">MIT</span>
          </div>
        </div>
      </section>

      <section class="license-section">
        <h3 class="group-title">System & Permissions</h3>
        <div class="license-grid">
          <div class="license-item">
            <span class="lib-name">share_plus</span>
            <span class="license-type">BSD-3-Clause</span>
          </div>
          <div class="license-item">
            <span class="lib-name">sensors_plus</span>
            <span class="license-type">BSD-3-Clause</span>
          </div>
          <div class="license-item">
            <span class="lib-name">permission_handler</span>
            <span class="license-type">MIT</span>
          </div>
          <div class="license-item">
            <span class="lib-name">photo_manager</span>
            <span class="license-type">MIT</span>
          </div>
          <div class="license-item">
            <span class="lib-name">url_launcher</span>
            <span class="license-type">BSD-3-Clause</span>
          </div>
        </div>
      </section>

      <section class="license-section">
        <h3 class="group-title">User Engagement & Marketing</h3>
        <div class="license-grid">
          <div class="license-item">
            <span class="lib-name">Engagement Engine</span>
            <span class="license-type">MIT</span>
          </div>
          <div class="license-item">
            <span class="lib-name">Local Notifications</span>
            <span class="license-type">BSD-3-Clause</span>
          </div>
        </div>
      </section>

      <section class="license-section legal-notes">
        <h2>Legal Compliance</h2>
        <p>
          All third-party libraries used in EchoTune remain the property of their respective authors and are distributed under their original licenses.
          EchoTune does not modify or claim ownership of any open-source components.
        </p>
        <div class="app-hint">
          Full license texts are accessible within the app under:
          <strong>Settings → About → Open Source Licenses</strong>.
        </div>
      </section>

      <section class="license-section">
        <h2>Privacy Assurance</h2>
        <p>
          EchoTune does not collect, store, or share personal user data. All media playback occurs locally on the user's device.
          No user accounts, tracking systems, or external analytics services are used.
        </p>
      </section>

      <div class="contact-info">
        <p>For any questions: <a href="mailto:aqib2k1@gmail.com" class="gradient-text">aqib2k1@gmail.com</a></p>
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

.top-left {
  top: -150px;
  left: -150px;
  background: var(--primary);
}

.bottom-right {
  bottom: -150px;
  right: -150px;
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
  letter-spacing: 0.02em;
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

.license-section h2 {
  font-size: 2.2rem;
  margin-bottom: 24px;
  color: white;
  background: linear-gradient(to right, #fff, #999);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.group-title {
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--primary-light);
  margin-bottom: 24px;
  font-weight: 800;
}

p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-muted);
}

.license-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.license-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  transition: all 0.4s cubic-bezier(0.2, 0, 0.2, 1);
}

.license-item:hover {
  background: rgba(255, 255, 255, 0.06);
  transform: translateY(-4px) scale(1.02);
  border-color: var(--primary-light);
  box-shadow: 0 10px 30px rgba(255, 0, 127, 0.1);
}

.lib-name {
  color: white;
  font-weight: 700;
  font-family: 'Outfit', sans-serif;
  font-size: 1.1rem;
}

.license-type {
  font-size: 0.8rem;
  color: var(--primary-light);
  background: rgba(255, 45, 133, 0.15);
  padding: 6px 14px;
  border-radius: 100px;
  font-weight: 700;
  border: 1px solid rgba(255, 45, 133, 0.2);
}

.legal-notes .app-hint {
  margin-top: 24px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.02);
  border-left: 4px solid var(--primary);
  border-radius: 8px;
  font-size: 1.05rem;
  color: var(--text-main);
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
  .license-section h2 {
    font-size: 1.8rem;
  }
  .license-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .legal-header h1 {
    font-size: 2.5rem;
  }
  .subtitle {
    font-size: 1rem;
  }
  .legal-content {
    padding: 32px 20px;
  }
}
</style>
