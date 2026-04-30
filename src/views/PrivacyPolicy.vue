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

    const sections = document.querySelectorAll('.policy-section');
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

    const items = document.querySelectorAll('.permission-item');
    items.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        x: -20,
        duration: 0.5,
        delay: (index % 3) * 0.1,
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
    <div class="glow-spot top-left"></div>
    <div class="glow-spot bottom-right"></div>
    
    <header class="legal-header">
      <h1 class="gradient-text">Privacy Policy</h1>
      <p class="subtitle">Your privacy is our absolute priority. Last updated: April 30, 2026.</p>
    </header>

    <div class="legal-content glass-card">
      <section class="policy-section">
        <h2>1. Zero-Data Collection</h2>
        <p>
          EchoTune is designed as a **completely offline** media player. We do not collect, store, or share any personal information. 
          There are no user accounts, no tracking pixels, and no external analytics services integrated into the app.
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
              <p>Used by our <strong>Engagement Engine</strong> for local playback controls and reminders.</p>
            </div>
          </div>
          <div class="permission-item">
            <div class="perm-icon">🎤</div>
            <div class="perm-info">
              <h3>Microphone</h3>
              <p>Optional access used exclusively for voice-search within the app.</p>
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
          <li><strong>Autoplay Engine:</strong> Analyzes your local listening patterns on-device to suggest the next track. No data is sent to the cloud.</li>
          <li><strong>Engagement Engine:</strong> Triggers local notifications to help you discover app features. These are processed entirely within the app.</li>
        </ul>
      </section>

      <section class="policy-section">
        <h2>5. Data Security</h2>
        <p>
          All app-specific data, such as your favorites, playlists, and equalizer presets, are stored in a local encrypted database (**Hive**) on your device. 
          Uninstalling the app will remove all local data associated with it.
        </p>
      </section>

      <section class="policy-section">
        <h2>6. Third-Party Links</h2>
        <p>
          The app may contain links to our official website or open-source repositories. Once you leave the app, the privacy policy of the destination site applies.
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
