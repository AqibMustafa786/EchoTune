<template>
  <section id="hero" class="hero-section">
    <div class="noise-overlay"></div>
    <div class="glow-spot top-left"></div>
    <div class="glow-spot bottom-right"></div>
    
    <div class="section-container">
      <div class="hero-content">
        <div class="hero-text">
          <div class="tag-hero">Version 2.0 is Here</div>
          <h1>Experience Music <br/><span class="gradient-text">at the Speed of Light.</span></h1>
          <p>EchoTune is the world's most powerful offline media player. High-fidelity audio, immersive video "swipe" technology, and AI mood filters—all in one beautiful glassmorphic package.</p>
          
          <div class="hero-btns">
            <a href="#download" class="btn-primary">
              Get Started Free
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#features" class="btn-secondary">Explore Features</a>
          </div>
          
          <div class="hero-stats">
            <div class="stat">
              <strong>500K+</strong>
              <span>Downloads</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <strong>4.9/5</strong>
              <span>Rating</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <strong>100%</strong>
              <span>Offline</span>
            </div>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="hero-mockup-wrapper reveal">
            <div class="phone-mockup phone-3d">
              <div class="phone-screen">
                <img :src="heroImage" alt="EchoTune App Mockup" />
              </div>
            </div>
            <div class="floating-card c1">
              <div class="f-icon">🎵</div>
              <div>
                <strong>Lossless Audio</strong>
                <p>24-bit/192kHz</p>
              </div>
            </div>
            <div class="floating-card c2">
              <div class="f-icon">🎨</div>
              <div>
                <strong>Glassmorphic UI</strong>
                <p>Pure Elegance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImage from '../assets/app-screenshots/homescreen.jpeg';
</script>

<style scoped>
.hero-section {
  padding: 160px 0 100px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.top-left {
  top: -100px;
  left: -100px;
}

.bottom-right {
  bottom: -100px;
  right: -100px;
  background: var(--accent);
}

.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
}

.tag-hero {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary-light);
  margin-bottom: 32px;
}

h1 {
  font-size: 5.5rem;
  line-height: 1;
  margin-bottom: 32px;
}

p {
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 48px;
  max-width: 600px;
}

.hero-btns {
  display: flex;
  gap: 20px;
  margin-bottom: 64px;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 40px;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat strong {
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  font-family: 'Outfit', sans-serif;
}

.stat span {
  font-size: 0.9rem;
  color: var(--text-dim);
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--glass-border);
}

.hero-mockup-wrapper {
  position: relative;
}

.hero-mockup {
  width: 100%;
  max-width: 500px;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 30px 100px rgba(0,0,0,0.6));
}

.floating-card {
  position: absolute;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 24px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 3;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.c1 {
  top: 10%;
  left: -20%;
  animation: float 6s infinite ease-in-out;
}

.c2 {
  bottom: 20%;
  right: -10%;
  animation: float 8s infinite ease-in-out reverse;
}

.f-icon {
  width: 40px;
  height: 40px;
  background: var(--primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.floating-card strong {
  display: block;
  font-size: 1rem;
  color: white;
}

.floating-card p {
  font-size: 0.8rem;
  margin-bottom: 0;
  color: var(--text-muted);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@media (max-width: 1200px) {
  h1 { font-size: 4rem; }
  .c1, .c2 { display: none; }
}

@media (max-width: 968px) {
  .hero-section {
    padding: 120px 0 60px;
  }
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  p { margin-left: auto; margin-right: auto; font-size: 1.1rem; }
  .hero-btns { justify-content: center; flex-direction: column; align-items: center; }
  .btn-primary, .btn-secondary { width: 100%; max-width: 300px; justify-content: center; }
  .hero-stats { justify-content: center; gap: 20px; }
  .stat strong { font-size: 1.2rem; }
  .hero-mockup { width: 100%; margin-top: 40px; }
}

@media (max-width: 480px) {
  h1 { font-size: 2.8rem; }
  .tag-hero { font-size: 0.8rem; margin-bottom: 20px; }
  .hero-stats { flex-wrap: wrap; }
}
</style>
