<script setup>
import { onMounted, onUnmounted } from 'vue';

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
  // Detect swipe from left to right with a threshold of 100px
  if (swipeDistance > 100) {
    // Redirect to the EchoTune app settings screen via custom deep link
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
</script>

<template>
  <div class="legal-page section-container">
    <div class="noise-overlay"></div>
    <div class="glow-spot top-left"></div>
    
    <header class="legal-header">
      <h1 class="gradient-text">Open Source Licenses</h1>
      <p class="last-updated">EchoTune is built with love and open-source software.</p>
    </header>

    <div class="legal-content glass-card">
      <section>
        <h2>Acknowledgements</h2>
        <p>
          EchoTune is built using trusted open-source technologies. We sincerely thank the developers and communities behind these tools.
          All third-party libraries are used in accordance with their respective licenses.
        </p>
      </section>

      <section>
        <h2>Core Technologies</h2>
        <div class="license-group">
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

      <section>
        <h2>Audio & Media Playback</h2>
        <div class="license-group">
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
        </div>
      </section>

      <section>
        <h2>State Management & Storage</h2>
        <div class="license-group">
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

      <section>
        <h2>User Interface & Experience</h2>
        <div class="license-group">
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

      <section>
        <h2>System Integration</h2>
        <div class="license-group">
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
            <span class="lib-name">url_launcher</span>
            <span class="license-type">BSD-3-Clause</span>
          </div>
        </div>
      </section>

      <section>
        <h2>Legal Compliance</h2>
        <p>
          All third-party libraries used in EchoTune remain the property of their respective authors and are distributed under their original licenses.
          EchoTune does not modify or claim ownership of any open-source components.
        </p>
        <p>
          Full license texts are accessible within the app under:
          <strong>Settings → About → Open Source Licenses</strong>.
        </p>
      </section>

      <section>
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
}

.top-left {
  top: -100px;
  left: -100px;
}

.legal-header {
  text-align: center;
  margin-bottom: 60px;
}

.legal-header h1 {
  font-size: 4.5rem;
  margin-bottom: 12px;
}

.last-updated {
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  color: var(--text-dim);
  letter-spacing: 0.05em;
}

.legal-content {
  padding: 80px;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: white;
  font-family: 'Outfit', sans-serif;
}

p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-muted);
}

.license-group {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.license-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid var(--glass-border);
  transition: all 0.3s ease;
}

.license-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
  border-color: var(--primary-light);
}

.lib-name {
  color: white;
  font-weight: 700;
  font-family: 'Outfit', sans-serif;
}

.license-type {
  font-size: 0.85rem;
  color: var(--primary-light);
  background: rgba(255, 45, 133, 0.1);
  padding: 4px 12px;
  border-radius: 100px;
  font-weight: 600;
}

.contact-info {
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid var(--glass-border);
  text-align: center;
}

@media (max-width: 768px) {
  .legal-page {
    padding-top: 120px;
    padding-bottom: 60px;
  }
  .legal-content {
    padding: 40px 24px;
    gap: 32px;
  }
  .legal-header h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 1.6rem;
  }
  p {
    font-size: 1rem;
  }
  .license-group {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .legal-header h1 {
    font-size: 2.2rem;
  }
  .legal-content {
    padding: 32px 20px;
  }
}
</style>
