<template>
  <footer class="footer">
    <div class="section-container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">
            <img src="../assets/Echotune_icon_launcher.jpg" alt="EchoTune Logo" class="logo-img" />
            <span class="logo-text">EchoTune</span>
          </div>
          <p class="brand-desc">The high-performance, premium offline music player built with Flutter. Experience glassmorphism and AI-powered audio management in the palm of your hand.</p>
          <div class="app-info">
            <span class="badge">v2.1 Stable</span>
            <span class="badge">Offline First</span>
          </div>
        </div>

        <div class="footer-nav">
          <div class="footer-col">
            <h4>Experience</h4>
            <a href="/#setup">Setup</a>
            <a href="/#features">Features</a>
            <a href="/#moods">Mood Filters</a>
            <a href="/#swipe">Video Swipe</a>
            <a href="/#equalizer">Equalizer</a>
            <a href="/#faq">FAQ</a>
          </div>
          <div class="footer-col">
            <h4>Technology</h4>
            <span>Flutter Engine</span>
            <span>Provider State</span>
            <span>Gradle 8+ KTS</span>
            <span>Haptic Engine</span>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <router-link to="/privacy">Privacy Policy</router-link>
            <router-link to="/terms">Terms & Conditions</router-link>
            <router-link to="/terms">License</router-link>
          </div>
          <div class="footer-col">
            <h4>Connect</h4>
            <a href="mailto:aqib2k1@gmail.com">aqib2k1@gmail.com</a>
            <a href="tel:03173276706">03173276706</a>
            <a href="https://github.com/aqibmustafasurahio" target="_blank">GitHub Profile</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="bottom-content">
          <p>&copy; 2026 EchoTune Player. Developed by Aqib Mustafa Surahio.</p>
          <div class="social-icons">
            <!-- Simplified social icons for speed -->
            <span>GH</span> <span>TW</span> <span>DS</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 120px 0 60px;
  background: var(--bg-dark);
  border-top: 1px solid var(--glass-border);
  margin-top: auto;
  position: relative;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: 80px;
  margin-bottom: 80px;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 1.8rem;
  color: white;
}

.logo-img {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  object-fit: cover;
}

.brand-desc {
  color: var(--text-muted);
  line-height: 1.8;
  font-size: 1rem;
  max-width: 320px;
}

.app-info {
  display: flex;
  gap: 12px;
}

.badge {
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 0.8rem;
  color: var(--primary-light);
  border: 1px solid var(--glass-border);
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-col h4 {
  color: white;
  font-size: 1.1rem;
  margin-bottom: 8px;
  font-weight: 700;
  font-family: 'Outfit', sans-serif;
}

.footer-col a, .footer-col span {
  color: var(--text-dim);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.footer-col a:hover {
  color: var(--primary-light);
  transform: translateX(4px);
}

.footer-bottom {
  padding-top: 40px;
  border-top: 1px solid var(--glass-border);
}

.bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-dim);
  font-size: 0.9rem;
}

.social-icons {
  display: flex;
  gap: 20px;
  font-weight: 700;
  font-family: 'Outfit', sans-serif;
  font-size: 0.8rem;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  .footer-nav {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .footer-nav {
    grid-template-columns: 1fr;
  }
  .bottom-content {
    flex-direction: column;
    gap: 24px;
    text-align: center;
  }
}
</style>
