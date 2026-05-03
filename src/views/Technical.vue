<template>
  <div class="technical-page">
    <div class="section-container">
      <header class="tech-header reveal">
        <router-link to="/" class="back-link">
          <span class="icon">←</span> Back to Home
        </router-link>
        <h1 class="gradient-text">Technical Compendium</h1>
        <p class="subtitle">Deep dive into EchoTune's architecture, stack, and premium engineering.</p>
      </header>

      <div class="tech-grid">
        <!-- 1. Unified Media Library -->
        <section class="tech-card glass-card reveal">
          <div class="card-icon">📚</div>
          <h2>Unified Media Library</h2>
          <div class="card-content">
            <p>A seamless, high-performance interface for all your local media assets.</p>
            <div class="tech-tags">
              <span>Dual-Engine</span> <span>WhatsApp Integration</span> <span>High-Res Audio</span>
            </div>
            <ul class="spec-list">
              <li><strong>Dual-Engine Support:</strong> Unified playback for High-Res Audio and Device Gallery Videos.</li>
              <li><strong>WhatsApp Integration:</strong> Dedicated source filtering for instant access to WhatsApp audio media.</li>
              <li><strong>Smart Metadata:</strong> Automatic resolution of track info, artist tags, and album artwork.</li>
              <li><strong>Library Management:</strong> Persistent playlists and lightning-fast search across titles and folders.</li>
            </ul>
          </div>
        </section>

        <!-- 2. Professional Audio Suite -->
        <section class="tech-card glass-card reveal">
          <div class="card-icon">🎚️</div>
          <h2>Professional Audio Suite</h2>
          <div class="card-content">
            <p>Precision audio control and real-time visualization for the audiophile listener.</p>
            <div class="tech-tags">
              <span>10-Band EQ</span> <span>Smart Auto-EQ</span> <span>Waveform Visualizer</span>
            </div>
            <ul class="spec-list">
              <li><strong>10-Band EQ:</strong> Precision tuning with professional-grade presets (Jazz, Rock, Pop, etc.).</li>
              <li><strong>Smart Auto-EQ:</strong> Dynamic profile adjustment based on the active track's genre.</li>
              <li><strong>Dynamic Waveform:</strong> High-performance, animated visualizer responsive to real-time playback.</li>
              <li><strong>DSP Effects:</strong> Advanced Bass Boost and Virtualizer for immersive listening.</li>
            </ul>
          </div>
        </section>

        <!-- 3. Intelligent Engagement System -->
        <section class="tech-card glass-card reveal">
          <div class="card-icon">🧠</div>
          <h2>Intelligent Engagement</h2>
          <div class="card-content">
            <p>An event-driven re-engagement platform designed to keep listeners connected.</p>
            <div class="tech-tags">
              <span>Behavioral Tracking</span> <span>CTR Optimization</span> <span>Lifecycle Protection</span>
            </div>
            <ul class="spec-list">
              <li><strong>Behavioral Tracking:</strong> Monitors listening habits and usage frequency to personalize timing.</li>
              <li><strong>Re-Engagement Nudges:</strong> Automated, personalized notifications scheduled after 24h of inactivity.</li>
              <li><strong>CTR Optimization:</strong> Uses randomized, persuasive message templates to drive app returns.</li>
              <li><strong>Lifecycle Protection:</strong> Automatic cancellation of reminders upon app resume for zero intrusion.</li>
            </ul>
          </div>
        </section>

        <!-- 4. Performance Engineering -->
        <section class="tech-card glass-card reveal">
          <div class="card-icon">⚡</div>
          <h2>Performance Engineering</h2>
          <div class="card-content">
            <p>Industry-grade optimization for a smooth, zero-jank mobile experience.</p>
            <div class="tech-tags">
              <span>Sliver-Rendering</span> <span>Selector-Pattern</span> <span>Root-Navigator</span>
            </div>
            <ul class="spec-list">
              <li><strong>Sliver-Based Rendering:</strong> Optimized for 10,000+ tracks with fluid 60FPS scrolling.</li>
              <li><strong>Selector-Pattern State:</strong> Granular UI rebuilds to maintain responsiveness during heavy engine tasks.</li>
              <li><strong>Root-Navigator Orchestration:</strong> Full-screen player transitions with perfect UI layering.</li>
              <li><strong>Tech Stack:</strong> Flutter, Just Audio, Hive NoSQL, and Timezone-aware local notifications.</li>
            </ul>
          </div>
        </section>

        <!-- 5. Privacy & Data Transparency -->
        <section class="tech-card glass-card reveal">
          <div class="card-icon">🔒</div>
          <h2>Privacy & Data Transparency</h2>
          <div class="card-content">
            <p>A Privacy-First philosophy ensuring your media and habits remain strictly local.</p>
            <div class="tech-tags">
              <span>Offline-First</span> <span>Local Persistence</span> <span>No Tracking</span>
            </div>
            <ul class="spec-list">
              <li><strong>Zero External Data:</strong> No collection of personal media; all files stay on your device.</li>
              <li><strong>Local Storage:</strong> Encrypted Hive storage for favorites, settings, and playlists.</li>
              <li><strong>Permission Hardening:</strong> Minimum-viable permission requests for media, notifications, and shake-detection.</li>
              <li><strong>No Analytics:</strong> Absolute zero third-party tracking or analytics pixels.</li>
            </ul>
          </div>
        </section>

        <!-- 6. UX Aesthetics & Haptics -->
        <section class="tech-card glass-card reveal">
          <div class="card-icon">🎨</div>
          <h2>UX Aesthetics & Haptics</h2>
          <div class="card-content">
            <p>Premium glassmorphic design with physical tactile feedback on every interaction.</p>
            <div class="tech-tags">
              <span>Glassmorphism</span> <span>Dynamic Accent</span> <span>Haptic Engine</span>
            </div>
            <ul class="spec-list">
              <li><strong>Glassmorphic UI:</strong> Modern, translucent elements with high-quality backdrop blur.</li>
              <li><strong>Dynamic Accent:</strong> Theme colors adapt in real-time to the current track's artwork.</li>
              <li><strong>Haptic Engine:</strong> Tactical physical feedback on play, skip, and like interactions.</li>
              <li><strong>Adaptive Layout:</strong> Pixel-perfect scaling from compact phones to flagship tablets.</li>
            </ul>
          </div>
        </section>
      </div>

      <footer class="tech-footer reveal">
        <p>Documentation compiled by Antigravity on 2026-05-04.</p>
        <p>&copy; 2026 EchoTune Music Player. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { useReveal } from '../composables/useReveal';

// Initialize lightweight Intersection Observer reveals
useReveal();
</script>

<style scoped>
.technical-page {
  padding: 120px 0;
  min-height: 100vh;
  background: radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15), transparent 50%);
}

.tech-header {
  margin-bottom: 80px;
  text-align: center;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-light);
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 32px;
  transition: transform 0.3s ease;
}

.back-link:hover {
  transform: translateX(-5px);
}

.tech-header h1 {
  font-size: 4rem;
  margin-bottom: 16px;
}

.subtitle {
  font-size: 1.4rem;
  color: var(--text-muted);
  max-width: 700px;
  margin: 0 auto;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.tech-card {
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.tech-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(139, 92, 246, 0.4);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 8px;
}

.tech-card h2 {
  font-size: 2rem;
  color: white;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 20px 0;
}

.tech-tags span {
  padding: 6px 14px;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary-light);
}

.spec-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.spec-list li {
  padding-left: 24px;
  position: relative;
  line-height: 1.6;
  color: var(--text-muted);
}

.spec-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 6px;
  background: var(--primary);
  border-radius: 50%;
}

.spec-list li code {
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--accent-light);
  font-size: 0.9em;
}

.tech-footer {
  margin-top: 100px;
  text-align: center;
  color: var(--text-dim);
  font-size: 1rem;
}

@media (max-width: 968px) {
  .tech-grid {
    grid-template-columns: 1fr;
  }
  .tech-header h1 {
    font-size: 2.8rem;
  }
  .tech-card {
    padding: 32px;
  }
}

@media (max-width: 480px) {
  .tech-header h1 {
    font-size: 2.2rem;
  }
  .subtitle {
    font-size: 1.1rem;
  }
}
</style>
