<template>
  <section id="features" class="feature-grid-section">
    <div class="section-container">
      <div class="grid-header reveal">
        <h2 class="gradient-text">Designed for Audiophiles</h2>
        <p>Powerful tools to manage, play, and enjoy your music collection without limits.</p>
      </div>
      
      <div class="bento-grid">
        <div class="bento-item lg reveal">
          <div class="bento-inner glass-card">
            <div class="bento-content">
              <h3>Pro-Grade Library Scanner</h3>
              <p>Intelligent MediaStore integration that indexes your storage while filtering out system sounds and notifications (under 30s) for a pristine library.</p>
              <div class="bento-badges">
                <span>MediaStore API</span> <span>MP3/FLAC</span> <span>Metadata Extraction</span>
              </div>
            </div>
            <div class="bento-bg bg-1"></div>
          </div>
        </div>
        
        <div class="bento-item md reveal">
          <div class="bento-inner glass-card">
            <div class="bento-content">
              <h3>Duplicate Cleaner</h3>
              <p>Save storage space with our one-tap tool that finds and removes identical audio files intelligently.</p>
            </div>
            <div class="bento-icon">🗑️</div>
          </div>
        </div>
        
        <div class="bento-item sm reveal">
          <div class="bento-inner glass-card">
            <div class="bento-content">
              <h3>Sleep Timer</h3>
              <p>Drift off to your favorite tracks with customizable auto-stop timers.</p>
            </div>
          </div>
        </div>
        
        <div class="bento-item sm reveal">
          <div class="bento-inner glass-card">
            <div class="bento-content">
              <h3>Engagement Engine</h3>
              <p>Smart daily reminders to re-engage with your music after 24h of inactivity.</p>
            </div>
          </div>
        </div>
        
        <div class="bento-item md reveal">
          <div class="bento-inner glass-card">
            <div class="bento-content">
              <h3>Smart Playlists</h3>
              <p>Dynamic lists like 'Most Played', 'Recently Added', and 'Trending' updated in real-time.</p>
            </div>
            <div class="bento-icon">⚡</div>
          </div>
        </div>
        
        <div class="bento-item lg reveal">
          <div class="bento-inner glass-card">
            <div class="bento-content">
              <h3>Home Screen Widgets</h3>
              <p>Control your music without opening the app. Premium Android widgets with live artwork and playback sync.</p>
            </div>
            <div class="bento-bg bg-2"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-grid-section {
  padding: 120px 0;
}

.grid-header {
  text-align: center;
  margin-bottom: 80px;
}

.grid-header h2 {
  font-size: 3.5rem;
  margin-bottom: 24px;
}

.grid-header p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 300px);
  gap: 24px;
}

.bento-item.lg { grid-column: span 2; }
.bento-item.md { grid-column: span 1; }
.bento-item.sm { grid-column: span 1; }

.bento-inner {
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.bento-content {
  position: relative;
  z-index: 2;
}

.bento-content h3 {
  font-size: 1.8rem;
  margin-bottom: 12px;
  color: white;
}

.bento-content p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0;
}

.bento-badges {
  display: flex;
  gap: 8px;
  margin-top: 20px;
}

.bento-badges span {
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary-light);
}

.bento-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.1;
  transition: opacity 0.5s ease;
}

.bento-inner:hover .bento-bg {
  opacity: 0.2;
}

.bg-1 {
  background: radial-gradient(circle at top right, var(--primary), transparent);
}

.bg-2 {
  background: radial-gradient(circle at bottom left, var(--accent), transparent);
}

.bento-icon {
  position: absolute;
  top: 40px;
  right: 40px;
  font-size: 3rem;
  opacity: 0.2;
}

@media (max-width: 1100px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
  .bento-item.sm, .bento-item.md, .bento-item.lg {
    grid-column: span 1;
    height: 350px;
  }
}

@media (max-width: 768px) {
  .feature-grid-section {
    padding: 80px 0;
  }
  .grid-header h2 {
    font-size: 2.5rem;
  }
  .bento-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .bento-inner {
    padding: 30px;
    height: 300px;
  }
  .bento-content h3 {
    font-size: 1.5rem;
  }
}
</style>
