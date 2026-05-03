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
      <h1 class="gradient-text">Privacy Policy</h1>
      <p class="subtitle">Developer: Aqib Mustafa Surahio | Last updated: May 4, 2026.</p>
    </header>

    <div class="legal-content glass-card">
      <section class="policy-section">
        <h2>1. Privacy-First Philosophy</h2>
        <p>
          EchoTune is built with a <strong>Privacy-First</strong> philosophy. We are a completely offline media ecosystem. 
          We do not collect, store, or share your personal media data. Your songs, videos, and habits stay exclusively on your device.
        </p>
      </section>

      <section class="policy-section">
        <h2>2. Media & Storage Access</h2>
        <p>
          To function as a media player, EchoTune requires access to your device's storage. We use the <strong>photo_manager</strong> and <strong>on_audio_query</strong> 
          libraries to scan for local audio and video files.
        </p>
        <div class="highlight-box">
          <p><strong>Strict Privacy:</strong> Your files never leave your device. EchoTune does not upload, copy, or transmit your media to any server.</p>
        </div>
      </section>

      <section class="policy-section">
        <h2>3. Permissions Overview</h2>
        <div class="permission-grid">
          <div class="permission-item">
            <div class="perm-icon">📂</div>
            <div class="perm-info">
              <h3>Storage / Media</h3>
              <p>Used to index and play your local music and video library.</p>
            </div>
          </div>
          <div class="permission-item">
            <div class="perm-icon">🔔</div>
            <div class="perm-info">
              <h3>Notifications</h3>
              <p>Critical for displaying the <strong>Media Controller</strong>. On Android 13+, this permission ensures the OS does not terminate the audio process during background playback.</p>
            </div>
          </div>
          <div class="permission-item">
            <div class="perm-icon">🎤</div>
            <div class="perm-info">
              <h3>Microphone</h3>
              <p>Optional access used exclusively for voice-search within the app.</p>
            </div>
          </div>
          <div class="permission-item">
            <div class="perm-icon">🔋</div>
            <div class="perm-info">
              <h3>Battery Optimization</h3>
              <p>Requested to prevent system-kills during long background listening sessions.</p>
            </div>
          </div>
          <div class="permission-item">
            <div class="perm-icon">⏰</div>
            <div class="perm-info">
              <h3>Exact Alarms</h3>
              <p>Used to schedule precise engagement reminders via our local engine.</p>
            </div>
          </div>
          <div class="permission-item">
            <div class="perm-icon">📳</div>
            <div class="perm-info">
              <h3>Shake Detection</h3>
              <p>Used for the "Shake to Change" feature (optional).</p>
            </div>
          </div>
        </div>
      </section>

      <section class="policy-section">
        <h2>4. Intelligent Engines</h2>
        <p>
          EchoTune features advanced local engines to enhance your experience:
        </p>
        <ul class="feature-list">
          <li><strong>Autoplay Engine:</strong> Manages sequential playback by monitoring track completion and automatically transitioning to the next item in your queue.</li>
          <li><strong>Engagement Engine:</strong> Triggers local notifications to help you discover app features. These are processed entirely within the app.</li>
        </ul>
      </section>

      <section class="policy-section">
        <h2>5. Data Deletion & Retention</h2>
        <p>
          Since EchoTune is an offline player, we do not store your data on any external servers. All data (playlists, favorites, settings) is stored locally.
        </p>
        <ul class="feature-list">
          <li><strong>How to Delete:</strong> You can delete all your data at any time by clearing the application cache/data in your device settings or by uninstalling the application.</li>
          <li><strong>Retention:</strong> We do not retain any of your media data after the application is removed from your device.</li>
        </ul>
      </section>

      <section class="policy-section">
        <h2>6. Children's Privacy (COPPA)</h2>
        <p>
          EchoTune is not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children. 
          If you are under 13, please do not attempt to use the service or send any personal information about yourself to us.
        </p>
      </section>

      <section class="policy-section">
        <h2>7. International Compliance (GDPR/CCPA)</h2>
        <p>
          While EchoTune does not collect personal data, we respect international privacy standards. Users in the EU (GDPR) and California (CCPA) have the right to access and control their local data via the app settings.
        </p>
      </section>

      <section class="policy-section">
        <h2>8. Third-Party Links & Services</h2>
        <p>
          The app may contain links to our official website. Once you leave the app, the privacy policy of the destination site applies. 
          EchoTune does not use third-party tracking SDKs or analytics providers.
        </p>
      </section>

      <div class="contact-info">
        <p>Privacy concerns? Contact us at: <a href="mailto:aqib2k1@gmail.com" class="gradient-text">aqib2k1@gmail.com</a></p>
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

.policy-section h2 {
  font-size: 2.2rem;
  margin-bottom: 24px;
  color: white;
  background: linear-gradient(to right, #fff, #999);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-muted);
}

.highlight-box {
  margin-top: 24px;
  padding: 24px;
  background: rgba(255, 45, 133, 0.05);
  border-left: 4px solid var(--primary);
  border-radius: 12px;
}

.permission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.permission-item {
  display: flex;
  gap: 20px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  transition: all 0.4s ease;
}

.permission-item:hover {
  background: rgba(255, 255, 255, 0.06);
  transform: translateY(-5px);
  border-color: var(--primary-light);
}

.perm-icon {
  font-size: 2rem;
}

.perm-info h3 {
  color: white;
  margin-bottom: 8px;
  font-family: 'Outfit', sans-serif;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin-top: 24px;
}

.feature-list li {
  margin-bottom: 16px;
  padding-left: 24px;
  position: relative;
  color: var(--text-muted);
  font-size: 1.1rem;
}

.feature-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary-light);
  font-weight: bold;
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
  .policy-section h2 {
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
