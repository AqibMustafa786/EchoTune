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
        <!-- 1. Identity & Aesthetics -->
        <section class="tech-card glass-card reveal">
          <div class="card-icon">🎨</div>
          <h2>Identity & Aesthetics</h2>
          <div class="card-content">
            <p>EchoTune is designed with a <strong>Premium Glassmorphic</strong> aesthetic, prioritizing depth, vibrant colors, and smooth interactions.</p>
            <div class="tech-tags">
              <span>BackdropFilter</span> <span>Inter/Outfit Fonts</span> <span>GSAP</span>
            </div>
            <ul class="spec-list">
              <li><strong>Primary Palette:</strong> Deep Space Black (#0A0A0E), Premium Purple (#8B5CF6), Cyber Blue (#3B82F6).</li>
              <li><strong>Glassmorphism:</strong> Heavy use of <code>BackdropFilter</code> with blur values between 10.0 and 25.0.</li>
              <li><strong>Dynamic UI:</strong> Gradient backgrounds with subtle motion and persistent MiniPlayer.</li>
            </ul>
          </div>
        </section>

        <!-- 2. Core Architecture -->
        <section class="tech-card glass-card reveal">
          <div class="card-icon">🧠</div>
          <h2>Core Architecture</h2>
          <div class="card-content">
            <p>EchoTune follows a <strong>Provider-based Clean Architecture</strong> for scalability and state isolation.</p>
            <div class="tech-tags">
              <span>Provider</span> <span>Clean Architecture</span> <span>Hive</span>
            </div>
            <ul class="spec-list">
              <li><strong>AudioPlayerProvider:</strong> Bridges UI and low-level playback engine.</li>
              <li><strong>MusicLibraryProvider:</strong> Handles indexing, sorting, and filtering of local MP3 files.</li>
              <li><strong>Storage Engine:</strong> Hive (NoSQL) for ultra-fast key-value storage of preferences and history.</li>
              <li><strong>State Domains:</strong> Dedicated providers for Theme, Navigation, and Discovery.</li>
            </ul>
          </div>
        </section>

        <!-- 3. The Audio Ecosystem -->
        <section class="tech-card glass-card reveal">
          <div class="card-icon">🎵</div>
          <h2>The Audio Ecosystem</h2>
          <div class="card-content">
            <p>The heart of the app, built for professional-grade offline playback with precise control.</p>
            <div class="tech-tags">
              <span>just_audio</span> <span>audio_service</span> <span>on_audio_query</span>
            </div>
            <ul class="spec-list">
              <li><strong>Stack:</strong> <code>just_audio</code> for PCM streams and <code>audio_service</code> for background persistence.</li>
              <li><strong>Audio Handler:</strong> Custom implementation of <code>BaseAudioHandler</code> for system-level notifications.</li>
              <li><strong>DSP:</strong> 5-band digital signal processor with presets like Bass Boost and Vocal Clarity.</li>
              <li><strong>Sleep Timer:</strong> Integrated fade-out logic for smooth transitions to silence.</li>
            </ul>
          </div>
        </section>

        <!-- 4. Feature Deep-Dive -->
        <section class="tech-card glass-card reveal">
          <div class="card-icon">🚀</div>
          <h2>Feature Deep-Dive</h2>
          <div class="card-content">
            <p>Advanced features that set EchoTune apart from standard players.</p>
            <div class="tech-tags">
              <span>Music Scanner</span> <span>Notifications</span> <span>Kotlin</span>
            </div>
            <ul class="spec-list">
              <li><strong>Music Scanner:</strong> Intelligent MediaStore API integration; filters out non-music sounds (&lt;30s).</li>
              <li><strong>Engagement Engine:</strong> Smart local notifications (inactive &gt;24h) with <code>timezone</code> support and exact scheduling.</li>
              <li><strong>Android Premium Widget:</strong> Built with <code>home_widget</code> and native Kotlin for one-tap playback control.</li>
              <li><strong>Smart Playlists:</strong> Real-time generated 'Trending', 'Recently Played', and 'Most Played'.</li>
              <li><strong>Deep Linking:</strong> Custom <code>echotune://</code> schemes for seamless navigation from web to app settings.</li>
            </ul>
          </div>
        </section>

        <!-- 5. Foreground Services & Autoplay -->
        <section class="tech-card glass-card reveal">
          <div class="card-icon">🔄</div>
          <h2>Foreground Services & Autoplay</h2>
          <div class="card-content">
            <p>Critical interaction between notification permissions and playback logic for a seamless background experience.</p>
            <div class="tech-tags">
              <span>POST_NOTIFICATIONS</span> <span>WAKE_LOCK</span> <span>Foreground Service</span>
            </div>
            <ul class="spec-list">
              <li><strong>Notification Permission:</strong> Since Android 13 (API 33), <code>POST_NOTIFICATIONS</code> is required to display the Media Controller. Without it, the OS may kill the audio process when the app is minimized.</li>
              <li><strong>Autoplay Logic:</strong> <code>AudioPlayerService</code> handles the queue lifecycle. If <code>autoplay</code> is enabled, it automatically increments the index and plays the next song when the current one ends.</li>
              <li><strong>Background Stability:</strong> Uses <code>mediaPlayback</code> foreground service type and <code>WAKE_LOCK</code> to prevent the CPU from sleeping, ensuring audio doesn't stop when the screen turns off.</li>
              <li><strong>Web Audio Policy:</strong> Modern browsers block auto-play until user interaction. EchoTune's website respects these policies for all audio previews.</li>
            </ul>
          </div>
        </section>

        <!-- 6. Platform & Deployment -->
        <section class="tech-card glass-card reveal">
          <div class="card-icon">🛠️</div>
          <h2>Platform & Deployment</h2>
          <div class="card-content">
            <p>Stabilized and optimized for modern Android standards and Google Play deployment.</p>
            <div class="tech-tags">
              <span>SDK 36</span> <span>Android 11+</span> <span>Stability</span>
            </div>
            <ul class="spec-list">
              <li><strong>Configuration:</strong> <code>compileSdk 36</code>, <code>targetSdk 36</code>, <code>minSdk 21</code>.</li>
              <li><strong>Permissions:</strong> Hardened checks for <code>READ_MEDIA_AUDIO</code>, <code>POST_NOTIFICATIONS</code>, <code>SCHEDULE_EXACT_ALARM</code>, and <code>WAKE_LOCK</code>.</li>
              <li><strong>Battery Optimization:</strong> Automatic prompts for <code>REQUEST_IGNORE_BATTERY_OPTIMIZATIONS</code> to ensure gapless background playback.</li>
              <li><strong>Memory Management:</strong> Optimized background service handling to prevent system kills.</li>
            </ul>
          </div>
        </section>

        <!-- 7. Codebase Mapping -->
        <section class="tech-card glass-card reveal">
          <div class="card-icon">📂</div>
          <h2>Codebase Mapping</h2>
          <div class="card-content">
            <p>Organized modular structure for maintainability and rapid feature development.</p>
            <div class="tech-tags">
              <span>Modular</span> <span>Dart</span> <span>Flutter</span>
            </div>
            <ul class="spec-list">
              <li><code>/lib/core</code>: Global constants, theme data, and utilities.</li>
              <li><code>/lib/providers</code>: State management logic and business rules.</li>
              <li><code>/lib/services</code>: Singleton services for Audio, Storage, and Notifications.</li>
              <li><code>/lib/screens & /lib/widgets</code>: Reusable UI components and full layouts.</li>
            </ul>
          </div>
        </section>
      </div>

      <footer class="tech-footer reveal">
        <p>Documentation compiled by Antigravity on 2026-04-30.</p>
        <p>&copy; 2026 EchoTune Music Player. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let ctx = gsap.context(() => {
    gsap.from(".back-link", {
      opacity: 0,
      x: -20,
      duration: 0.6,
      ease: "power2.out"
    });

    gsap.from(".tech-header h1", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.2,
      ease: "power2.out"
    });

    gsap.from(".tech-header .subtitle", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out"
    });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
      gsap.fromTo(el, 
        { 
          opacity: 0, 
          y: 40,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  });
});
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
