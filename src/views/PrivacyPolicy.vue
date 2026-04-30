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
      <h1 class="gradient-text">Privacy Policy</h1>
      <p class="last-updated">Last updated: April 30, 2026</p>
    </header>

    <div class="legal-content glass-card">
      <section>
        <h2>1. Introduction</h2>
        <p>EchoTune is an offline music and video player. We are committed to protecting your privacy. This app is designed to work completely on your device without collecting personal data.</p>
      </section>

      <section>
        <h2>2. Data Collection</h2>
        <p>EchoTune <strong>does NOT collect, store, or share any personal information</strong>, including name, email address, phone number, or location. We do NOT create user accounts.</p>
      </section>

      <section>
        <h2>3. Device Storage Access</h2>
        <p>EchoTune requires access to your device storage in order to scan and display your audio and video files, organize media into albums, artists, and folders, and enable playback.</p>
        <p><strong>Important:</strong> All files remain on your device. We do NOT upload, copy, or share your media files.</p>
      </section>

      <section>
        <h2>4. Permissions Usage</h2>
        <ul class="permission-list">
          <li><strong>Storage / Media Access:</strong> Read and display your local media files and play audio and video.</li>
          <li><strong>Microphone (Optional):</strong> Used only for voice search functionality. We do NOT record or store audio.</li>
          <li><strong>Internet (Optional):</strong> Used only for app updates (if applicable). No data is sent to any server.</li>
        </ul>
      </section>

      <section>
        <h2>5. Data Storage</h2>
        <p>All app data (favorites, playlists, history) is stored locally on your device. We do NOT use cloud storage and do NOT share any data with third parties.</p>
      </section>

      <section>
        <h2>6. Third-Party Services</h2>
        <p>EchoTune <strong>does NOT use any third-party services</strong> that collect user data.</p>
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

.permission-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.permission-list li {
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid var(--glass-border);
  color: var(--text-muted);
}

.permission-list strong {
  color: var(--primary-light);
  margin-right: 8px;
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
